"use client"
import CourseDetailsPage from "@/components/course/CourseDetailsPage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { styles } from "@/lib/styles";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Learning Course Enroll | RS LMS",
    description: "E-Learning is platform for student to learn and get help form teachers",
    keywords: "Programming, Redux, Next js, Javascript"
};

type Props = {};

const Page = ({ params }: any) => {
    return (
        <section className={`dark:${styles.darkTheme} min-h-screen`}>
            <MaxWidthWrapper>
                <CourseDetailsPage id={params.id} />
            </MaxWidthWrapper>
        </section>

    );
};

export default Page;
