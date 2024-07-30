import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { styles } from "@/lib/styles";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <section className={`dark:${styles.darkTheme} min-h-screen`}>
    <MaxWidthWrapper>
      <br />
      <h1 className="text-[25px] font-[500] text-center py-2 md:!text-[45px]">What is <span className="text-[#16A34A]">Rs-LMS?</span></h1>
      <br />
      <div className="w-[95%] md:w-[100%] mx-auto">
        <p className="text-[18px] font-Poppins">
          Are you ready to take your programming skills to the next level? Look no further than Rs LMS, the premier programming community dedicated to helping new programmers achieve their goals and reach their full potential.
          <br />
          <br />
          As the founder and CEO of Rs LMS, I know firsthand the challenges that come with learning and growing in the programming industry. Thats why I created Rs LMS – to provide new programmers with the resources and support they need to succeed.
          <br />
          <br />
          Our YouTube channel is a treasure trove of informative videos on everything from programming basics to advanced techniques. But thats just the beginning. Our affordable courses are designed to give you the high-quality education you need to succeed in the industry, without breaking the bank.
          <br />
          <br />
          At Rs LMS, we believe that price should never be a barrier to achieving your dreams. Thats why our courses are priced low – so that anyone, regardless of their financial situation, can access the tools and knowledge they need to succeed.
          <br />
          <br />
          But Rs LMS is more than just a community – we re a family. Our supportive community of like-minded individuals is here to help you every step of the way, whether you re just starting out or looking to take your skills to the next level.
          <br />
          <br />
          With Rs LMS by your side, theres nothing standing between you and your dream job. Our courses and community will provide you with the guidance, support, and motivation you need to unleash your full potential and become a skilled programmer.
          <br />
          <br />
          So what are you waiting for? Join the Rs LMS family today and lets conquer the programming industry together! With our affordable courses, informative videos, and supportive community, the skys the limit.
        </p>
        <br />
        <br />
      </div>
    </MaxWidthWrapper>
    </section>
  );
};

export default Page;
