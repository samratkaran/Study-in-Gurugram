"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed bg-green  inset-x-0  z-50 bg-blue-900  text-white", className)}
    style={{top:"4rem"}}
    >
     <Menu setActive={setActive}>

      <Link href={'/'}>
      <MenuItem setActive={setActive} active={active} item="Home" >

      </MenuItem>
      </Link>
      <MenuItem setActive={setActive} active={active} item="Our Courses">
     <div className="flex flex-col space-y-4 text-sm">
     <HoveredLink href="/courses">All Courses </HoveredLink>
     <HoveredLink href="/courses">Basic Music Theory </HoveredLink>
     <HoveredLink href="/courses">Advance Composition</HoveredLink>
     <HoveredLink href="/courses"> Song Writing</HoveredLink>
     <HoveredLink href="/courses"> Music Production</HoveredLink>
     </div>
      </MenuItem>
     <Link href={'/contact'}>
     <MenuItem setActive={setActive} active={active} item="Contact Us">
     <div className="flex flex-col space-y-4 text-sm"><HoveredLink href="/courses">All Courses </HoveredLink>
     <HoveredLink href="/courses">Basic Music Theory </HoveredLink></div>
        
        </MenuItem>
     </Link>

      
    

     </Menu>
    </div>
  )
}

export default Navbar
