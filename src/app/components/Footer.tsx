import Image from "next/image";
import Link from "next/link";
import imageUrl from "../../../public/about.jpg";

export default function Footer() {
  return (
    <div className="bg-red-800 font-bold uppercase h-80 grid items-center justify-items-center p-4 rsm:h-60 relative">
      <Image
        src={imageUrl}
        alt="aboutImg"
        fill
        placeholder="blur"
        style={{ objectFit: "cover", objectPosition:'center 80%'}}
        quality={100}
      ></Image>
      <div className="flex md:gap-24 gap-12 rsm:px-4 md:tracking-wider justify-center leading-10 rsm:leading-6 rsm:tracking-tight rsm:text-sm absolute">
        <div className="h-full">
          <div className="text-stone-300">Quick Links</div>
          <ul className="text-white">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="h-full">
          <div className="text-stone-300">Contact Us</div>
          <ul className="text-yellow-500">
            <li>
              <Link href="mailto:satyam.autoworks@proton.me">satyam.autoworks@proton.me</Link>
            </li>
            <li>
              <Link href="tel:9592348990">95923-48990</Link>
            </li>
            <li>7:00AM – 5:30PM MONDAY – FRIDAY</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
