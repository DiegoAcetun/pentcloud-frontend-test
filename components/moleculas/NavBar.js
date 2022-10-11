import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
// import logo from "../../images/descarga.png";
import logo from "../../public/logo.png";
export default function NavBar({ paginaActual }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  return (
    <>
      <div className="navbar bg-transparent p-0 text-white">
        <div className="flex-1 md:mx-16 p-0">
          <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
            <Image
              src={logo}
              alt="Picture of the author"
              width={140}
              height={50}

              priority={true}

            />
          </a>
        </div>

        <div className="flex-col mr-8 md:mr-0 justify-center">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="text-3xl rounded-lg md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FaBars size="30" />
          </button>

          <div className={(isOpen ? "" : "hidden ") + "md:block"} ref={menuRef}>
            <ul className="text-2xl text-center menu md:menu-horizontal md:mx-16">
              <Link href="/">
                <a
                  className={
                    (paginaActual === "home" ? "border-2 border-white " : "") +
                    "py-1 px-3 hover:bg-black hover:cursor-pointer rounded-full"
                  }
                >
                  <p className="">Home</p>
                </a>
              </Link>
              <Link href="/about" about>
                <a
                  className={
                    (paginaActual === "about" ? "border-2 border-white " : "") +
                    "py-1 px-3 hover:bg-black hover:cursor-pointer rounded-full"
                  }
                >
                  <p>About</p>
                </a>
              </Link>
              <Link href="/service">
                <a
                  className={
                    (paginaActual === "service" ? "border-2 border-white " : "") +
                    "py-1 px-3 hover:bg-black hover:cursor-pointer rounded-full"
                  }
                >
                  <p>Service</p>
                </a>
              </Link>

              <Link href="/contact">
                <a
                  className={
                    (paginaActual === "contact" ? "border-2 border-white " : "") +
                    "py-1 px-3 hover:bg-black hover:cursor-pointer rounded-full"
                  }
                >
                  <p>Contact</p>

                </a>
              </Link>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
