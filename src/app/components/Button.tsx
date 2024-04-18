import Link from "next/link";

export default function Button() {
  return (
    <button className="bg-red-800 text-white font-bold md:text-2xl sm:text-xl text-md py-2 px-8 hover:bg-stone-500 rounded-md">
    <Link href="/appointment">
      Schedule an Appointment
    </Link>
  </button>
  )
}
