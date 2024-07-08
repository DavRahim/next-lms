import React, { FC } from "react";

type Props = {
    // data: any;
    // activeVideo?: Number;
    // setActiveVideo?: any;
    isDemo?: boolean;
};

const CourseContentList: FC<Props> = (props) => {
    return (
        <div className={`mt-[15px] w-full ${!props.isDemo && "ml-[-30px] min-h-screen sticky top-24 left-0 z-30"}`}>
            
        </div>
    );
};

export default CourseContentList;
