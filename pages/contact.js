import Layout from "../components/moleculas/Layout";
import NavBar from "../components/moleculas/NavBar";
import Main from "../components/moleculas/contact/Main";
export default function Contact() {
  return (
    <>
      <Layout>
        <NavBar paginaActual={"contact"} />
        <Main />
      </Layout>
    </>
  );
}
