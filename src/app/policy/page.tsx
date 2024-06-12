import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <MaxWidthWrapper>
        <div>
              <h2 className="text-[25px] text-gray-900 font-Poppins py-2 !text-start font-bold pt-2">Privacy Policy for Rs Programmer</h2>
              <ul style={{ listStyle: "unset", marginLeft:"15px"}}>
                <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">At Rs Programmer , accessible at Rsprogramer.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Rs Programmer and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at Rsprogrammer@gmail.com This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Rs Programmer. This policy is not applicable to any information collected offline or via channels other than this website.</p>

              </ul>
        </div>
    </MaxWidthWrapper>
  );
};

export default Page;
