import Image from "next/image";
import Button from "../components/Button";
import imageUrl from "../../../public/about-banner.jpg";
import About from "../components/About";
import randomUrl from "../../../public/banner.jpg"
import FloatingContact from "../components/FloatingContact";
import ownerImg from "../../../public/Satyam JPG.jpg";

export default function page() {
  const aboutData1 = {
    title: "We Are Always Customer Driven",
    p1: "Satyam Automobile Engineers, has grown rapidly since its inception in late 2020. The business expanded operations to nearby buildings within the neighborhood. With a staff, the shop is always abuzz with activity and life.",
    p2: "The shop has become one of the largest auto repair shops in Hira Colony. Every day, Satyam Automobile Engineers strives to be the best in India car repair with a guarantee of satisfaction. Offering car repair and maintenance on both foreign and domestic vehicles to customers who live and work in the Hira Colony and close-in areas, the shop prides themselves on same day service.",
    p3: "Satyam Automobile Engineers is proud to be an AAA Approved car repair facility. Furthermore, the majority of our technicians hold ASE Certifications and have over 200 years of combined experience with backgrounds in both foreign and domestic automotive service.",
  };

  const aboutData2 = {
    title: "About satyam Automobile Engineers",
    p1: "Established in 2020, Satyam Automobile Engineers is a locally owned and operated auto repair facility in Hira Colony. We work on both foreign and domestic vehicles — from routine maintenance such as an oil change or tune-up to repairs for major damage such engine rebuilds or transmission repair.  and has become one of the largest auto repair shops in hira colony. Every day, Satyam Automobile Engineers strives to be the best mechanic in Portland with a guarantee of satisfaction. We pride ourselves with same day service on most auto repairs and are proud to be an AAA Approved auto repair facility. Our auto repair technicians all hold ASE Certifications and have over 200 years of combined experience.",
    p2: "Many of our customers come from Hira Colony. We offer complimentary shuttle service for those who need it – provided by Lyft. If your auto repair job will take longer than you expected, or longer than we anticipated, let us know – Sometimes we have extra tickets to movies and sporting events to help you pass the time with a smile on your face. We’re known for being one of Portland’s most trusted auto mechanics! We now offer professional tire service with Point S!",
    p3: "",
  };

  return (
    <div>
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
          <div className="font-black md:text-5xl sm:text-4xl sxm:text-xl text-lg uppercase">
            ABOUT Satyam automobile engineers
          </div>
          <div className="font-extrabold md:text-4xl sm:text-3xl text-lg text-center">
            01886-297885 • MONDAY - FRIDAY 7:00AM to 5:30PM
          </div>
          <div className="pt-4">
            <Button />
          </div>
        </div>
      </div>
      <div className="w-9/12 mx-auto text-center space-y-2 pt-6 text-slate-800 rsm:w-11/12">
        <div className="uppercase text-4xl font-black rsm:text-2xl">OUR CAR REPAIR PROMISE:</div>
        <p className="font-black text-3xl leading-8 rsm:text-xl text-slate-700 rsm:text-justify">We promise to provide honest, convenient & quality car repair and maintenance services, with our primary goal being safe, happy customers & long-lasting life and performance for your car.</p>
      </div>
      <hr className="border-2 w-9/12 mx-auto my-8"></hr>
      <About Data={aboutData1} visible={false} />
      <div className="w-9/12 mx-auto space-y-6 rsm:pt-6 rsm:w-11/12">
        <div className="font-black text-4xl text-center text-slate-800 rsm:text-2xl">
          We understand that trust is the most important criteria when choosing
          an auto repair company and we pride ourselves on honest and dependable
          services.
        </div>
        <hr className="border-2"></hr>
      </div>
      <div className="relative h-96 mt-12 w-4/5 mx-auto rsm:w-11/12 rsm:h-60">
        <Image src={randomUrl} alt="pic" placeholder="blur" fill sizes="100%" quality={100} style={{objectFit:'cover'}}></Image>
      </div>
      <About Data={aboutData2} visible={true} />
      <div className="w-80 h-80 mb-2 relative mx-auto">
        <Image
        src={ownerImg}
        alt="owner-img"
        // width={80}
        // height={80}
        fill
        quality={100}
        style={{objectFit:'cover'}}
        ></Image>
      </div>
      <p className="text-center w-full mb-8 font-bold text-2xl">Satyam Sharma</p>
      <FloatingContact/>
    </div>
  );
}
