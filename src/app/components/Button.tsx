import Link from "next/link";

export default function Button() {
  return (
    <button className="customButton">
      <Link href="/appointment">Schedule an Appointment</Link>
    </button>
  );
}
