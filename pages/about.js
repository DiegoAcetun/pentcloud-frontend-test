import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
export default function about() {
  return (
    <>
      <Layout>
        <NavBar paginaActual={"about"} />
        <div className="grid grid-cols-2">
          <div className="md:ml-20">
            <p className="mt-20 md:text-9xl text-white">Sobre Nosotros</p>
            {/* <p className="mt-5 md:text-6xl text-white">THE WORLD</p> */}
            <p className="md:mt-10 leading-8 mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              dolore amet, ea odit aliquid placeat corporis vitae delectus!
              Dolorum nulla deserunt natus atque nostrum ad assumenda modi
              labore ex in!
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
