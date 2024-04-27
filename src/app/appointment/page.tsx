'use client'

import { useRef } from "react";

interface FormDataProps{
  label:string,
  labelName:string,
  func:(checked:boolean) => void
}


function FormData({label, labelName, func}:FormDataProps){
  const ref = useRef<HTMLInputElement>(null);

  function clickHandler(){
    if(ref.current){
      ref.current.checked = !ref.current.checked;
      func(ref.current.checked);
    }
  }

  return(
    <div className="bg-slate-200 p-5 rounded-lg grid grid-cols-2 justify-between cursor-pointer" onClick={clickHandler}>
    <label htmlFor={labelName} className="justify-self-start">
      {label}
    </label>
    <input
      ref={ref}
      type="checkbox"
      name={labelName}
      className="justify-self-end size-6"
    ></input>
    </div>
  )
}


export default function Page() {
  function formChecker(isChecked:boolean){
    console.log(`checkbox is checked: ${isChecked}`);
  }
  return (
    <div className="text-center py-8 w-3/4 mx-auto">
      <div>
        <div className="font-black text-4xl py-6">Select Your Service</div>
      </div>
      <div>
        <div className="font-extrabold text-3xl py-5">Popular Services</div>
        <div className="font-medium text-xl text-left">
          <form className="grid md:grid-cols-2 grid-cols-1 gap-4 w-8/12 mx-auto">
            <FormData label="Brakes" labelName="Brakes" func={formChecker}/>
            <FormData label="Oil Change" labelName="OilChange" func={formChecker}/>
            <FormData label="Vehicle Inspection" labelName="VehicleInspection" func={formChecker}/>
            <FormData label="Tires" labelName="Tires" func={formChecker}/>
            <FormData label="Battery" labelName="Battery" func={formChecker}/>
            <FormData label="Engine & Transmission" labelName="EngineTransmission" func={formChecker}/>
            <FormData label="Heat or A/C" labelName="HeatAC" func={formChecker}/>
            <FormData label="Schedule Maintenance" labelName="ScheduleMaintenance" func={formChecker}/>
          </form>
        </div>
        <div>
            <div className="font-extrabold text-3xl py-5">Select your own service</div>
            <div className="font-medium text-xl text-left">
                <form className="grid md:grid-cols-2 grid-cols-1 gap-4 w-8/12 mx-auto">
                    <div className="bg-slate-200 p-5 rounded-lg grid grid-cols-2 justify-between">
                        <label htmlFor="describeIssue" className="justify-self-start xl:whitespace-nowrap">Describe Your Issue</label>
                        <input type="checkbox" name="describeIssue" className="justify-self-end size-6"></input>
                    </div>
                    <div className="bg-slate-200 p-5 rounded-lg grid grid-cols-2 justify-between">
                        <label htmlFor="selectPart" className="justify-self-start xl:whitespace-nowrap">Select Specific Part</label>
                        <input type="checkbox" name="selectPart" className="justify-self-end size-6"></input>
                    </div>
                </form>
            </div>
        </div>
        <div className="py-5 font-semibold text-lg w-2/3 mx-auto">
            <div className="text-right">
                <button className="bg-slate-200 py-4 px-12 rounded-xl hover:bg-red-400 hover:text-white" type="submit">Next</button>
            </div>
        </div>
      </div>
    </div>
  );
}
