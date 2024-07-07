import Image from "next/image";
import Button from "../components/Button";
import imageUrl from "../../../public/background.jpg";
import About from "../components/About";

export default function page() {
  const aboutData = {
    title: "About Satyam Automobile Engineers",
    p1: "Established in 2001, Satyam Autoworks is a locally owned and operated auto repair facility in Portland, Oregon. We work on both foreign and domestic vehicles — from routine maintenance such as an oil change or tune-up to repairs for major damage such engine rebuilds or transmission repair.  and has become one of the largest auto repair shops in downtown Portland. Every day, Satyam Autoworks strives to be the best mechanic in Portland with a guarantee of satisfaction. We pride ourselves with same day service on most auto repairs and are proud to be an AAA Approved auto repair facility. Our auto repair technicians all hold ASE Certifications and have over 200 years of combined experience.",
    p2: "Many of our customers come downtown from the Pearl, NW Portland, and SE Portland neighborhoods. We offer complimentary shuttle service for those who need it – provided by Lyft. If your auto repair job will take longer than you expected, or longer than we anticipated, let us know – Sometimes we have extra tickets to movies and sporting events to help you pass the time with a smile on your face. We’re known for being one of Portland’s most trusted auto mechanics! We now offer professional tire service with Point S!",
    p3: "",
  };
  return (
    <div className="">
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
          <div className="font-black md:text-5xl sm:text-4xl sxm:text-xl text-lg">
            Satyam Auto Repair Shop
          </div>
          <div className="font-extrabold md:text-4xl sm:text-3xl text-lg text-center">
            503-221-2411 • MONDAY - FRIDAY 7:00AM to 5:30PM
          </div>
          <div className="pt-4">
            <Button />
          </div>
        </div>
      </div>
      <div className="text-center space-y-4 w-3/4 mx-auto py-8">
        <div className="font-black text-5xl rmd:text-4xl">Satyam Automobile Engineer's</div>
        <div className="font-black text-3xl rmd:text-2xl">
          Trust Satyam Autoworks to handle any automotive repair in
          Portland.
        </div>
        <p className="leading-8">
          Unlike your typical auto repair shop, Satyam Autoworks
          recommends only the services your car needs. We are here to provide
          you with professional and dependable maintenance and repair services
          on all makes of vehicles.
        </p>
        <div className="pt-2">
          <Button />
        </div>
      </div>
      <div className="text-center">
        <div className="uppercase font-black text-4xl pt-4 rmd:text-3xl">
          Our AUTO REPAIR services include:
        </div>
        <div className="flex flex-wrap text-left justify-around pt-8 w-3/4 mx-auto pb-14">
          <div className="">
            <ul className="list-disc list-inside">
              <li>Air conditioning & heating repairs</li>
              <li>Alignments</li>
              <li>Battery & alternator (testing/replacement)</li>
              <li>Auto Glass</li>
              <li>Axles</li>
              <li>Brakes</li>
              <li>Check Engine Light</li>
              <li>Clutches</li>
              <li>Computer Diagnostic</li>
              <li>Cooling System/Radiators</li>
              <li>Drive Train</li>
              <li>Electrical</li>
              <li>Emission/Smog Check</li>
              <li>Engines</li>
              <li>Exhaust/Mufflers</li>
              <li>Fleet Service</li>
              <li>Flushes</li>
              <li>Fuel System</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc list-inside">
              <li>Inspection/Diagnostics</li>
              <li>Lights</li>
              <li>Oil Change</li>
              <li>Overhaul</li>
              <li>Pre-Purchase Inspection</li>
              <li>Speedometers</li>
              <li>Steering</li>
              <li>Suspension</li>
              <li>Timing Belts</li>
              <li>Tires</li>
              <li>Towing</li>
              <li>Transmissions</li>
              <li>Tune Up</li>
              <li>Wheels</li>
              <li>Scheduled services – 30K, 60K, etc.</li>
              <li>Fluid leaks</li>
              <li>Water pump</li>
              <li>DEQ Emissions</li>
            </ul>
          </div>
        </div>
        <div className="w-3/4 mx-auto space-y-5">
          <hr className="border border-red-400"></hr>
          <div className="text-4xl font-black rmd:text-3xl">We understand that trust is the most important criteria when choosing an auto repair company and we pride ourselves on honest and dependable services.</div>
          <hr className="border border-red-400"></hr>
        </div>
        <div className="space-y-5 py-8 w-3/4 mx-auto">
          <div className="text-3xl font-black rmd:text-2xl">509 NW Satyam • Portland, OR 97209 • 503-221-2411</div>
          <hr className="border border-red-400"></hr>
        </div>
        <div className="py-5">
          <About Data={aboutData} visible={true}/>
        </div>
      </div>
    </div>
  );
}
