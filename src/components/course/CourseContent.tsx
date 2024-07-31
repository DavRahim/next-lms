import { useGetCourseContentQuery } from "@/redux/features/courses/coursesApi";
import React, { useState } from "react";
import CourseContentList from "./CourseContentList";
import CourseContentMedia from "./CourseContentMedia";
import Loader from "@/lib/Loader";

type Props = {
    id: String;
    user: any;
};
const CourseContent = ({ id, user }: Props) => {
    const { data: contentData, isLoading, refetch } = useGetCourseContentQuery(id, { refetchOnMountOrArgChange: true });
    const data = contentData?.data;
    const [activeVideo, setActiveVideo] = useState(0);
    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div className="w-full flex">
                        <div className="w-full md:w-[70%]">
                            <CourseContentMedia
                                data={data}
                                activeVideo={activeVideo}
                                setActiveVideo={setActiveVideo}
                                user={user}
                                id={id}
                                refetch={refetch}
                            />
                        </div>
                        <div className="hidden md:block md:w-[30%]">
                            <CourseContentList setActiveVideo={setActiveVideo} data={data} activeVideo={activeVideo} />
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default CourseContent;
