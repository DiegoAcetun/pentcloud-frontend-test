import { useRouter } from "next/router";
import Card from "../../atomos/service/Card";
import Button from "../../atomos/Button";
import {
  AiOutlineVideoCameraAdd,
  AiFillCar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  MdElectricalServices,
  MdDesignServices,
  MdMedicalServices,
} from "react-icons/md";
export default function Main() {
  const router = useRouter();
  const handleOnClick = (e) => {
    router.push("/contact");
  }
  return (
    <>
      <p className="text-white text-3xl font-bold text-center">
        Servicios profesionales
      </p>
      <p className="text-white text-lg text-center leading-8 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
        dignissim velit, et varius nisl. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Integer quis
        vestibulum metus. Maecenas fermentum ut ligula non sodales. Sed ut
        viverra purus. Praesent nibh leo, porttitor eget ante vel, consectetur
        placerat tellus. Curabitur vulputate feugiat varius. Donec id ante
        finibus, cursus massa eu, congue enim. Suspendisse vitae congue velit,
        at venenatis lectus. Suspendisse orci lacus, tempus in condimentum sit
        amet, tincidunt ac quam. Sed venenatis metus vel leo euismod tempus.
        Proin viverra mi a est pharetra fermentum.
      </p>
      <div className="mt-5 font-bold">
        <p className="text-white text-3xl text-center">
          Ofrecemos los siguientes servicios
        </p>
        <div className="flex flex-wrap justify-center items-center text-center">
          <Card icono={<MdElectricalServices />} titulo="Servicio1" />
          <Card icono={<MdDesignServices />} titulo="Servicio2" />
          <Card icono={<MdMedicalServices />} titulo="Servicio3" />
          <Card icono={<AiOutlineVideoCameraAdd />} titulo="Servicio4" />
          <Card icono={<AiFillCar />} titulo="Servicio5" />
          <Card icono={<AiOutlineShoppingCart />} titulo="Servicio6" />
        </div>
      </div>
      <div className="mt-5 mb-5 text-center">
        <Button text="CONTACTENOS" evento={handleOnClick} />
      </div>
    </>
  );
}
