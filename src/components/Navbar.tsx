"use client"

import React, { useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useLogoutUserMutation } from "@/redux/features/auth/authApi";
import { useSelector } from "react-redux";
import { useToast } from "./ui/use-toast";
import { useTheme } from "next-themes";
import { styles } from "@/lib/styles";

type Props = {};

const Navbar = (props: Props) => {
  const { user } = useSelector((state: any) => state.auth)
  const { data: userData, isLoading, isError, refetch } = useLoadUserQuery(undefined, {});
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
      refetch()
    }
  }, [isSuccess, toast, refetch]);


  const { setTheme } = useTheme()
  return (
    <nav className={`sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-green-300/50
   backdrop-blur-lg transition-all dark:${styles.darkTheme}`}>
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 ">
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
            <div className="flex items-center gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className='h-8 w-px bg-zinc-200 hidden sm:block' />
            {
              isLoading && isError ? ("") : (user ? (
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
