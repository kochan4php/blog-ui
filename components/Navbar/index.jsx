import Link from "next/link";

const Navbar = () => (
  <header className="bg-transparent w-full py-6 mb-2">
    <div className="container">
      <div className="flex justify-between items-center w-full relative">
        <button
          className="lg:hidden text-slate-300 text-lg cursor-pointer hover:text-slate-400 transiton duration-300"
          id="hamburger"
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
        <div className="flex">
          <nav
            className="hidden absolute lg:static lg:flex bg-slate-800 lg:bg-transparent lg:border-0 items-center lg:w-[650px] xl:w-[800px] text-lg top-16 border border-slate-500 w-[200px] shadow-md lg:shadow-none md:w-[400px] shadow-slate-400 left-0 rounded-md text-center"
            id="nav-menu"
          >
            <ul className="flex flex-col lg:flex-row justify-between items-center w-full">
              <li className="p-6 md:p-8 lg:p-0 text-slate-300 hover:text-slate-400 transition-colors duration-200">
                <div className="flex justify-between items-center mr-8">
                  <div className="w-[38px] h-[38px] flex justify-center items-center rounded bg-slate-500 text-slate-100 mr-3 text-xl p-1">
                    E
                  </div>
                  <p className="text-slate-300 text-xl font-semibold">
                    Epicetus
                  </p>
                </div>
              </li>
              <li className="p-6 md:p-8 lg:p-0 text-slate-300 hover:text-slate-400 transition-colors duration-200">
                <Link href={"/"}>UI Design</Link>
              </li>
              <li className="p-6 md:p-8 lg:p-0 text-slate-300 hover:text-slate-400 transition-colors duration-200">
                <Link href={"/"}>Front End</Link>
              </li>
              <li className="p-6 md:p-8 lg:p-0 text-slate-300 hover:text-slate-400 transition-colors duration-200">
                <Link href={"/"}>Back End</Link>
              </li>
              <li className="p-6 md:p-8 lg:p-0 text-slate-300 hover:text-slate-400 transition-colors duration-200">
                <Link href={"/"}>Lainnya</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="lg:hidden text-slate-300 cursor-pointer hover:text-slate-400 transiton duration-300 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 fill-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="hidden lg:block">
          <form action="">
            <input
              type="text"
              name="search"
              placeholder="Search"
              autoComplete="off"
              className="px-4 py-2 rounded-full bg-slate-600 text-white focus:ring focus:outline-none"
            />
          </form>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
