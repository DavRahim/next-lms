import React from "react";
import { HashLoader } from "react-spinners";

type Props = {};

const Loader = (props: Props) => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <HashLoader size={100} color="#22AA53" />
        </div>
    );
};

export default Loader;
