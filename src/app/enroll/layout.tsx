import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import { styles } from "@/lib/styles";
import React, { ReactNode } from "react";



const EnrollRootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <section className={`dark:${styles.darkTheme} min-h-screen`}>
            <MaxWidthWrapper className='flex-1 flex flex-col'>
                <Steps />
                {children}
            </MaxWidthWrapper>
        </section>
    );
};

export default EnrollRootLayout;
