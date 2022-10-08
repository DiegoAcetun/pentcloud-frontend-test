import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
export default function services() {
  return (
    <>
      <Layout>
        <NavBar paginaActual={"service"} />
        <p className="text-2xl text-white">services</p>
      </Layout>
    </>
  );
}
