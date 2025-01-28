import Image from "next/image";

export default function Hero() {
  return <section id="home" className="relative px-4 xl:px-0" style={{ backgroundImage: "url(/assets/architect.svg)" }}>
    <div className="max-w-screen-lg m-auto">
      <div className="w-1/2 min-h-screen 2xl:min-h-[768px] flex flex-col justify-center items-center">
        <h1 className={`text-7xl font-extrabold max-w-screen-md leading-[80px]`}>Bringing <span className="text-orange-600">Elegance </span>to Every <span className="text-orange-600">Corner</span></h1>
        <p className="pt-5 text-lg text-zinc-600">We bring your vision to life with innovative designs that combine style, functionality, and comfort.</p>
      </div>
    </div>
    <div className="absolute inset-0 flex items-center">
      <div className="absolute bg-zinc-300 backdrop-blur-sm bg-opacity-15 shadow h-4/6 rounded-s-xl w-1/2 right-0 p-4 pe-0">
        <Image src={"/assets/house-3.jpg"} alt="room" width={1280} height={768} className="h-full object-cover rounded-s-md" />
      </div>
    </div>
  </section>
}
