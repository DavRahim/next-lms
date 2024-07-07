import React from "react";
import CourseDetails from "./CourseDetails";


type Props = {
    id: string
};

const CourseDetailsPage = ({ id }: Props) => {
    return (
    <div>
        <CourseDetails />
    </div>);
};

export default CourseDetailsPage;
