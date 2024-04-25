export default function Page() {
  return (
    <div className="text-center">
      <div>
          <div className="font-black text-4xl">Select Your Service</div>
      </div>
      <div>
        <div className="font-extrabold text-3xl">Popular Services</div>
        <div className="">
            <form className="grid md:grid-cols-4 grid-cols-2">
                <label htmlFor="Brakes">Brakes</label>
                <input type="checkbox" name="Brakes"></input>
                <label htmlFor="OilChange">Oil Change</label>
                <input type="checkbox" name="OilChange"></input>
                <label htmlFor="VehicleInspection">Vehicle Inspection</label>
                <input type="checkbox" name="VehicleInspection"></input>
                <label htmlFor="Tires">Tires</label>
                <input type="checkbox" name="Tires"></input>
                <label htmlFor="Battery">Battery</label>
                <input type="checkbox" name="Battery"></input>
                <label htmlFor="EngineTransmission">Engine & Transmission</label>
                <input type="checkbox" name="EngineTransmission"></input>
                <label htmlFor="HeatAC">Heat or A/C</label>
                <input type="checkbox" name="HeatAC"></input>
                <label htmlFor="ScheduleMaintenance">Schedule Maintenance</label>
                <input type="checkbox" name="ScheduleMaintenance"></input>
            </form>
        </div>
      </div>
    </div>
  );
}
