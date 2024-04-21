import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-6 bg-zinc-200  w-screen h-lvh">
        <div className="mt-3 max-w-screen-xl mx-auto">
          <header className="flex flex-row items-center justify-between">
            <div>
              {" "}
              <Link href="/" className="font-semibold text-gray-800">
                Jukunye
              </Link>
            </div>
            <div className="flex-1"></div>
            <div className="hidden sm:flex gap-5 font-light">
              <Link href="#" className="hover:text-emerald-600">
                Skills
              </Link>
              <Link href="#" className="hover:text-emerald-600">
                Projects
              </Link>
              <Link href="#" className="hover:text-emerald-600">
                Contact
              </Link>
            </div>
          </header>
          <div className="flex flex-col items-center justify-center pt-16 sm:pt-32 ">
            <h1 className="text-lg sm:text-2xl text-gray-600">
              Hi, Am Jukunye
            </h1>
            <p className="text-center text-2xl sm:text-3xl  md:text-4xl font-bold text-gray-600">
              A <span className="text-emerald-600">Full stack developer</span>{" "}
              in the making.
            </p>
            <p className="mt-6 sm:mt-3 sm:text-center text-lg sm:text-2xl  md:text-3xl font-semibold text-gray-600">
              Let&apos;s transform the idea to Software.
            </p>
          </div>
          <div className="flex gap-5 items-center justify-center mt-16">
            <button className="font-light border-2 border-gray-600 px-2 py-1 rounded-full hover:border-emerald-600">
              Contact me
            </button>
            <a href="https://www.linkedin.com/in/jukunye/" target="_blank">
              <svg
                className="fill-gray-600 hover:fill-emerald-600"
                width="40"
                height="40"
                viewBox="-11.494 -16.312 99.612 97.871"
              >
                <path d="M72.865 61.11a1.2 1.2 0 001.21-1.27c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.03h.724l-1.389-2.1zm-.783-.473h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836m-16.873-5.433h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.94v15.293h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM59.991.004H4.781A4.728 4.728 0 000 4.674v55.44a4.731 4.731 0 004.781 4.674h55.21a4.741 4.741 0 004.8-4.675V4.67a4.738 4.738 0 00-4.8-4.67"></path>
                <path d="M72.164 56.411a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"></path>
              </svg>
            </a>
            <a href="https://github.com/jukunye/" target="_blank">
              <svg
                className="fill-gray-600 hover:fill-emerald-600"
                width="30"
                height="30"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                />
              </svg>
            </a>
          </div>
          <p className="text-center text-emerald-600 mt-72 sm:mt-80 font-light text-sm">
            Please check back soon for more information about me.
          </p>
        </div>
      </div>
    </>
  );
}
