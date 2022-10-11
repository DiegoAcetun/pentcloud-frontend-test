import { useState } from "react";
import Button from "../../atomos/Button";
import Card from "../../atomos/articulos/Card";

export default function Main({ articulos, autores, categorias }) {
  const [ordenarPor, setOrdenarPor] = useState("");

  function agruparAutores() {
    setOrdenarPor("autores");
  }
  function agruparCategorias() {
    setOrdenarPor("categorias");
  }
  function noAgrupar() {
    setOrdenarPor("");
  }
  function ordenarPorAutores() {
    return (
      <div className="text-white text-center container  mx-auto">
        <p className="text-3xl">Articulos agrupados por autor</p>
        {autores.map((autor) => {
          // return(<p key={autor.name}>{autor.name}</p>)
          return (
            <div key={autor.id}>
              <p className="text-3xl underline text-teal-200">{autor.name}</p>
              <div className="flex flex-wrap justify-center items-center text-center">
                {buscarPorAutor(autor.name)}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  function buscarPorAutor(nombreAutor) {
    // console.log("entrando");
    const articulosEncontrados = articulos.filter(
      (articulo) => articulo.author.name === nombreAutor
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

  function ordenarPorCategorias(nombreCategoria) {
    return (
      <div className="text-white text-center container mx-auto">
        <p className="text-3xl">Articulos agrupados por categoria</p>
        {categorias.map((categoria) => {
          return (
            <div key={categoria.id}>
              <p className="text-3xl underline text-teal-200">
                {categoria.name}
              </p>
              <div className="flex flex-wrap justify-center items-center text-center">
                {buscarPorCategoria(categoria.id)}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  function buscarPorCategoria(idCategoria) {
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

  function listar() {
    return (
      <div className="text-white text-center container mx-auto">
        <p className="text-3xl">Articulos agrupados por categoria</p>
        <div className="flex flex-wrap justify-center items-center text-center">
          {articulos.map((articulo) => {
            return (
                <Card
                  key={articulo.id}
                  title={articulo.title}
                  body={articulo.body}
                />

            );
          })}
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <p className="text-6xl text-white text-center">Articulos</p>
        <div className="sm:flex justify-center">
          <Button
            text="Sin argupar"
            evento={() => setOrdenarPor("")}
            clase="m-4"
          />
          <Button
            text="Agrupar por autores"
            evento={() => setOrdenarPor("autores")}
            clase="m-4"
          />
          <Button
            text="Agrupar por categorias"
            evento={() => setOrdenarPor("categorias")}
            clase="m-4"
          />
        </div>
        {ordenarPor === "categorias"
          ? ordenarPorCategorias()
          : ordenarPor === "autores"
          ? ordenarPorAutores()
          : listar()}
      </div>
    </>
  );
}
