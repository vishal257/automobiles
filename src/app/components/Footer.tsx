import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-red-800 font-bold uppercase">
      <div className="flex text-center gap-24 tracking-wider justify-center leading-10">
        <div>
          <ul className="text-white">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <ul className="text-yellow-500">
            <li>satyam@gmail.com</li>
            <li>3522525235</li>
            <li>tskj</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
