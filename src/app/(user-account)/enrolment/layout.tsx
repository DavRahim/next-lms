"use client"
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

export const metadata: Metadata = {
    title: "Learning Enrolment | RS LMS",
    description: "E-Learning is platform for student to learn and get help form teachers",
    keywords: "Programming, Redux, Next js, Javascript"
};

type Props = {};

const CourseLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <>{children}</>;
};

export default CourseLayout;
