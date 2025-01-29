import Image from "next/image";

export default function Hero() {
  return <section id="home" className="relative flex flex-col md:block" style={{ backgroundImage: "url(/assets/architect.svg)" }}>
    <div className="max-w-screen-lg m-auto px-4 xl:px-0 order-2">
      <div className="md:w-1/2 md:min-h-screen 2xl:min-h-[768px] flex flex-col md:justify-center items-center mt-5 md:mt-0">
        <h1 className={`text-6xl md:text-7xl font-extrabold max-w-screen-md md:leading-[80px]`}>Bringing <span className="text-orange-600">Elegance </span>to Every <span className="text-orange-600">Corner</span></h1>
        <p className="pt-5 text-lg text-zinc-600">We bring your vision to life with innovative designs that combine style, functionality, and comfort.</p>
      </div>
    </div>
    <div className="md:absolute inset-0 flex items-center ps-4 md:ps-0 md:mt-0 pt-20 md:pt-0">
      <div className="md:absolute bg-zinc-300 backdrop-blur-sm bg-opacity-15 shadow h-1/2 md:h-4/6 rounded-s-xl md:w-1/2 w-full right-0 p-4 pe-0">
        <Image src={"/assets/house-3.jpg"} alt="room" width={1280} height={768} className="h-full object-cover rounded-s-md" />
      </div>
    </div>
  </section>
}
