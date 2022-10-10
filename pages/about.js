import Layout from "../components/moleculas/Layout";
import NavBar from "../components/moleculas/NavBar";
import Main from "../components/moleculas/about/Main";
export default function about() {
  return (
    <>
      <Layout>
        <NavBar paginaActual={"about"} />
        <Main /> 
      </Layout>
    </>
  );
}
