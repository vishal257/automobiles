import Image from "next/image";
import Button from "../components/Button";
import imageUrl from "../../../public/about-banner.jpg";
import About from "../components/About";

export default function page() {

    const aboutData1 = {
        title:'We Are Always Customer Driven',
        p1:'Everett Street Autoworks, a Portland mechanic in Portland Oregon, has grown rapidly since its inception in late 2001. In 2008 the business hit capacity at its NW 5th and Everett location and expanded operations to nearby buildings within the neighborhood. With a staff of 18, the shop is always abuzz with activity and life.',
        p2:'In 2007, Jake Hammer graduated from General Manager to owner and operator. Since then, the shop has become one of the largest auto repair shops in downtown Portland. Every day, Everett Street Autoworks strives to be the best in Portland car repair with a guarantee of satisfaction. Offering car repair and maintenance on both foreign and domestic vehicles to customers who live and work in the downtown Portland and close-in areas including NW Portland and SE Portland, the shop prides themselves on same day service.',
        p3:'Everett Street Autoworks is proud to be an AAA Approved car repair facility. Furthermore, the majority of our technicians hold ASE Certifications and have over 200 years of combined experience with backgrounds in both foreign and domestic automotive service.'
    }

    const aboutData2 = {
      title:'About Satyam Automobile Engineers',
      p1:'Established in 2001, Everett Street Autoworks is a locally owned and operated auto repair facility in Portland, Oregon. We work on both foreign and domestic vehicles — from routine maintenance such as an oil change or tune-up to repairs for major damage such engine rebuilds or transmission repair.  and has become one of the largest auto repair shops in downtown Portland. Every day, Everett Street Autoworks strives to be the best mechanic in Portland with a guarantee of satisfaction. We pride ourselves with same day service on most auto repairs and are proud to be an AAA Approved auto repair facility. Our auto repair technicians all hold ASE Certifications and have over 200 years of combined experience.',
      p2:'Many of our customers come downtown from the Pearl, NW Portland, and SE Portland neighborhoods. We offer complimentary shuttle service for those who need it – provided by Lyft. If your auto repair job will take longer than you expected, or longer than we anticipated, let us know – Sometimes we have extra tickets to movies and sporting events to help you pass the time with a smile on your face. We’re known for being one of Portland’s most trusted auto mechanics! We now offer professional tire service with Point S!',
      p3:''
  }
  


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
          <div className="font-black md:text-5xl sm:text-4xl sxm:text-xl text-lg uppercase">ABOUT satyam automobile engineer's</div>
          <div className="font-extrabold md:text-4xl sm:text-3xl text-lg text-center">
            503-221-2411 • MONDAY - FRIDAY 7:00AM to 5:30PM
          </div>
          <div className="pt-4">
            <Button/>
          </div>
        </div>
        </div>
        <About Data={aboutData1} visible={false}/>
        <About Data={aboutData2} visible={true}/>
    </div>
  )
}
