import logo from "../assets/logo.png";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [shouldShowNavbar, setShouldShowNavbar] = useState(true);
  const prevScrollPos = useRef(0);
  const onScroll = () => {
    const currScrollPos = window.scrollY;
    if (currScrollPos <= 10) {
      setShouldShowNavbar(true);
    }  else {
      setShouldShowNavbar(false);

    }

    prevScrollPos.current = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <nav
      className={`border-b border-dashed border-white/20 transition-all z-nav fixed top-0 inset-x-0 py-4 px-20 ${
        shouldShowNavbar
          ? "translate-y-0 opacity-100"
          : "-translate-y-10 opacity-0"
      }`}
    >
      <div className="flex justify-between items-center w-full mx-auto max-app-width">
        <img src={logo} className="w-12" />
        <ul className="flex gap-3 items-center">
          <li>
            <button className="bg-primary hover:brightness-90 md:px-6 px-3 py-2 rounded-full font-bold uppercase">
              Talk with me!
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
