import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-white p-5'>
            <ul className='flex gap-4'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destinations'}>Destination</Link></li>
                <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                <li><Link href={'/add-destination'}>Add Destination</Link></li>
            </ul>
            <div>
                <Image width={150} height={150} alt='logo' src={'/assets/Wanderlast.png'}></Image>
            </div>
            <ul className='flex gap-4 '>
                <li><Link href={'/profile'}>Profle</Link></li>
                <li><Link href={'/login'}>Login</Link></li>
                <li><Link href={'/signUp'}>SignUp</Link></li>
            </ul>

        </nav>
    );
};

export default Navbar;