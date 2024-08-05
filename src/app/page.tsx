import Link from "next/link";
import HeroSection from "./components/HeroSection";
import Testimonial from "./components/Testimonial";
import About from "./components/About";

export default function Home() {
  const aboutData = {
    title: "About Satyam Automobile Engineers",
    p1: "Established in 2020, Satyam Automobile Engineers is a locally owned and operated auto repair facility in Hira Colony. We work on both foreign and domestic vehicles — from routine maintenance such as an oil change or tune-up to repairs for major damage such engine rebuilds or transmission repair.  and has become one of the largest auto repair shops in hira colony. Every day, Satyam Automobile Engineers strives to be the best mechanic in Portland with a guarantee of satisfaction. We pride ourselves with same day service on most auto repairs and are proud to be an AAA Approved auto repair facility. Our auto repair technicians all hold ASE Certifications and have over 200 years of combined experience.",
    p2: "Many of our customers come from Hira Colony. We offer complimentary shuttle service for those who need it – provided by Lyft. If your auto repair job will take longer than you expected, or longer than we anticipated, let us know – Sometimes we have extra tickets to movies and sporting events to help you pass the time with a smile on your face. We’re known for being one of Portland’s most trusted auto mechanics! We now offer professional tire service with Point S!",
    p3: "",
  };

  return (
    <>
      <HeroSection />
      <div className=" w-4/6 mx-auto text-center my-12">
        <div className="grid justify-items-center space-y-4 p-2">
          <div className="uppercase font-black sm:text-5xl text-4xl">
            ABOUT Satyam AUTO WORKS AUTO REPAIR
          </div>
          <div>
          Satyam Automobile Engineers, an esteemed auto repair shop located near Hira Colony, has experienced remarkable growth over the past few years. This expansion has allowed the business to extend its operations into several nearby buildings within the neighborhood.

          What sets Satyam Automobile Engineers apart is its dedicated and skilled workforce, comprising 18 talented staff members. This team is the heart of the shop, ensuring that it is always bustling with activity and life. Whether it's routine maintenance or complex repairs, Satyam Automobile Engineers is equipped and ready to service your car with the utmost precision and care.
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
