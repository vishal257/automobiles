import Link from "next/link";
import HeroSection from "./components/HeroSection";
import Testimonial from "./components/Testimonial";
import About from "./components/About";

export default function Home() {
  const aboutData = {
    title: "About Vishal Automobile Engineers",
    p1: "Established in 2001, Everett Street Autoworks is a locally owned and operated auto repair facility in Portland, Oregon. We work on both foreign and domestic vehicles — from routine maintenance such as an oil change or tune-up to repairs for major damage such engine rebuilds or transmission repair.  and has become one of the largest auto repair shops in downtown Portland. Every day, Everett Street Autoworks strives to be the best mechanic in Portland with a guarantee of satisfaction. We pride ourselves with same day service on most auto repairs and are proud to be an AAA Approved auto repair facility. Our auto repair technicians all hold ASE Certifications and have over 200 years of combined experience.",
    p2: "Many of our customers come downtown from the Pearl, NW Portland, and SE Portland neighborhoods. We offer complimentary shuttle service for those who need it – provided by Lyft. If your auto repair job will take longer than you expected, or longer than we anticipated, let us know – Sometimes we have extra tickets to movies and sporting events to help you pass the time with a smile on your face. We’re known for being one of Portland’s most trusted auto mechanics! We now offer professional tire service with Point S!",
    p3: "",
  };

  return (
    <>
      <HeroSection />
      <div className=" w-4/6 mx-auto text-center my-12">
        <div className="grid justify-items-center space-y-4 p-2">
          <div className="uppercase font-black sm:text-5xl text-4xl">
            ABOUT Vishal AUTO WORKS AUTO REPAIR
          </div>
          <div>
            Everett Street Autoworks, an auto repair shop in Portland Oregon,
            has grown rapidly since its inception in late 2001. In 2008 the
            business hit capacity at its 5th and Everett location and expanded
            its operations to nearby buildings within the neighborhood. With a
            staff of 18, the shop is always a buzz with activity and life ready
            to service your car.
          </div>
          <div className="uppercase pt-4">
            <button className="bg-red-800 px-6 py-2 font-bold text-white text-xl hover:bg-red-900">
              <Link href="/appointment">Schedule an appointment</Link>
            </button>
          </div>
        </div>
      </div>
      <Testimonial />
      <About Data={aboutData} visible={true} />
    </>
  );
}
