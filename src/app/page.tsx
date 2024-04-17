import Link from "next/link";
import HeroSection from "./components/HeroSection";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <div className=" w-4/6 mx-auto text-center my-12">
        <div className="grid justify-items-center space-y-4 p-2">
          <div className="uppercase font-black sm:text-5xl text-4xl">ABOUT Satyam AUTO WORKS AUTO REPAIR</div>
          <div>Everett Street Autoworks, an auto repair shop in Portland Oregon, has grown rapidly since its inception in late 2001. In 2008 the business hit capacity at its 5th and Everett location and expanded its operations to nearby buildings within the neighborhood. With a staff of 18, the shop is always a buzz with activity and life ready to service your car.</div>
          <div className="uppercase pt-4"><button className="bg-red-800 px-6 py-2 font-bold text-white text-xl hover:bg-red-900"><Link href="/appointment">Schedule an appointment</Link></button></div>
        </div>
      </div>
    </>

  );
}
