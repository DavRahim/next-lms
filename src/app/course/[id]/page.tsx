"use client"
import CourseDetailsPage from "@/components/course/CourseDetailsPage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { styles } from "@/lib/styles";
import React from "react";

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
