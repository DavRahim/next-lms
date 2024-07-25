"use client"

import React, { useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { ArrowRight, Moon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useLogoutUserMutation } from "@/redux/features/auth/authApi";
import { useSelector } from "react-redux";
import { useToast } from "./ui/use-toast";

type Props = {};

const Navbar = (props: Props) => {
  const { user } = useSelector((state: any) => state.auth)
  const { data: userData, isLoading, refetch } = useLoadUserQuery(undefined, {});
  const [logoutUser, { isSuccess }] = useLogoutUserMutation();
  const { toast } = useToast()
  const logOut = async () => {
    await logoutUser({});
  }
  useEffect(() => {
    if (isSuccess) {
      toast({
        description: "Logout successfully",
      })
    }
  }, [isSuccess, toast]);

  // TODO: Dark work

  const handleDarkMode = () => {
    toast({
      description: "Dark Mode Is Coming Soon!",
    })
  }
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
                variant: "ghost",
                className: "hidden sm:flex items-center gap-1"
              })}>
              Courses
            </Link>
            <Link
              href='/policy'
              className={buttonVariants({
                size: 'sm',
                variant: "ghost",
                className: "hidden sm:flex items-center gap-1"
              })}>
              Privacy Policy
            </Link>
            <Link
              href='/about'
              className={buttonVariants({
                size: 'sm',
                variant: "ghost",
                className: "hidden sm:flex items-center gap-1"
              })}>
              About Us
            </Link>
            <div
              className={buttonVariants({
                size: 'sm',
                variant: "ghost",
                className: "flex items-center gap-1"
              })}
              onClick={handleDarkMode}>
              <Moon className='h-5 w-5' />
            </div>
            <div className='h-8 w-px bg-zinc-200 hidden sm:block' />
            {
              isLoading ? ("") : (user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="border-[2px] border-green-500 shadow-2xl">
                      <AvatarImage src={user.avatar?.url || ""} alt="@shadcn" />
                      <AvatarFallback>{user.name || "AR"}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <Link href={"/account"}>
                      <DropdownMenuItem>My Account</DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logOut}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (<Link
                href='/login'
                className={buttonVariants({
                  size: 'sm',
                  className: 'flex items-center gap-1',
                })}>
                Login
                <ArrowRight className='ml-1.5 h-5 w-5' />
              </Link>))
            }
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
