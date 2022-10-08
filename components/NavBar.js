import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../images/descarga.png";
export default function NavBar({ paginaActual }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const handleClick = () => {
    // menuRef.current.classList.toggle("hidden");
    setIsOpen(!isOpen);
    console.log("The a was clicked.");
  };
  return (
    <>
      <div className="navbar bg-transparent p-0">
        <div className="flex-1 md:mx-16 p-0">
          <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
            <Image
              src={logo}
              alt="Picture of the author"
              // className="rounded-full max-w-0"
              width={150}
              height={40}
              priority={true}
              // layout="responsive"
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

          <div className={(isOpen ? "" : "hidden ") + "md:block"} ref={menuRef}>
            <ul className="text-2xl text-center menu md:menu-horizontal md:mx-16">
              {/* <li className="p-3 text-2xl border-4 border-green-600 rounded-full"> */}
              <Link href="/">
                {/* //border-white rounded-full */}
                <a
                  className={
                    (paginaActual === "home" ? "border border-white " : "") +
                    "py-1 px-3 hover:bg-black hover:cursor-pointer rounded-full"
                  }
                >
                  <p className="">Home</p>
                </a>
              </Link>
              <Link href="/about" about>
                <a
                  className={
                    (paginaActual === "about" ? "border border-white " : "") +
                    "py-1 px-3 hover:bg-black hover:cursor-pointer rounded-full"
                  }
                >
                  <p>About</p>
                </a>
              </Link>
              <Link href="/service">
                <a
                  className={
                    (paginaActual === "service" ? "border border-white " : "") +
                    "py-1 px-3 hover:bg-black hover:cursor-pointer rounded-full"
                  }
                >
                  <p>Service</p>
                </a>
              </Link>

              <Link href="/contact">
                <a
                  className={
                    (paginaActual === "contact" ? "border border-white " : "") +
                    "py-1 px-3 hover:bg-black hover:cursor-pointer rounded-full"
                  }
                >
                  <p>Contact</p>
                </a>
              </Link>
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
