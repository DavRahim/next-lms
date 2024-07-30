"use client"

import CourseContent from "@/components/course/CourseContent";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { styles } from "@/lib/styles";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
    params: any
};


const Page = ({ params }: Props) => {
    const id = params.id;
    const { data: userData, isLoading, error, refetch } = useLoadUserQuery(undefined, {});
    // console.log(userData);
    useEffect(() => {
        refetch();
        if (userData) {
            const isPurchased = userData?.data?.courses?.find((item: any) => item._id === id)
            if (!isPurchased) {
                redirect("/")
            }
            if (error) {
                redirect("/")
            }
        }
    }, [userData, error, id, refetch]);


    return (
        <section className={`dark:${styles.darkTheme} min-h-screen`}>
            <MaxWidthWrapper>
                {
                    isLoading ? (
                        // TODO: loading component
                        <h1>Loading</h1>
                    ) : (
                        <>
                            <CourseContent id={id} user={userData} />
                        </>)
                }
            </MaxWidthWrapper>
        </section>
    );
};

export default Page;
