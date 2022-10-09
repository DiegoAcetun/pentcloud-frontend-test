import axios from "axios";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
export default function ArticulosAutores({ autores, articulos }) {
  function buscarArticulos(nombreAutor) {
    // console.log("entrando");
    const articulosEncontrados = articulos.filter((articulo) => articulo.author.name === nombreAutor
    );
    // console.log("articulo", articuloEncontrados);
    if (articulosEncontrados.length > 0) {
      return articulosEncontrados.map((articulo) => {
      return (
        <Card key={articulo.id} title={articulo.title} body={articulo.body} />
      );
    });
    }
    return <p className="text-3xl text-red-600">Autor sin articulos</p>;
  }
  return (
    <Layout>
      <div className="text-white text-center container border border-white mx-auto">
        <p className="text-3xl">Articulos ordenados por autor</p>
        {/* <div className="flex flex-wrap justify-center items-center text-center">
          <Card title="first title" body="Labore rerum voluptas minima est magnam cum. Et modi voluptatibus consequatur eum vel sed et voluptatibus iusto. Nemo et et est incidunt aut qui.\nVoluptate fugiat consequatur. Dolore facere minima in magnam minus ut. Ut soluta cumque veritatis voluptas placeat itaque aut. Incidunt omnis aperiam ut alias dolores est animi. Qui odio tenetur rerum.\nNemo amet magni laborum ut eius error vel ipsa et. Corrupti amet placeat qui quia. Neque quia fugit est occaecati culpa.\nQuisquam sunt iste adipisci. Consequuntur amet possimus. Voluptatem laudantium ad itaque."/>
        </div> */}
        {autores.map((autor) => {
          // return(<p key={autor.name}>{autor.name}</p>)
          return (
            <div key={autor.id}>
              <p className="text-3xl underline">{autor.name}</p>
              <div className="flex flex-wrap justify-center items-center text-center">
                {buscarArticulos(autor.name)}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const queryAutores = {
    query: "query{authors(options: {limit:200}){rows{name id}}}",
  };
  const resAutores = await axios.post(
    "https://blog-backend-blush.vercel.app/graphql/",
    queryAutores
  );

  const queryArticulos = {
    query:
      "query{posts(options: {limit:200}){rows{title body id author{id name}}}}",
  };
  const resArticulos = await axios.post(
    "https://blog-backend-blush.vercel.app/graphql/",
    queryArticulos
  );
  // console.log("resAutores", resAutores.data);
  const autores = resAutores.data.data.authors.rows;
  const articulos = resArticulos.data.data.posts.rows;
  // console.log("articulos", articulos[0].author.name);
  // console.log("datos", autores.length);
  // console.log("exito");

  return {
    props: {
      autores,
      articulos,
    },
  };
};

// {"query": "query{authors(options: {limit:5000}){rows{name}}}"}
// {"query":"query{posts{rows{titleauthor{idname}}}}"}
