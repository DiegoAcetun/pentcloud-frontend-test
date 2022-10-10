import Form from "../../atomos/Form";
export default function Main(){
  return (
    <>
      <div className="mx-16">
        <p className="md:text-6xl text-3xl text-white mt-3">Contactenos</p>
        <p className="md:text-xl text-sm md:mt-10 mt-5 md:mb-10 mb-5 text-white">
          Para todas las consultas envienos un correo electrónico llenando el
          siguiente formulario
        </p>
        <Form />
      </div>
    </>
  );
}