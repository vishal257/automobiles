import Image from "next/image";
import contactUrl from "../../../public/contact1.jpg";
import aboutUrl from "../../../public/about1.jpg";
import servicesUrl from "../../../public/services1.jpg";
import bgImgUrl from "../../../public/background.jpg";
import Link from "next/link";
import style from './styles.module.css';

export default function Testimonial() {
  return (
    <div className="p-2 pt-4 pb-6 relative">
        <Image
          src={bgImgUrl}
          alt="bg-Img"
          draggable="false"
          placeholder="blur"
          quality={80}
          fill
          sizes="100%"
          style={{ objectFit: "cover", filter: 'blur(2px)' }}
        ></Image>
      <div className="flex text-center gap-2 rmd:flex-wrap  relative z-10 text-white">
        <div className={`cards rsm:w-full rmd:3/6 ${style.scaleHover} overflow-hidden`}>
          <Link href="/contact">
          <div className="relative h-80 overflow-hidden">
            <Image
              src={contactUrl}
              alt="contact"
              placeholder="blur"
              draggable="false"
              fill
              sizes="100%"
              quality={100}
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
          <div className={`space-y-2 divide-solid p-6 ${style.hoverBox}`}>
            <h1 className="uppercase font-black text-3xl">Where we are</h1>
            <hr className="border-2 border-slate-100 w-11/12 mx-auto"></hr>
            <div className="">
              Located Near Hira Colony, Dholwaha Road, Distt- Hoshiarpur • Punjab, India
            </div>
          </div>
          </Link>
        </div>
        <div className={`cards rsm:w-full rmd:3/6 ${style.scaleHover} overflow-hidden`}>
          <Link href="/about">
          <div className="relative h-80 overflow-hidden">
            <Image
              src={aboutUrl}
              alt="contact"
              className=" hover:scale-125"
              placeholder="blur"
              draggable="false"
              sizes="100%"
              fill
              quality={100}
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
          <div className={`space-y-2 divide-solid p-6 ${style.hoverBox}`}>
            <h1 className="uppercase font-black text-3xl">WHo WE are</h1>
            <hr className="border-2 border-slate-100 w-11/12 mx-auto"></hr>
            <div className="">
            Satyam Automobile Engineers is proud to be an AAA Approved car repair facility.
            </div>
          </div>
          </Link>
        </div>
        <div className={`cards rsm:w-full rmd:3/6 ${style.scaleHover} overflow-hidden`}>
          <Link href="/services">
          <div className="relative h-80 overflow-hidden">
            <Image
              src={servicesUrl}
              alt="contact"
              className=" hover:scale-125"
              placeholder="blur"
              draggable="false"
              fill
              sizes="100%"
              quality={100}
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
          <div className={`space-y-2 divide-solid p-6 ${style.hoverBox}`}>
            <h1 className="uppercase font-black text-3xl">WHAT WE DO</h1>
            <hr className="border-2 border-slate-100 w-11/12 mx-auto"></hr>
            <div className="">
            We promise to provide honest, convenient & quality car repair and maintenance services, with our primary goal being safe, happy customers & long-lasting life and performance for your car.
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
