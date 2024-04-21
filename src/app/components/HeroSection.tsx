import Image from "next/image";
import imageUrl from "../../../public/hero-banner.jpg";
import Button from "./Button";

export default function HeroSection(){
    return(
        <div className="grid relative">
        <div className="relative h-96">
          <Image
            src={imageUrl}
            alt="bgImg"
            fill
            placeholder="blur"
            style={{ objectFit: "cover" }}
            quality={100}
          ></Image>
        </div>
        <div className="uppercase grid justify-items-center gap-2 absolute place-self-center text-stone-100 p-4">
          <div className="font-black md:text-5xl sm:text-4xl sxm:text-xl text-lg">Vishal Auto Repair Shop</div>
          <div className="font-extrabold md:text-4xl sm:text-3xl text-lg text-center">
            503-221-2411 • MONDAY - FRIDAY 7:00AM to 5:30PM
          </div>
          <div className="pt-4">
            <Button/>
          </div>
        </div>
      </div>
    )
}