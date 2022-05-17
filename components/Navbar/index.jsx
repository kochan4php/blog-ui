import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const navMenu = useRef(null);
  const hamburger = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    router.push("/");
  };

  return (
    <header className="bg-transparent w-full py-6 mb-2 md:mb-6">
      <div className="container">
        <div className="flex justify-between items-center w-full relative">
          <button
            className="lg:hidden text-slate-300 text-lg cursor-pointer hover:text-slate-400 transiton duration-300"
            ref={hamburger}
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {open && (
            <>
              <div className="flex">
                <nav className="absolute lg:static lg:flex bg-slate-800 lg:bg-transparent lg:border-0 items-center lg:w-[660px] xl:w-[750px] text-lg top-14 border border-slate-500 w-[200px] shadow-md lg:shadow-none md:w-[350px] shadow-slate-500 left-0 rounded-md text-center z-[999]">
                  <ul className="flex flex-col lg:flex-row justify-between items-center w-full">
                    <li className="px-6 py-4 md:px-8 md:py-5 lg:p-0 text-slate-300 hover:text-slate-400 transition-colors duration-200 cursor-pointer">
                      <Link href={"/posts/uiuxdesign"}>UI Design</Link>
                    </li>
                    <li className="px-6 py-4 md:px-8 md:py-5 lg:p-0 text-slate-300 hover:text-slate-400 transition-colors duration-200 cursor-pointer">
                      <Link href={"/posts/frontend"}>Front End</Link>
                    </li>
                    <li className="px-6 py-4 md:px-8 md:py-5 lg:p-0 text-slate-300 hover:text-slate-400 transition-colors duration-200 cursor-pointer">
                      <Link href={"/posts/backend"}>Back End</Link>
                    </li>
                    <li className="px-6 py-4 md:px-8 md:py-5 lg:p-0 text-slate-300 hover:text-slate-400 transition-colors duration-200 cursor-pointer">
                      <button className="flex items-center justify-center gap-2">
                        <p>Lainnya</p>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </>
          )}
          <div className="lg:hidden">
            <button
              className="flex items-center justify-center gap-1 hover:text-slate-400"
              onClick={handleClick}
            >
              <div className="flex justify-between items-center">
                <div className="w-[35px] h-[35px] flex justify-center items-center rounded bg-slate-500 text-slate-100 mr-3 text-xl p-1">
                  K
                </div>
                <p className="text-slate-300 text-xl truncate">kumikochan</p>
              </div>
            </button>
          </div>
          <div className="flex">
            <nav className="hidden lg:static lg:flex bg-slate-800 lg:bg-transparent lg:border-0 items-center lg:w-[660px] xl:w-[750px] text-lg top-14 border border-slate-500 w-[270px] shadow-md lg:shadow-none md:w-[350px] shadow-slate-500 left-0 rounded-md text-center z-[999]">
              <ul className="flex flex-col lg:flex-row justify-between items-center w-full">
                <li className="px-6 py-4 md:px-8 md:py-5 lg:p-0 text-slate-300 hover:text-slate-400 group transition-colors duration-200">
                  <button
                    className="flex items-center justify-center gap-1 hover:text-slate-400"
                    onClick={handleClick}
                  >
                    <div className="flex justify-between items-center">
                      <div className="w-[35px] h-[35px] flex justify-center items-center rounded bg-slate-500 text-slate-100 mr-3 text-xl p-1">
                        K
                      </div>
                      <p className="text-slate-300 text-xl truncate">
                        kumikochan
                      </p>
                    </div>
                  </button>
                </li>
                <li className="px-6 py-4 md:px-8 md:py-5 lg:p-0 text-slate-300 hover:text-slate-400 transition-colors duration-200 cursor-pointer">
                  <Link href={"/posts/uiuxdesign"}>UI Design</Link>
                </li>
                <li className="px-6 py-4 md:px-8 md:py-5 lg:p-0 text-slate-300 hover:text-slate-400 transition-colors duration-200 cursor-pointer">
                  <Link href={"/posts/frontend"}>Front End</Link>
                </li>
                <li className="px-6 py-4 md:px-8 md:py-5 lg:p-0 text-slate-300 hover:text-slate-400 transition-colors duration-200 cursor-pointer">
                  <Link href={"/posts/backend"}>Back End</Link>
                </li>
                <li className="px-6 py-4 md:px-8 md:py-5 lg:p-0 text-slate-300 hover:text-slate-400 transition-colors duration-200 cursor-pointer">
                  <button className="flex items-center justify-center gap-2">
                    <p>Lainnya</p>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="md:hidden text-slate-300 cursor-pointer hover:text-slate-400 transiton duration-300 text-sm flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="hidden md:flex md:gap-2">
            <form action="">
              <input
                type="text"
                name="search"
                placeholder="Search"
                autoComplete="off"
                className="px-4 py-1.5 rounded-full bg-slate-600 text-white focus:ring focus:outline-none"
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
