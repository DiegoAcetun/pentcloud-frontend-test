import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import axios from "axios";
export default function Articulos({autores, articulos}) {
  function bb(nombreAutor){
    console.log("entrando");
    const articulo = articulos.find((articulo) => articulo.author.name === nombreAutor);
    if(articulo){
      return(
        <p className="text-red-400">{articulo.title}</p>
      )
    }
    return <p className="text-yellow-400">sin articulos</p>;
    // return(
    //   <p>{articulo.author.name}</p>
    // )
  }
  return (
    <Layout>
      <div className="text-white text-center container border border-white mx-auto">
        <p className="text-3xl">Posts</p>
        {autores.map((autor) =>{
        // return(<p key={autor.name}>{autor.name}</p>) 
        return (
          <div key={autor.name}>
            <p key={autor.name}>{autor.name}</p>
            {
              bb(autor.name)
            }
            {/* {articulos.map((articulo) => {
              if (autor.name === articulo.author.name) {
                return <p key={articulo.title}>{articulo.title}</p>;
              }
            })} */}
          </div>
        ); 
        })}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const queryAutores = { query: "query{authors(options: {limit:200}){rows{name}}}" };
  const resAutores = await axios.post("https://blog-backend-blush.vercel.app/graphql/", queryAutores);

  const queryArticulos = {
    query: "query{posts(options: {limit:200}){rows{title author{id name}}}}",
  };
  const resArticulos = await axios.post("https://blog-backend-blush.vercel.app/graphql/", queryArticulos);
  // console.log("resAutores", resAutores.data);
  const autores = resAutores.data.data.authors.rows;
  const articulos = resArticulos.data.data.posts.rows;
  console.log("articulos", articulos[0].author.name);
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