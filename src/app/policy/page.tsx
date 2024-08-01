import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { styles } from "@/lib/styles";
import React from "react";

type Props = {};

const Page = (props: Props) => {
    return (
        <section className={`dark:${styles.darkTheme} min-h-screen`}>
            <MaxWidthWrapper>
                <div>
                    <h2 className="text-[25px] text-gray-900 dark:text-white 
               py-2 !text-start font-bold pt-2">Privacy Policy for Rs Programmer</h2>
                    <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
                        <p className="py-2 ml-[-15px] text-[16px] text-gray-900 dark:text-white leading-8 whitespace-pre-line">At Rs Programmer , accessible at Rsprogramer.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Rs Programmer and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at Rsprogrammer@gmail.com This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Rs Programmer. This policy is not applicable to any information collected offline or via channels other than this website.</p>
                        <p className="text-[25px] text-gray-900 dark:text-white py-2 !text-start font-bold pt-2 ml-[-15px]">Consent</p>
                        <p className="py-2 ml-[-15px] text-[16px] text-gray-900 dark:text-white leading-8 whitespace-pre-line ">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                        <p className="text-[25px] text-gray-900 dark:text-white !text-start py-2 font-bold pt-2 ml-[-15px]">Information we collect</p>
                        <p className="py-2 ml-[-15px] text-[16px] text-gray-900 dark:text-white font-Poppins leading-8 whitespace-pre-line">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
                        <p className="text-[25px] text-gray-900 dark:text-white !text-start py-2 font-bold pt-2 ml-[-15px]">Information we collect</p>
                        <p className="py-2 ml-[-15px] text-[16px] text-gray-900 dark:text-white font-Poppins leading-8 whitespace-pre-line">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
                        <p className="text-[25px] text-gray-900 dark:text-white !text-start py-2 font-bold pt-2 ml-[-15px]">Information we collect</p>
                        <p className="py-2 ml-[-15px] text-[16px] text-gray-900 dark:text-white font-Poppins leading-8 whitespace-pre-line">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
                    </ul>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Page;
