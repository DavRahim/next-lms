import CourseDetailsPage from "@/components/course/CourseDetailsPage";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

type Props = {};

const Page = ({ params }: any) => {
    return (
        <MaxWidthWrapper>
            <CourseDetailsPage id={params.id} />
        </MaxWidthWrapper>
    );
};

export default Page;
