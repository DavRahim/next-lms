import React from "react";

type Props = {
    data: any;
    activeVideo: number;
    setActiveVideo: (activeVideo: number) => void;
    user: any
    id: String
    refetch: any
};
const CourseContentMedia = ({ activeVideo, data, setActiveVideo, user, id, refetch }: Props) => {
  return <div>CourseContentMedia</div>;
};

export default CourseContentMedia;
