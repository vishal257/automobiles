export default function Page() {
  return (
    <div>
      <div>
          <div>Select Your Service</div>
      </div>
      <div>
        <div>Popular Services</div>
        <div>
            <form>
                <label htmlFor="Brakes">Brakes</label>
                <input type="checkbox" name="Brakes"></input>
                <label htmlFor="Oil Change">Brakes</label>
                <input type="checkbox" name="Oil Change"></input>
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
