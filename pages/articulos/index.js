import { useState } from "react";
import axios from "axios";
import Button from "../../components/atomos/Button";
import Layout from "../../components/moleculas/Layout";
import Card from "../../components/atomos/articulos/Card";
import Main from "../../components/moleculas/articulos/Main";
export default function Articulos({ articulos, autores, categorias }) {
  return(
    <Layout>
      <Main articulos={articulos} autores={autores} categorias={categorias} />
    </Layout>
  )
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
      "query{posts(options: {limit:200}){rows{title body id author{id name} categories{id name}}}}",
  };
  const resArticulos = await axios.post(
    "https://blog-backend-blush.vercel.app/graphql/",
    queryArticulos
  );

  const queryCategorias = {
    query: "query{categories(options:{limit:200}){rows{id name}}}",
  };
  const resCategorias = await axios.post(
    "https://blog-backend-blush.vercel.app/graphql/",
    queryCategorias
  );

  const autores = resAutores.data.data.authors.rows;
  const articulos = resArticulos.data.data.posts.rows;
  const categorias = resCategorias.data.data.categories.rows;

  return {
    props: {
      autores,
      articulos,
      categorias,
    },
  };
};
