import Card from "../../atomos/service/Card";
import { FaBars } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";
export default function () {
  return (
    <>
      <p className="text-white text-3xl text-center">
        Ofrecemos los siguientes servicios
      </p>
      <div className="flex flex-wrap justify-center items-center text-center mt-20">
        <Card icono={<MdElectricalServices />} titulo="Servicio1" />
        <Card icono={<MdElectricalServices />} titulo="Servicio1" />
        <Card icono={<MdElectricalServices />} titulo="Servicio1" />
        <Card icono={<MdElectricalServices />} titulo="Servicio1" />
        <Card icono={<MdElectricalServices />} titulo="Servicio1" />
        <Card icono={<MdElectricalServices />} titulo="Servicio1" />
      </div>
    </>
  );
}
