import { useEffect } from "react";
import ToggleIcon from "../UI/ToggleIcon";
import { useProvider } from "./PostProvider";
import { Link, useLocation } from "react-router-dom";
import Button from "../UI/Button";

function Navbar() {
  const { responsive, dispatch, section1, section2, section3, toggle } = useProvider();
  const location = useLocation();

  const scrollToSection = (section) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
    dispatch({type:"toggle", payload: false})
  };

  useEffect(() => {
    const updateResponsiveState = () => {
      dispatch({ type: "responsive", payload: window.innerWidth < 1141 });
    };

    updateResponsiveState();
    window.addEventListener("resize", updateResponsiveState);
    return () => window.removeEventListener("resize", updateResponsiveState);
  }, [dispatch]);

  const renderMobileMenu = () => (
    toggle ? (
      location.pathname === "/about-me" ? (
        <ul className="flex flex-col text-center gap-10 py-3 px-2 text-sm text-[var(--light-gray)] cursor-pointer bg-black h-auto w-full fixed top-0 left-0 underline">
          <Button onClick={() => dispatch({ type: "toggle", payload: false })}>Close</Button>
          <Link to="/" className="text-sm text-[var(--light-gray)]" onClick={() => dispatch({type:"toggle", payload: false})}>Back Home</Link>
        </ul>
      ) : (
        <ul className="flex flex-col text-center gap-10 py-3 px-2 text-sm text-[var(--light-gray)] cursor-pointer bg-black h-auto w-full fixed top-0 left-0 underline">
          <Button onClick={() => dispatch({ type: "toggle", payload: false })}>Close</Button>
          <li onClick={() => scrollToSection(section1)}>Work</li>
          <li onClick={() => scrollToSection(section2)}>About</li>
          <li onClick={() => scrollToSection(section3)}>Contact</li>
        </ul>
      )
    ) : (
      <ToggleIcon onClick={() => dispatch({ type: "toggle", payload: true })} />
    )
  );

  const renderDesktopMenu = () => (
    location.pathname === "/about-me" ? (
      <Link to="/" className="text-sm text-[var(--light-gray)]">Back Home</Link>
    ) : (
      <ul className="flex gap-4 text-sm text-[var(--light-gray)] cursor-pointer">
        <li onClick={() => scrollToSection(section1)}>Work</li>
        <li onClick={() => scrollToSection(section2)}>About</li>
        <li onClick={() => scrollToSection(section3)}>Contact</li>
      </ul>
    )
  );

  return (
    <nav className="flex flex-row justify-between items-center px-20 h-14 w-full fixed bg-black top-0">
      <h1 className="text-2xl font-bebas text-[var(--light-gray)]">Kingsley Effiong</h1>
      {responsive ? renderMobileMenu() : renderDesktopMenu()}
    </nav>
  );
}

export default Navbar;