import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";


const UserRootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <MaxWidthWrapper className="grid grid-cols-12">
            <div className="col-span-2 flex">
                <div className="flex flex-col">
                    <Link
                        href='/courses'
                        className={buttonVariants({
                            size: 'sm',
                            variant: 'ghost',
                        })}>
                        Account
                    </Link>
                    <Link
                        href='/courses'
                        className={buttonVariants({
                            size: 'sm',
                            variant: 'ghost',
                        })}>
                        Account
                    </Link>
                    <Link
                        href='/courses'
                        className={buttonVariants({
                            size: 'sm',
                            variant: 'ghost',
                        })}>
                        Account
                    </Link>
                    <Link
                        href='/courses'
                        className={buttonVariants({
                            size: 'sm',
                            variant: 'ghost',
                        })}>
                        Account
                    </Link>
                </div>
                <Separator orientation="vertical" />
            </div>
            {children}
        </MaxWidthWrapper>
    );
};

export default UserRootLayout;
