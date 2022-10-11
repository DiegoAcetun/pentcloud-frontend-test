import Layout from "../components/moleculas/Layout";
import NavBar from "../components/moleculas/NavBar";
import Main from "../components/moleculas/service/Main";
export default function service() {
  return (
    <>
      <Layout>
        <NavBar paginaActual={"service"} />
          <Main />
      </Layout>
    </>
  );
}
