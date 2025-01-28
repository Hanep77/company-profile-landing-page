import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute w-full h-16 z-10">
      <div className="max-w-screen-lg px-4 xl:px-0 flex justify-between h-full items-center m-auto">
        <div>
          <h3 className="text-2xl font-bold tracking-widest">IiIiIiI</h3>
        </div>
        <div className="flex font-medium">
          <Link href="#home" className="hover:text-white hover:bg-orange-700 rounded-full px-4 py-1">Home</Link>
          <Link href="#home" className="hover:text-white hover:bg-orange-700 rounded-full px-4 py-1">About</Link>
          <Link href="#home" className="hover:text-white hover:bg-orange-700 rounded-full px-4 py-1">Service</Link>
          <Link href="#home" className="hover:text-white hover:bg-orange-700 rounded-full px-4 py-1">Contact</Link>
          <Link href="#home" className="hover:text-white hover:bg-orange-700 rounded-full px-4 py-1">FAQ</Link>
        </div>
        <button className="bg-orange-600 px-4 py-2 font-medium rounded-full text-zinc-200 hover:bg-orange-700">Let&#39;s talk</button>
      </div>
    </nav>
  )
}
