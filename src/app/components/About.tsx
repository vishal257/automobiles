import Button from "./Button";

export default function About() {
  return (
    <div className="p-4 w-2/3 rsm:w-5/6 rsm:p-0 mx-auto space-y-6 mt-6 pb-14">
      <div className="font-black text-4xl text-center">About Satyam Automobile Engineers</div>
      <div className="text-justify space-y-4 leading-8 rsm:leading-6">
        <p>Established in 2001, Everett Street Autoworks is a locally owned and operated auto repair facility in Portland, Oregon. We work on both foreign and domestic vehicles — from routine maintenance such as an oil change or tune-up to repairs for major damage such engine rebuilds or transmission repair.  and has become one of the largest auto repair shops in downtown Portland. Every day, Everett Street Autoworks strives to be the best mechanic in Portland with a guarantee of satisfaction. We pride ourselves with same day service on most auto repairs and are proud to be an AAA Approved auto repair facility. Our auto repair technicians all hold ASE Certifications and have over 200 years of combined experience.</p>
        <p>Many of our customers come downtown from the Pearl, NW Portland, and SE Portland neighborhoods. We offer complimentary shuttle service for those who need it – provided by Lyft. If your auto repair job will take longer than you expected, or longer than we anticipated, let us know – Sometimes we have extra tickets to movies and sporting events to help you pass the time with a smile on your face. We’re known for being one of Portland’s most trusted auto mechanics! We now offer professional tire service with Point S!</p>
      </div>
      <div className="flex justify-center py-2">
        <Button/>
      </div>
      <div className="uppercase text-2xl font-black text-center">509 NW Everett Street • Portland, OR 97209 • 503-221-2411</div>
    </div>
  )
}
