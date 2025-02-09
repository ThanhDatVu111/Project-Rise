"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LayoutDashboard, Shield, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

function SideBar() {
  const MenuList = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
    {
      name: "Profile",
      icon: UserCircle,
      path: "/dashboard/profile",
    },
  ];
  const path = usePathname();
  return (
    <div className="h-screen shadow-md p-5">
      <div className="flex gap-2 items-center">
        <Image src={"/RiseLogo.svg"} alt="logo" width={230} height={230} />
      </div>

      <div className="mt-10">
        <Link href={"/create"} className="w-full">
          <Button className="w-full">+ Create New</Button>
        </Link>

        <div className="mt-5">
          {MenuList.map((menu, index) => (
            <Link href={menu.path} key={index}>
              <div
                className={`flex gap-5 items-center p-3
                        hover:bg-[#d5ebf6] rounded-lg cursor-pointer mt-3
                        ${path == menu.path && "bg-[#d5ebf6]"}`}
              >
                <menu.icon />
                <h2>{menu.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div
        className="border p-3 bg-[#d5ebf6] rounded-lg
            absolute bottom-10 w-[85%]"
      >
        <h2 className="text-md mb-5">Available Credits : 5</h2>
        <Progress value={30} />
        <h2 className="text-sm mt-5">Out of 5 Credits Used</h2>

        <Link href={"/dashboard/upgrade"} className="text-primary text-xs mt-5">
          Upgrade to create more
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
