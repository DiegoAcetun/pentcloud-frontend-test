import axios from "axios";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
export default function ArticulosCategorias({ categorias, articulos }) {
  function buscarArticulos(idCategoria) {
    // console.log("entrando", idCategoria);
    // const categoriasArticulo = articulos.map((articulo) => {
    //   return articulo.categories;
    // });
    const articulosEncontrados = [];
    articulos.forEach((articulo) => {
      articulo.categories.forEach((categoria) => {
        if (categoria.id === idCategoria) {
          articulosEncontrados.push(articulo);
        }
        
      });
    });

    if (articulosEncontrados.length > 0) {
      // console.log("articulosEncontrados");
      return articulosEncontrados.map((articulo) => {
        return (
          <Card key={articulo.id} title={articulo.title} body={articulo.body} />
        );
      });
    }
    return <p className="text-3xl text-red-600">Categoria sin articulos</p>;
  }
    // console.log("articulo", articulosEncontrados);
    // console.log("articulo", articulos[0].categories);
    // const a = articulos[0].categories;
    // if (articulosEncontrados.length > 0) {
    //   return articulosEncontrados.map((articulo) => {
    //     // console.log("articulo", articulo);
    //     return (
    //       <Card key={articulo.id} title={articulo.title} body={articulo.body} />
    //     );
    //   });
    // }
    // console.log("ennnn");
    // return <p className="text-3xl text-red-600">Categoria sin articulos</p>;
  
  return (
    <Layout>
      <div className="text-white text-center container border border-white mx-auto">
        <p className="text-3xl">Articulos ordenados por categoria</p>
        {categorias.map((categoria) => {
          return (
            <div key={categoria.id}>
              <p className="text-3xl underline">{categoria.name}</p>
              <div className="flex flex-wrap justify-center items-center text-center">
                {buscarArticulos(categoria.id)}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const queryCategorias = {
    query: "query{categories(options:{limit:200}){rows{id name}}}",
  };
  const resCategorias = await axios.post(
    "https://blog-backend-blush.vercel.app/graphql/",
    queryCategorias
  );

  const queryArticulos = {
    query:
      "query{posts(options: {limit:200}){rows{title body id categories{id name}}}}",
  };
  const resArticulos = await axios.post(
    "https://blog-backend-blush.vercel.app/graphql/",
    queryArticulos
  );
  // console.log("resCategorias", resCategorias.data);
  const categorias = resCategorias.data.data.categories.rows;
  // console.log(resArticulos.data.data.posts.rows, "gag");
  const articulos = resArticulos.data.data.posts.rows;
  // console.log("articulos", articulos);


  const articulosEncontrados = [];
  articulos.forEach((articulo) => {
    // console.log("articulo", articulo);
    articulo.categories.forEach((categoria) => {
      console.log("categoriass", categoria);
      if (categoria.id === "6bc1cdf8-8f96-4800-abc0-e624dbca0722")
        console.log("entro");

      // categorias.forEach((categoria) => {
      //   if (categoria.id === idCategoria) {
      //     articulosEncontrados.push(articulo);
      //   }
      // });
    });
  });

  

  return {
    props: {
      categorias,
      articulos,
    },
  };
};

// {"query": "query{authors(options: {limit:5000}){rows{name}}}"}
// {"query":"query{posts{rows{titleauthor{idname}}}}"}
