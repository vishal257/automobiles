import Image from "next/image";
import imageUrl from "../../public/hero-banner.jpg";
import Link from "next/link";

export default function Home() {
  return (
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
      <div className="uppercase grid justify-items-center gap-2 absolute place-self-center text-stone-100">
        <div className="font-black text-5xl">Satyam Auto Repair Shop</div>
        <div className="font-extrabold text-4xl">
          503-221-2411 • MONDAY - FRIDAY 7:00AM to 5:30PM
        </div>
        <div className="pt-4">
          <button className="bg-red-800 text-white font-bold text-2xl py-2 px-8 hover:bg-stone-500 rounded-md">
            <Link href="/appointment">
              Schedule an Appointment
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
