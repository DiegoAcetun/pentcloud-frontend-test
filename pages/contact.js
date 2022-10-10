import Layout from "../components/moleculas/Layout";
import NavBar from "../components/moleculas/NavBar";
export default function Contact() {
  return (
    <>
      <Layout>
        <NavBar paginaActual={"contact"} />
        <p className="text-2xl text-white">contact</p>
      </Layout>
    </>
  );
}
