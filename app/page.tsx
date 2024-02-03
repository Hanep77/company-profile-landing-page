import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="bg-gradient-to-br from-blue-900 gradient via-blue-950 to-blue-950 text-slate-100">
          <div className="max-w-screen-xl min-h-screen m-auto px-4 flex justify-center
          items-center">
            <h1 className={`${poppins.className} text-7xl font-semibold text-center max-w-screen-md leading-[80px]`}>Creative Design and Development for your product</h1>
          </div>
        </div>
      </section>
    </>
  );
}
