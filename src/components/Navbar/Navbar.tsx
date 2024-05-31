"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from 'next/image';
import "./Navbar.css"
import StudyinGurugramLogo from "@/Assets/study_in_gurugram_log.png"
import SearchBar from "../ui/Search-bar";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
    <div className="fixed md:w-full w-full  top-navbar flex justify-between pt-3 bg-white">
     <div className="pl-4">  <Image src={StudyinGurugramLogo}  alt="" /></div>
     <div className="flex flex-col gap-1 pr-6 ">
    
      <div className="flex flex justify-center items-center gap-2 ">
      <FaPhoneSquareAlt />
      <p>00000000000</p>
      </div>

     <div className="flex justify-center items-center gap-2">
     <MdEmail />
     <p>infgo@lorem11</p>

    </div>
    </div>
    </div>
    
    <div className={cn("fixed bg-green  inset-x-0  z-50 main-navbar    text-white", className)}
    style={{top:"5.5rem"}}
    ><div>
     <Menu setActive={setActive}>

      <Link href={'/'}>
      <MenuItem setActive={setActive} active={active} item="Home" >

      </MenuItem>
      
      </Link>
      
      <Link href={"about-us"}>
      <MenuItem setActive={setActive} active={active} item="About Us">
     <div className="flex flex-col space-y-4 text-sm">
     <HoveredLink href="/courses">All Courses </HoveredLink>
     <HoveredLink href="/courses">Basic Music Theory </HoveredLink>
     <HoveredLink href="/courses">Advance Composition</HoveredLink>
     <HoveredLink href="/courses"> Song Writing</HoveredLink>
     <HoveredLink href="/courses"> Music Production</HoveredLink>
     </div>
      </MenuItem></Link>
     <Link href={'/Universities'}>
     <MenuItem setActive={setActive} active={active} item="Universities">
     <div className="flex flex-col space-y-4 text-sm"><HoveredLink href="/courses">All Courses </HoveredLink>
     <HoveredLink href="/courses">Basic Music Theory </HoveredLink></div>
        
        </MenuItem>
     </Link>
     <Link href={'/Colleges'}>
     <MenuItem setActive={setActive} active={active} item="Colleges">
     <div className="flex flex-col space-y-4 text-sm"><HoveredLink href="/courses">Colleges </HoveredLink>
     <HoveredLink href="/courses">Basic Music Theory </HoveredLink></div>
        
        </MenuItem>
     </Link>
     <Link href={'/Exams'}>
     <MenuItem setActive={setActive} active={active} item="Exams">
     <div className="flex flex-col space-y-4 text-sm"><HoveredLink href="/courses">Exams </HoveredLink>
     <HoveredLink href="/courses">Basic Music Theory </HoveredLink></div>
        
        </MenuItem>
     </Link>

     <Link href={'/Resources'}>
     <MenuItem setActive={setActive} active={active} item="Resources">
     <div className="flex flex-col space-y-4 text-sm"><HoveredLink href="/courses">Resources </HoveredLink>
     <HoveredLink href="/courses">Basic Music Theory </HoveredLink></div>
        
        </MenuItem>
     </Link>

     <Link href={'/contact-us'}>
     <MenuItem setActive={setActive} active={active} item="Contact Us">
     <div className="flex flex-col space-y-4 text-sm"><HoveredLink href="/courses">Contact Us </HoveredLink>
     <HoveredLink href="/courses">Basic Music Theory </HoveredLink></div>
        
        </MenuItem>
     </Link>


      
    

     </Menu></div>
     <div>
     <SearchBar/>
     </div>
    </div>

    </>  )
}

export default Navbar
