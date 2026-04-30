"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import skill from "../../public/skill.png";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="border p-3 flex justify-between items-center shadow-2xl">
      <div className="flex items-center gap-2">
        <Image src={skill} alt="logo" height={60} width={60}></Image>
        <p className="font-bold text-xl">SkillSphere</p>
      </div>
      <div>
        <ul className="font-bold text-xl flex items-center gap-5">
          <li>
            <Link
              href="/"
              className={pathname === "/" ? "text-blue-500 underline" : ""}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/allcourse"
              className={pathname === "/allcourse" ? "text-blue-500 underline" : ""}
            >
              All Courses
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className={pathname === "/" ? "text-blue-500 underline" : ""}
            >
              My Profile
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-3 items-center">
        <Link href={"/"}>
          <Button variant="outline">SingUp</Button>
        </Link>
        <Link href={"/"}>
          <Button variant="outline">SingIn</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
