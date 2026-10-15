import { useEffect, useState } from "react";
import logo from "../../../assets/Logo.jpeg";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-140}
      activeClass="bg-[#E0F2FE] text-[#0284C7] shadow-sm font-semibold"
      className={`px-5 py-2.5 mx-1 rounded-full text-gray-600 hover:text-[#0284C7] hover:bg-sky-50 transition-all duration-300 ease-in-out cursor-pointer inline-block`}
    >
      {item.name}
    </Link>
  </li>
));

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white border-transparent"
      } z-50 transition-all duration-500 ease-in-out`}
    >
      <div className="navbar flex justify-between mx-auto content max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-56 p-2 shadow-lg font-semibold flex-col bg-white text-black`}
            >
              {menu}
            </ul>
          </div>

          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5 cursor-pointer"
          >
            <img
              src={logo}
              className="h-8 sm:h-12 rounded-xl object-contain"
              alt="logo"
            />
            <p className="text-2xl sm:text-[28px] my-auto ms-[12px] font-bold text-gray-800">
              Amanda
            </p>
          </Link>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[15px] font-medium items-center md:shrink-0">
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
