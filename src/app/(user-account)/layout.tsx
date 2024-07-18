
import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Separator } from "@/components/ui/separator";
import { BadgeDollarSign, BookOpenCheck, LockKeyhole, UserRoundSearch } from "lucide-react";
import Link from "next/link";

const UserRootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <MaxWidthWrapper className="grid grid-cols-12 mt-10 mb-14">
            <div className="col-span-2 flex">
                <div className="flex flex-col gap-4">
                    <Link
                        href='/account'
                        className="flex items-center py-1 px-[4px] rounded-md hover:bg-[#F4F4F5]">
                        <UserRoundSearch className='h-4 w-4 stroke-[3px] text-green-600 mr-5' />
                        Account
                    </Link>
                    <Link
                        href='/change-password'
                        className="flex items-center py-1 px-[4px] rounded-md hover:bg-[#F4F4F5]">
                        <LockKeyhole className='h-4 w-4 stroke-[3px] text-green-600 mr-5' />
                        Password
                    </Link>
                    <Link
                        href='/transactions'
                        className="flex items-center py-1 px-[4px] rounded-md hover:bg-[#F4F4F5]">
                        <BadgeDollarSign className='h-4 w-4 stroke-[3px] text-green-600 mr-5' />
                        Transactions
                    </Link>
                    <Link href='/enrolment' className="flex items-center py-1 px-[4px] rounded-md hover:bg-[#F4F4F5]">
                        <BookOpenCheck className='h-4 w-4 stroke-[3px] text-green-600 mr-5' />
                        Enrolment
                    </Link>
                </div>
                <Separator className="ml-5" orientation="vertical" />
            </div>
            {children}
        </MaxWidthWrapper>
    );
};

export default UserRootLayout;
