import { useRef } from "react";
import { FaBars } from "react-icons/fa";
export default function NavBar() {
  const menuRef = useRef(null);
  const handleClick = () => {
    menuRef.current.classList.toggle("hidden");
    console.log("The link was clicked.");
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1 mx-16">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>

        <div className="block mr-8 md:mr-0 text-center">
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
            <ul className="menu md:menu-horizontal p-0 md:mx-16">
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a>Item 2</a>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
