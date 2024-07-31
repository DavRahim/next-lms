import React from "react";
import { Skeleton } from "./ui/skeleton";

type Props = {};

const CardSkeleton = (props: Props) => {
    return (
        <div className="w-full flex items-center gap-3">
            <div className="w-[65%] flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4" />
                    <Skeleton className="h-4 " />
                </div>
            </div>
            <div className="w-[35%] flex flex-col space-y-3">
                <Skeleton className="h-[125px] sm:h-[40vh]  rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-4" />
                    <Skeleton className="h-4" />
                </div>
            </div>

        </div>
    );
};

export default CardSkeleton;
