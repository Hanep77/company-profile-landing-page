import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function Home() {
  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden">
        <Image src='/80497.webp' alt="" width={1400} height={700} className="w-full h-screen absolute -z-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 opacity-90 text-slate-100 border-b-4 border-orange-700">
          <div className="max-w-screen-xl min-h-screen m-auto px-4 flex flex-col gap-12 justify-center
          items-center">
            <h1 className={`${poppins.className} text-7xl font-semibold text-center max-w-screen-md leading-[80px]`}>Creative Design and Development for your product</h1>
            <button className="px-8 py-2 rounded-full bg-orange-700 hover:bg-orange-800">Let&#39;s talk</button>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="max-w-screen-xl min-h-screen m-auto px-4 relative flex justify-center">
          <div className="flex justify-between p-12 gap-8 items-center bg-slate-200 absolute -top-16 rounded-md shadow-lg shadow-slate-400">
            <Image src="/assets/amazon.png" width={100} height={40} alt="amazon" className="grayscale hover:grayscale-0" />
            <Image src="/assets/google.png" width={100} height={40} alt="goole" className="grayscale hover:grayscale-0" />
            <Image src="/assets/laravel.png" width={100} height={40} alt="laravel" className="grayscale hover:grayscale-0" />
            <Image src="/assets/netflix.png" width={100} height={40} alt="netflix" className="grayscale hover:grayscale-0" />
            <Image src="/assets/oracle.png" width={100} height={40} alt="oracle" className="grayscale hover:grayscale-0" />
            <Image src="/assets/youtube.png" width={100} height={40} alt="youtube" className="grayscale hover:grayscale-0" />
          </div>
        </div>
      </section >
    </>
  );
}
