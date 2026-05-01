"use client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import skill from "../../public/skill.png";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSingOut = async () => {
    await authClient.signOut();
  };

  if (!mounted) return null;

  return (
    <div className="border p-3 shadow-2xl">
      <div className="flex justify-between items-center">

        <div className="flex items-center gap-2">
          <Image src={skill} alt="logo" height={50} width={50} />
          <p className="font-bold text-lg md:text-xl">SkillSphere</p>
        </div>

        <ul className="hidden md:flex font-bold text-lg items-center gap-6">
          <li>
            <Link href="/" className={pathname === "/" ? "text-blue-500 underline" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/allcourse" className={pathname === "/allcourse" ? "text-blue-500 underline" : ""}>
              All Courses
            </Link>
          </li>
          <li>
            <Link href="/profile" className={pathname === "/profile" ? "text-blue-500 underline" : ""}>
              My Profile
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {!user && (
            <>
              <Link href="/singup">
                <Button variant="outline">SignUp</Button>
              </Link>
              <Link href="/singin">
                <Button variant="outline">SignIn</Button>
              </Link>
            </>
          )}

          {user && (
            <div className="flex items-center gap-3">
              <Avatar size="sm">
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSingOut} size="sm" variant="danger">
                SignOut
              </Button>
            </div>
          )}
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 font-bold text-lg">

          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/allcourse" onClick={() => setMenuOpen(false)}>
            All Courses
          </Link>
          <Link href="/profile" onClick={() => setMenuOpen(false)}>
            My Profile
          </Link>

          {!user && (
            <div className="flex flex-col gap-2">
              <Link href="/singup">
                <Button variant="outline">SignUp</Button>
              </Link>
              <Link href="/singin">
                <Button variant="outline">SignIn</Button>
              </Link>
            </div>
          )}

          {user && (
            <div className="flex items-center gap-3">
              <Avatar size="sm">
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSingOut} size="sm" variant="danger">
                SignOut
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;