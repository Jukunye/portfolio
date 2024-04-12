import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-6 bg-zinc-200  w-screen h-lvh">
        <div className="flex flex-row items-center justify-between">
          <div>
            {" "}
            <Link href="/" className="font-semibold text-gray-800">
              Jukunye
            </Link>
          </div>
          <div className="flex-1"></div>
          <div className="flex space-x-4 font-light">
            {/* <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link> */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-32">
          <h1 className="text-2xl ">Hi, Am Jukunye</h1>
          <p className="text-center text-4xl font-bold text-gray-800">
            As an aspiring{" "}
            <span className="text-emerald-600">Full stack developer</span>.
          </p>
        </div>
        <div id="skills"></div>
      </div>
    </>
  );
}
