import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
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
