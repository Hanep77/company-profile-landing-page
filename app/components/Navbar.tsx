import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="absolute top-0 w-full h-28 text-slate-100 z-10">
            <div className="max-w-screen-xl px-4 flex justify-between h-full items-center m-auto">
                <div>
                    <h3 className="text-2xl font-bold tracking-widest">IiIiIiI</h3>
                </div>
                <div className="flex gap-5 text-lg">
                    <Link href="#home" className="hover:border-b hover:border-orange-700">Home</Link>
                    <Link href="#home" className="hover:border-b hover:border-orange-700">About</Link>
                    <Link href="#home" className="hover:border-b hover:border-orange-700">Contact</Link>
                </div>
                <button className="border-2 border-orange-700 px-4 py-1 rounded-full hover:bg-orange-700">Let&#39;s talk</button>
            </div>
        </nav>
    )
}