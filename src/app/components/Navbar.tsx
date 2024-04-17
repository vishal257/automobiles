import Image from 'next/image';
import styles from './navbar.module.css';
import Link from 'next/link';

export default function Navbar({active}:{active:string}){
    return(
        <div className="bg-black text-white font-bold">
            <div className='text-center'>
                <Image src="" alt='header banner'></Image>
            </div>
            <nav className='grid sm:justify-items-center py-5'>
                <ul className='uppercase gap-12 sm:flex block rsm:space-y-4 items-center'>
                    <li className='bg-red-800 p-4'><Link href="appointment">Schedule An Appointment</Link></li>
                    <li className={active === 'service' ? 'text-yellow-500' : ''}><Link href="services">Services</Link></li>
                    <li><Link href="about">About</Link></li>
                    <li><Link href="contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}