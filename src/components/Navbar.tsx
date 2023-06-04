'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCaretDown } from "react-icons/fa";



export const Navbar = () => {

    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? 'text-dark-blue border-b-4' : 'text-medium-gray';
    };
    
    return (
        <div className="bg-white h-[68px] px-4">
            <div className="container mx-auto flex justify-between items-center h-full">
                <div className="flex gap-3 items-center">
                    <img src="img/tweeter-small.svg" alt="Logo pequeno" className="w-10" />
                    <span className="font-poppins text-base font-semibold hidden sm:block">Twetter</span>
                </div>
                <div className="hidden md:flex gap-14 h-full">
                    <Link className={`font-medium h-full text-sm ${isActive("/")}`} href="/"><div className="w-20 h-full flex justify-center items-center">Home</div></Link>
                    <Link className={`font-medium h-full text-sm ${isActive("/explore")}`} href="/explore"><div className="w-20 h-full flex justify-center items-center">Explore</div></Link>
                    <Link className={`font-medium h-full text-sm ${isActive("/bookmarks")}`} href="/bookmarks"><div className="w-20 h-full flex justify-center items-center">Bookmarks</div></Link>
                </div>
                <div className="flex gap-3 items-center">
                    <img src="img/avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-lg object-cover" />
                    <div className="hidden md:flex items-center gap-5">
                        <span className="font-bold text-dark-gray-blue font-noto text-xs">Léo Pelé</span>
                        <FaCaretDown />
                    </div>
                </div>
            </div>
        </div>
    )
}