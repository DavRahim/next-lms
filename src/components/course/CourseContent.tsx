import { useGetCourseContentQuery } from "@/redux/features/courses/coursesApi";
import React, { useState } from "react";
import CourseContentList from "./CourseContentList";
import CourseContentMedia from "./CourseContentMedia";

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
                    // TODO: loading component 
                    <h1>Loading Coming soong</h1>
                ) : (
                    <div className="w-full grid md:grid-cols-10">
                        <div className="col-span-7">
                            <CourseContentMedia
                                data={data}
                                activeVideo={activeVideo}
                                setActiveVideo={setActiveVideo}
                                user={user}
                                id={id}
                                refetch={refetch}
                            />
                        </div>
                        <div className="hidden md:block md:col-span-3">
                            <CourseContentList setActiveVideo={setActiveVideo} data={data} activeVideo={activeVideo} />
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default CourseContent;
