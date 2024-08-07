import Image from "next/image";
import Button from "../components/Button";
import imageUrl from "../../../public/contactUs.jpg";
import imageUrl2 from "../../../public/contact1.jpg";
import About from "../components/About";
import FloatingContact from "../components/FloatingContact";

export default function page() {
  const aboutData = {
    title: "About Satyam Automobile Engineers",
    p1: "Established in 2020, Satyam Automobile Engineers is a locally owned and operated auto repair facility in Hira Colony. We work on both foreign and domestic vehicles — from routine maintenance such as an oil change or tune-up to repairs for major damage such engine rebuilds or transmission repair.  and has become one of the largest auto repair shops in hira colony. Every day, Satyam Automobile Engineers strives to be the best mechanic in Portland with a guarantee of satisfaction. We pride ourselves with same day service on most auto repairs and are proud to be an AAA Approved auto repair facility. Our auto repair technicians all hold ASE Certifications and have over 200 years of combined experience.",
    p2: "Many of our customers come from Hira Colony. We offer complimentary shuttle service for those who need it – provided by Lyft. If your auto repair job will take longer than you expected, or longer than we anticipated, let us know – Sometimes we have extra tickets to movies and sporting events to help you pass the time with a smile on your face. We’re known for being one of Portland’s most trusted auto mechanics! We now offer professional tire service with Point S!",
    p3: "",
  };
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
            <div className="font-black md:text-5xl sm:text-4xl sxm:text-xl text-lg">
              Contact Us
            </div>
            <div className="pt-4">
              <Button />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center space-y-6 p-8 w-4/5 mx-auto rsm:p4 rsm:w-11/12">
        <div className="uppercase text-5xl font-black rsm:text-3xl">
          HOW TO FIND Satyam Automobile Engineers
        </div>
        <div className="text-3xl font-black rsm:text-xl">
          Near Hira Colony, Dholwaha Road, Distt- Hoshiarpur • Punjab, India
        </div>
      </div>
      <div className="flex w-3/4 gap-8 justify-center mx-auto pb-16 pt-4">
        <div className="w-1/2 rsm:w-full">
          <div className="leading-7">
            <div className="font-black text-4xl pb-4 rsm:text-2xl">Transportation Options:</div>
            <p>
              Our shop is conveniently located near Hira Colony.
            </p>
            <p>Transportation options include:</p>
            <ul className="list-disc py-3">
              <li>
                <span className="font-bold">Courtesy shuttle service</span> – when you book your
                appointment, ask about our downtown shuttle service
              </li>
              <li>
                <span className="font-bold">Loaner cars</span> – will your repair require us to keep
                your vehicle for longer than a day? Ask us about our loaner car
                service options.
              </li>
            </ul>
          </div>
          <div className="leading-7">
            <div className="font-black text-4xl py-2 rsm:text-2xl">Mass transit</div>
            <p>
              Our shop is conveniently located Near Hira Colony, Dholwaha Road.
            </p>
            <p>Transportation options include:</p>
          </div>
        </div>
        <div className="relative w-1/2 rsm:hidden">
          <div className="relative h-full">
            <Image
              src={imageUrl2}
              alt="pic"
              quality={100}
              fill
              placeholder="blur"
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
        </div>
      </div>
      <div>
        <hr className="border-2 w-3/4 mx-auto"></hr>
        <About Data={aboutData} visible={false}></About>
      </div>
      <FloatingContact/>
    </div>
  );
}
