import Image from "next/image";
import Button from "../components/Button";
import imageUrl from "../../../public/contactUs.jpg"

export default function page() {
  return (
    <div>
        <div className="pb-10">
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
          <div className="font-black md:text-5xl sm:text-4xl sxm:text-xl text-lg">Contact Us</div>
          <div className="pt-4">
            <Button/>
          </div>
        </div>
      </div>
        </div>
        <div className="text-center">
            <div className="uppercase text-5xl font-black">HOW TO FIND Satyam Automobile Engineer's</div>
            <div></div>
        </div>
        <div></div>
    </div>
  )
}
