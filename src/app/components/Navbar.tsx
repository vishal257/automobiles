import Image from "next/image";
import Link from "next/link";
import imageUrl from "../../../public/banner.jpeg"

export default function Navbar() {
  return (
    <div className="bg-black text-white font-bold">
      <div className="text-center overflow-hidden h-44 relative">
        <Image
          src={imageUrl}
          alt="header banner"
          fill
          placeholder="blur"
          style={{ objectFit: "cover"}}
        ></Image>
      </div>
      <nav className="grid sm:justify-items-center py-5 relative w-full bg-black z-50">
        <ul className="uppercase gap-12 sm:flex block rsm:space-y-4 items-center">
          <li className="bg-red-800 py-3 px-6 hover:bg-red-900 sm:ms-4">
            <Link href="/appointment">Schedule An Appointment</Link>
          </li>
          <li className="hover:text-yellow-500 px-4">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-yellow-500 px-4">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-yellow-500 px-4">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
