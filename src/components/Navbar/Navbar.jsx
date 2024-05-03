import { MenuFoldOutlined } from "@ant-design/icons";

export default function Navbar({ open, setOpen }) {
  return (
    <header className="bg-[#FDD670]">
      <div className="mx-auto max-w-screen-xl ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <MenuFoldOutlined
              onClick={() => setOpen(!open)}
              style={{ fontSize: "20px" }}
            />
            <a className="block text-teal-600" href="#">
              <img
                src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-471/Default/components/header/Header/images/logo-small.png?q=low&webp=21&alpha=1"
                alt="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-471/Default/components/header/Header/images/logo-small.png?q=low&webp=21&alpha=1"
                style={{ backgroundRepeat: "no-repeat" }}
              />
            </a>
          </div>
          {/* search */}
          <div className="relative mr-16 bg-gray-100 w-[450px] md:disabled">
            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm pl-4"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
                <span className="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
          {/* others */}
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <button className="text-gray-500 transition hover:text-gray-500/75">
                    {" "}
                    Projects{" "}
                  </button>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-[#E04F54] px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Login
                </a>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
