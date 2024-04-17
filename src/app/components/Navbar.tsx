import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black text-white font-bold">
      <div className="text-center overflow-hidden h-44 relative">
        <Image
          src="/banner.jpeg"
          alt="header banner"
          fill
          style={{ objectFit: "cover"}}
        ></Image>
      </div>
      <nav className="grid sm:justify-items-center py-5">
        <ul className="uppercase gap-12 sm:flex block rsm:space-y-4 items-center">
          <li className="bg-red-800 py-3 px-6 hover:bg-red-900">
            <Link href="/appointment">Schedule An Appointment</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
