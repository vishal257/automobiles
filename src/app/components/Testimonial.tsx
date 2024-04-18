import Image from "next/image";
import contactUrl from "../../../public/contact1.jpg";
import aboutUrl from "../../../public/about1.jpg";
import servicesUrl from "../../../public/services1.jpg";
import bgImgUrl from "../../../public/background.jpg";

export default function Testimonial() {
  return (
    <div className="flex text-center p-2 pt-4 pb-6 gap-2 rmd:flex-wrap">


      <div className="w-2/6 rmd:3/6 flex-grow rsm:w-full">
        <div className="relative h-80">
          <Image
            src={contactUrl}
            alt="contact"
            placeholder="blur"
            fill
            quality={100}
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        <div className="space-y-2 divide-solid p-6">
          <h1 className="uppercase font-black text-3xl">Where we are</h1>
          <hr className="border-2 border-slate-100 w-11/12 mx-auto"></hr>
          <div className="">
            Located in Old Town, we’re right on the Max line, so it’s easy to
            drop off your car for maintenance, repair or tires while you work.
          </div>
        </div>
      </div>
      <div className="w-2/6 rmd:3/6 flex-grow rsm:w-full">
        <div className="relative h-80">
          <Image
            src={aboutUrl}
            alt="contact"
            placeholder="blur"
            fill
            quality={100}
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        <div className="space-y-2 divide-solid p-6">
          <h1 className="uppercase font-black text-3xl">WHo WE are</h1>
          <hr className="border-2 border-slate-100 w-11/12 mx-auto"></hr>
          <div className="">
            Located in Old Town, we’re right on the Max line, so it’s easy to
            drop off your car for maintenance, repair or tires while you work.
          </div>
        </div>
      </div>
      <div className="w-2/6 rmd:3/6 flex-grow rsm:w-full">
        <div className="relative h-80">
          <Image
            src={servicesUrl}
            alt="contact"
            placeholder="blur"
            fill
            quality={100}
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
        <div className="space-y-2 divide-solid p-6">
          <h1 className="uppercase font-black text-3xl">WHAT WE DO</h1>
          <hr className="border-2 border-slate-100 w-11/12 mx-auto"></hr>
          <div className="">
            Located in Old Town, we’re right on the Max line, so it’s easy to
            drop off your car for maintenance, repair or tires while you work.
          </div>
        </div>
      </div>
    </div>
  );
}