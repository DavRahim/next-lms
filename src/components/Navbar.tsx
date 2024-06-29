"use client"

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { ArrowRight } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

type Props = {};

const Navbar = (props: Props) => {
  const { data: userData, isLoading, refetch } = useLoadUserQuery(undefined, {});

  console.log(userData);
  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={"/"} className="flex z-40 font-semibold">
            Rs<span className='text-green-600'>Leaning</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            <Link
              href='/courses'
              className={buttonVariants({
                size: 'sm',
                variant: 'ghost',
              })}>
              Courses
            </Link>
            <Link
              href='/policy'
              className={buttonVariants({
                size: 'sm',
                variant: 'ghost',
              })}>
              Privacy Policy
            </Link>
            <Link
              href='/about'
              className={buttonVariants({
                size: 'sm',
                variant: 'ghost',
              })}>
              About Us
            </Link>
            <Link
              href='/login'
              className={buttonVariants({
                size: 'sm',
                variant: 'ghost',
              })}>
              Login
            </Link>
            <div className='h-8 w-px bg-zinc-200 hidden sm:block' />
            {
              isLoading ? ("") : (userData ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="border-[2px] border-green-500 shadow-2xl">
                      <AvatarImage src={userData?.data?.avatar?.url || ""} alt="@shadcn" />
                      <AvatarFallback>{userData?.data?.name || "AR"}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuItem>My Account</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (<Link
                href='/'
                className={buttonVariants({
                  size: 'sm',
                  className: 'hidden sm:flex items-center gap-1',
                })}>
                Enroll Now
                <ArrowRight className='ml-1.5 h-5 w-5' />
              </Link>))
            }

            {/* <Link
              href='/'
              className={buttonVariants({
                size: 'sm',
                className: 'hidden sm:flex items-center gap-1',
              })}>
              Enroll Now
              <ArrowRight className='ml-1.5 h-5 w-5' />
            </Link> */}

            {/* <Avatar className="border-[2px] border-green-500 shadow-2xl">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
