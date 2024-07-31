"use client"
import CourseDetailsPage from "@/components/course/CourseDetailsPage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Heading from "@/lib/Heading";
import { styles } from "@/lib/styles";
import React from "react";

type Props = {};

const Page = ({ params }: any) => {
    return (
        <section className={`dark:${styles.darkTheme} min-h-screen`}>
            <Heading title="Course Enroll"
                description="E-Learning is platform for student to learn and get help form teachers" keywords="Programming, Redux" />
            <MaxWidthWrapper>
                <CourseDetailsPage id={params.id} />
            </MaxWidthWrapper>
        </section>

    );
};

export default Page;
