export default function Page() {
  return (
    <div className="text-center py-8 w-3/4 mx-auto">
      <div>
        <div className="font-black text-4xl py-6">Select Your Service</div>
      </div>
      <div>
        <div className="font-extrabold text-3xl py-5">Popular Services</div>
        <div className="font-medium text-xl text-left">
          <form className="grid md:grid-cols-2 grid-cols-1 gap-4 w-8/12 mx-auto">
            <div className="bg-slate-200 p-5 rounded-lg grid grid-cols-2 justify-between">
              <label htmlFor="Brakes" className="justify-self-start">
                Brakes
              </label>
              <input
                type="checkbox"
                name="Brakes"
                className="justify-self-end size-6"
              ></input>
            </div>
            <div className="bg-slate-200 p-5 rounded-lg grid grid-cols-2 justify-between">
              <label htmlFor="OilChange" className="justify-self-start">
                Oil Change
              </label>
              <input
                type="checkbox"
                name="OilChange"
                className="justify-self-end size-6"
              ></input>
            </div>
            <div className="bg-slate-200 p-5 rounded-lg grid grid-cols-2 justify-between">
              <label htmlFor="VehicleInspection" className="justify-self-start lg:whitespace-nowrap">
                Vehicle Inspection
              </label>
              <input
                type="checkbox"
                name="VehicleInspection"
                className="justify-self-end size-6"
              ></input>
            </div>
            <div className="bg-slate-200 p-5 rounded-lg grid grid-cols-2 justify-between">
              <label htmlFor="Tires" className="justify-self-start">
                Tires
              </label>
              <input
                type="checkbox"
                name="Tires"
                className="justify-self-end size-6"
              ></input>
            </div>
            <div className="bg-slate-200 p-5 rounded-lg grid grid-cols-2 justify-between">
              <label htmlFor="Battery" className="justify-self-start">
                Battery
              </label>
              <input
                type="checkbox"
                name="Battery"
                className="justify-self-end size-6"
              ></input>
            </div>
            <div className="bg-slate-200 p-5 rounded-lg grid grid-cols-2 justify-between">
              <label
                htmlFor="EngineTransmission"
                className="justify-self-start xl:whitespace-nowrap"
              >
                Engine & Transmission
              </label>
              <input
                type="checkbox"
                name="EngineTransmission"
                className="justify-self-end size-6"
              ></input>
            </div>
            <div className="bg-slate-200 p-5 rounded-lg grid grid-cols-2 justify-between">
              <label htmlFor="HeatAC" className="justify-self-start">
                Heat or A/C
              </label>
              <input
                type="checkbox"
                name="HeatAC"
                className="justify-self-end size-6"
              ></input>
            </div>
            <div className="bg-slate-200 p-5 rounded-lg grid grid-cols-2 justify-between">
              <label
                htmlFor="ScheduleMaintenance"
                className="justify-self-start xl:whitespace-nowrap"
              >
                Schedule Maintenance
              </label>
              <input
                type="checkbox"
                name="ScheduleMaintenance"
                className="justify-self-end size-6"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
