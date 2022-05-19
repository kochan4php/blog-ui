import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const route = [
  { destination: "/posts/uiuxdesign", routeName: "UI-UX Design" },
  { destination: "/posts/software", routeName: "Software" },
  { destination: "/posts/frontend", routeName: "Frontend" },
  { destination: "/posts/backend", routeName: "Backend" },
];

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const handleBackToRoot = () => router.push("/");

  return (
    <header className="bg-slate-700 bg-opacity-40 backdrop-blur-lg fixed top-0 right-0 left-0 py-2.5 md:py-3 mb-6 lg:py-4">
      <div className="container relative">
        <div className="flex justify-between items-center">
          {/* For Mobile & Tablet */}
          <div className="lg:hidden">
            <button
              className="lg:hidden text-slate-300 text-lg cursor-pointer hover:text-slate-400 transiton duration-300"
              onClick={handleClick}
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
          </div>
          <button className="lg:hidden" onClick={handleBackToRoot}>
            <div className="flex justify-between items-center">
              <div className="w-[35px] h-[35px] flex justify-center items-center rounded bg-slate-500 text-slate-100 mr-3 text-xl p-1">
                K
              </div>
              <p className="text-slate-300 text-xl truncate">kumikochan</p>
            </div>
          </button>
          {open && (
            <nav className="bg-slate-800 fixed top-0 right-0 left-0 z-[999] w-full h-screen lg:hidden">
              <button
                className="bg-red-600 text-white absolute p-1.5 md:2.5 left-6 top-6 rounded-md"
                onClick={handleClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ul className="flex flex-col lg:flex-row justify-evenly text-2xl md:text-4xl lg:text-2xl items-center w-full h-full">
                {route.map(({ destination, routeName }, index) => (
                  <li
                    className="px-6 md:px-8 md:py-5 lg:p-0 text-slate-300 transition-colors duration-200 cursor-pointer rounded-md hover:text-sky-500"
                    key={index}
                  >
                    <button onClick={handleClose}>
                      <Link href={destination} passHref>
                        <a>{routeName}</a>
                      </Link>
                    </button>
                  </li>
                ))}
                <li className="px-6 md:px-8 md:py-5 lg:p-0 text-slate-300 hover:text-sky-500 transition-colors duration-200 cursor-pointer">
                  <button
                    className="flex items-center justify-center gap-2"
                    onClick={handleClose}
                  >
                    <p>Lainnya</p>
                  </button>
                </li>
              </ul>
            </nav>
          )}
          <div className="lg:hidden text-slate-300 cursor-pointer hover:text-slate-400 transiton duration-300 text-sm flex gap-3 items-center">
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
          {/* For Mobile & Tablet */}

          {/* For Desktop */}
          <nav className="hidden lg:flex lg:items-center w-[900px]">
            <ul className="flex justify-between text-lg items-center w-full h-full">
              <li className="p-0 text-slate-300 transition-colors duration-200 cursor-pointer rounded-md hover:text-sky-500 mr-10">
                <button className="hidden lg:block" onClick={handleBackToRoot}>
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
              {route.map(({ destination, routeName }, index) => (
                <li
                  className="px-6 md:px-8 md:py-5 lg:p-0 text-slate-300 transition-colors duration-200 cursor-pointer rounded-md hover:text-sky-500"
                  key={index}
                >
                  <button onClick={handleClose}>
                    <Link href={destination} passHref>
                      <a>{routeName}</a>
                    </Link>
                  </button>
                </li>
              ))}
              <li className="p-0 text-slate-300 hover:text-sky-500 transition-colors duration-200 cursor-pointer">
                <button
                  className="flex items-center justify-center gap-2"
                  onClick={handleClose}
                >
                  <p>Lainnya</p>
                </button>
              </li>
            </ul>
          </nav>
          <div className="hidden text-slate-300 cursor-pointer hover:text-slate-400 transiton duration-300 text-sm lg:flex gap-3 items-center">
            <form>
              <input
                type="search"
                name="search"
                id="search"
                autoComplete="off"
                placeholder="Search"
                className="px-4 py-2 rounded-full focus:outline-none focus:ring focus:ring-sky-500 bg-slate-800 text-slate-50"
              />
            </form>
          </div>
          {/* For Desktop */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
