import React, { useState } from "react";
import CoursePlayer from "./CoursePlayer";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";

type Props = {
  data: any;
  activeVideo: number;
  setActiveVideo: (activeVideo: number) => void;
  user: any
  id: String
  refetch: any
};
const CourseContentMedia = ({ activeVideo, data, setActiveVideo, user, id, refetch }: Props) => {

  const [activeBar, setActiveBar] = useState(0);
  const [question, setQuestion] = useState("");

  console.log(user, "CourseContentMedia");

  return (
    <div className="w-[95%] md:w-[86%] py-4 m-auto">
      <CoursePlayer
        title={data[activeVideo]?.title}
        videoUrl={data[activeVideo]?.videoUrl}
      />
      {/* button */}
      <div className="w-full flex items-center justify-between my-3">
        <Button variant={"default"} className={`!w-[unset] text-black !min-h-[40px] !py-[unset] ${activeVideo === 0 && "!cursor-no-drop opacity-[.8]"}`} onClick={() => setActiveVideo(activeVideo === 0 ? 0 : activeVideo - 1)}>
          <AiOutlineArrowLeft className="mr-2" />
          Prev Lesson
        </Button>
        <Button variant={"default"} className={`!w-[unset] text-black !min-h-[40px] !py-[unset] ${data.length - 1 === activeVideo && "!cursor-no-drop opacity-[.8]"}`} onClick={() => setActiveVideo(data && data.length - 1 === activeVideo ? activeVideo : activeVideo + 1)}>
          Next Lesson
          <AiOutlineArrowRight className="mr-2" />
        </Button>
      </div>
      {/* title */}
      <h1 className="pt-2 text-black text-[25px] font-[600]">{data[activeVideo].title}
      </h1>
      <br />

      <div className="w-full p-4 flex items-center justify-between bg-slate-500 bg-opacity-20 backdrop-blur shadow-[bg-slate-700] rounded shadow-inner">
        {["Overview", "Resource", "Q&A", "Review"].map((text, index) => (
          <h5 key={index} className={`md:text-[20px] cursor-pointer ${activeBar === index ? "text-red-500" : "text-black dark:text-white"}`} onClick={() => setActiveBar(index)}>
            {text}
          </h5>
        ))
        }
      </div>
      <br />
      {
        activeBar === 0 && (
          <p className="text-[18px] whitespace-pre-line mb-3 text-black dark:text-white">
            {data[activeVideo]?.description}

          </p>
        )
      }
      {
        activeBar === 1 && (
          <div>
            {
              data[activeVideo]?.links?.map((item: any, index: number) => (
                <div key={index} className="mb-5">
                  <h2 className="md:text-[20px] md:inline-block text-black dark:text-white">
                    {item?.title && item?.title + ":"}

                  </h2>
                  <a className="inline-block text-[#439c4] md:text-[20px] md:pl-2 text-black dark:text-white" href={item?.url}>{item?.url}</a>
                </div>
              ))
            }
          </div>
        )
      }

      {
        activeBar === 2 && (
          <>
            <div className="flex w-full">
              <Image
                src={user.data.avatar ? user.data.avatar.url : ""}
                alt=""
                width={50}
                height={50}
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <textarea name="" value={question} onChange={(e) => setQuestion(e.target.value)} id="" cols={40} rows={5} placeholder="Write Your Question ..." className="outline-none bg-transparent ml-3 border border-[#dde7d889] md:w-full p-2 rounded w-[90%] md:text-[18px] font-Poppins"></textarea>
            </div>

            <div className="w-full flex justify-end">
              <Button variant={"default"} className={`!w-[120px] !h-[40px] text-[18px] mt-5 ${
                // questionCreationLoading
                true
                && "cursor-no-drop"}`}
              //  onClick={questionCreationLoading ? () => { } : handleQuestion}
              >
                Submit
              </Button>
            </div>
            <br />
            <br />
            <div className="w-full h-[1px] bg-[#ffffff3b]">
              {/* <CommentReply
                data={data}
                activeVideo={activeVideo}
                answer={answer}
                setAnswer={setAnswer}
                handleAnswerSubmit={handleAnswerSubmit}
                user={user}
                questionId={questionId}
                setQuestionId={setQuestionId}
                answerCreationLoading={answerCreationLoading}

              /> */}
              coming soong

            </div>

          </>
        )
      }
    </div>
  );
};

export default CourseContentMedia;
