'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { AiFillHome } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdExplore } from "react-icons/md";

export const MenuBotton = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? "text-dark-blue border-b-4 rounded-t-lg" : "text-medium-gray";
    };

    return (
        <div className=" bg-white h-[68px] sticky bottom-0 mt-auto flex justify-between items-center md:hidden">
            <Link className="h-full" href="/"><div className={`w-20 h-full flex justify-center items-center ${isActive("/")}`}><AiFillHome size="18px" /></div></Link>
            <Link className="h-full" href="/explore"><div className={`w-20 h-full flex justify-center items-center ${isActive("/explore")}`}><MdExplore size="18px"  /></div></Link>
            <Link className="h-full" href="/bookmarks"><div className={`w-20 h-full flex justify-center items-center ${isActive("/bookmarks")}`}><BsFillBookmarkFill size="18px"/></div></Link>
        </div>
    )
}