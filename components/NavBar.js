import Image from "next/image";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../images/descarga.png";
export default function NavBar() {
  const menuRef = useRef(null);
  const handleClick = () => {
    menuRef.current.classList.toggle("hidden");
    console.log("The link was clicked.");
  };
  return (
    <>
      <div className="navbar bg-transparent border-2 border-red-500 p-0 h-0">
        <div className="flex-1 mx-16 p-0">
          <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
            <Image
              src={logo}
              alt="Picture of the author"
              // className="rounded-full max-w-0"
              width={150}
              height={40}
              // layout="intrinsic"
              // objectFit="cover"
            />
          </a>
        </div>

        <div className="flex-col mr-8 md:mr-0 justify-center">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="text-3xl border-2 border-red-500 rounded-lg md:hidden"
            onClick={() => {
              handleClick();
            }}
          >
            <FaBars size="30" />
          </button>

          <div className="hidden  md:block" ref={menuRef}>
            <ul className="text-2xl menu md:menu-horizontal md:mx-16">
              {/* <li className="p-3 text-2xl border-4 border-green-600 rounded-full"> */}
              <a className="border-2 border-red-300 rounded-full py-1 px-3 hover:bg-black hover:cursor-pointer">
                <p className="">Home</p>
              </a>
              <a className="border-2 border-green-300 rounded-full py-1 px-3">
                <p>About</p>
              </a>
              <a className="border-2 border-blue-300 rounded-full py-1 px-3">
                <p>Services</p>
              </a>

              <a className="border-2 border-white rounded-full py-1 px-3">
                <p>Contact</p>
              </a>
              {/* </li> */}
              {/* <li tabIndex={0}>
                <a>Item 2</a>
                <a>Item 3</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
