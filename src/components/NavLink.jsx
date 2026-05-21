"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children, className}) => {
    const pathName = usePathname();
    const isActive = href === pathName
    return (
        <Link href={href} className={`${isActive?"px-3 py-1 bg-yellow-400 hover:bg-yellow-300  text-zinc-950 font-semibold rounded-lg":""} ${className}`}>
            {children}
        </Link>
    );
};

export default NavLink;