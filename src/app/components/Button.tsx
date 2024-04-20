import Link from "next/link";

export default function Button() {
  return (
    <button className="customButton">
      <Link href="/contact">Schedule an Appointment</Link>
    </button>
  );
}
