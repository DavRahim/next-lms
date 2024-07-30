import React, { useEffect, useState } from "react";
import CoursePlayer from "./CoursePlayer";
import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineStar } from "react-icons/ai";
import { Button } from "../ui/button";
import { format } from "timeago.js";
import { BiMessage } from "react-icons/bi"
import { VscVerifiedFilled } from "react-icons/vsc";
import { useAddAnswerInQuestionMutation, useAddNewQuestionMutation, useAddReplyInReviewMutation, useAddReviewInCourseMutation, useGetCoursesDetailsQuery } from "@/redux/features/courses/coursesApi";
import Ratings from "@/lib/Ratings";
import { useToast } from "../ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LucideMessageCircle } from "lucide-react";

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
  const [answer, setAnswer] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0)
  const [questionId, setQuestionId] = useState("");
  const [isReviewReply, setIsReviewReply] = useState(false);
  const [reply, setReply] = useState("");
  const [reviewId, setReviewId] = useState("");

  // toast
  const { toast } = useToast()


  // find course
  const { data: courseData, refetch: courseRefetch } = useGetCoursesDetailsQuery(id, { refetchOnMountOrArgChange: true });
  const course = courseData?.data;

  // review find
  const isReviewExists = course?.reviews?.find((item: any) => item.user._id === user.data._id);



  // addNewQuestion
  const [addNewQuestion, { isSuccess, error, isLoading: questionCreationLoading }] = useAddNewQuestionMutation();

  const handleQuestion = () => {
    if (question.length === 0) {
      toast({
        variant: "destructive",
        title: "Question can't be empty",
        description: "There was a problem with your request.",
      })
      return
    } else {
      // console.log({ question, courseId: id, contentId: data[activeVideo]._id });
      addNewQuestion({ question, courseId: id, contentId: data[activeVideo]._id })
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setQuestion("");
      refetch();
      toast({
        description: "Question added successfully.",
      })
      // TODO: socket connect
      // socketId.emit("notification", {
      //   title: "New Question Received",
      //   message: `you have a new question in ${data[activeVideo].title}`,
      //   userId: user._id
      // })

    }
    if (error) {
      if ("data" in error) {
        toast({
          variant: "destructive",
          title: "Answer added Unsuccessfully.",
          description: "There was a problem with your request.",
        })
      }
    }
  }, [isSuccess, refetch, toast, error]);


  // addAnswerInQuestion
  const [addAnswerInQuestion, { isSuccess: answerSuccess, error: answerError, isLoading: answerCreationLoading }] = useAddAnswerInQuestionMutation();
  const handleAnswerSubmit = () => {
    if (answer === "") {
      toast({
        variant: "destructive",
        title: "answer can't be empty",
        description: "There was a problem with your request.",
      })
      return
    }
    // console.log({ answer, courseId: id, contentId: data[activeVideo]._id, questionId });
    addAnswerInQuestion({ answer, courseId: id, contentId: data[activeVideo]._id, questionId })
  }
  useEffect(() => {
    if (answerSuccess) {
      setAnswer("");
      refetch();
      toast({
        description: "Answer added successfully.",
      })
      // TODO: Socket connect 
      // socketId.emit("notification", {
      //   title: "New Reply Received",
      //   message: `you have a new Reply in Question ${data[activeVideo].title}`,
      //   userId: user._id
      // })
    }
    if (answerError) {
      if ("data" in answerError) {
        toast({
          variant: "destructive",
          title: "Answer added Unsuccessfully.",
          description: "There was a problem with your request.",
        })
      }
    }
  }, [answerSuccess, refetch, toast, answerError])



  //addReviewInCourse
  const [addReviewInCourse, { isSuccess: reviewSuccess, error: reviewError, isLoading: reviewCreationLoading }] = useAddReviewInCourseMutation();
  const handleReviewSubmit = async () => {
    if (review.length === 0) {
      toast({
        variant: "destructive",
        title: "Review can't be empty",
        description: "There was a problem with your request.",
      })
      return
    } else {
      addReviewInCourse({ review, rating, courseId: id })
    }
  }
  useEffect(() => {
    if (reviewSuccess) {
      setReview("")
      setRating(1);
      courseRefetch();
      toast({
        description: "Review added successfully.",
      })

      // TODO: 
      // socketId.emit("notification", {
      //   title: "New Review Received",
      //   message: `you have a new question in ${data[activeVideo].title}`,
      //   userId: user._id
      // })
    }
    if (reviewError) {
      if ("data" in reviewError) {
        toast({
          variant: "destructive",
          title: "Review added Unsuccessfully.",
          description: "There was a problem with your request.",
        })
      }
    }
  }, [reviewSuccess, reviewError, courseRefetch, toast]);


  // addReplyInReview only admin
  const [addReplyInReview, { isSuccess: replySuccess, error: replyError, isLoading: replyCreationLoading }] = useAddReplyInReviewMutation();
  const handleReviewReplySubmit = () => {
    if (!replyCreationLoading) {
      if (reply === "") {
        toast({
          variant: "destructive",
          title: "Reply can't be empty",
          description: "There was a problem with your request.",
        })
        return
      } else {
        addReplyInReview({ comment: reply, courseId: id, reviewId })
      }
    }
  }
  useEffect(() => {
    if (replySuccess) {
      setReply("");
      courseRefetch();
      toast({
        description: "Review added successfully.",
      });
    }
    if (replyError) {
      if ("data" in replyError) {
        toast({
          variant: "destructive",
          title: "Review added Unsuccessfully.",
          description: "There was a problem with your request.",
        });
      }
    }

  }, [replyError, replySuccess, toast, courseRefetch])

  // console.log(user, "CourseContentMedia");

  return (
    <div className="w-[98%] md:w-[88%] py-4 mr-auto">
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
      <h1 className="pt-2 text-black dark:text-white text-[25px] font-[600]">{data[activeVideo].title}
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
          <div className="w-full">
            <div className="border-b pb-5">
              <div className="flex">
                <Avatar className="w-[40px] h-[40px]">
                  <AvatarImage src={user.data.avatar ? user.data.avatar.url : ""} alt="@avater" />
                  <AvatarFallback>{user?.data?.name || ""}</AvatarFallback>
                </Avatar>
                {/* <Image
                src={user.data.avatar ? user.data.avatar.url : ""}
                alt=""
                width={50}
                height={50}
                className="w-[50px] h-[50px] rounded-full object-cover"
              /> */}
                <textarea name="" value={question} onChange={(e) => setQuestion(e.target.value)} id="" cols={40} rows={5} placeholder="Write Your Question ..." className="outline-none bg-transparent ml-3 border border-[#dde7d889] md:w-full p-2 rounded w-[90%] md:text-[18px] font-Poppins"></textarea>
              </div>
              <div className="w-full flex justify-end">
                <Button variant={"default"} className={`!w-[120px] !h-[40px] text-[18px] mt-5 ${questionCreationLoading && "cursor-no-drop"}`}
                  onClick={questionCreationLoading ? () => { } : handleQuestion}
                >
                  Submit
                </Button>
              </div>
            </div>
            <br />
            <div className="w-full bg-[#ffffff3b]">
              <CommentReply
                data={data}
                activeVideo={activeVideo}
                answer={answer}
                setAnswer={setAnswer}
                handleAnswerSubmit={handleAnswerSubmit}
                user={user}
                questionId={questionId}
                setQuestionId={setQuestionId}
                answerCreationLoading={answerCreationLoading}
              />
            </div>
          </div>
        )
      }
      {
        activeBar === 3 && (
          <div className="w-full">
            <>
              {
                !isReviewExists && (
                  <>
                    <div className="flex w-full">
                      <Avatar className="w-[40px] h-[40px]">
                        <AvatarImage src={user.data.avatar ? user.data.avatar.url : ""} alt="@avater" />
                        <AvatarFallback>{user?.data?.name || ""}</AvatarFallback>
                      </Avatar>
                      {/* <Image
                        src={user.data.avatar ? user.data.avatar.url : "https://imgs.search.brave.com/H-EWHnZrTM7Fp44-1C5jP5MFwCHtU_SEulqH5WtPHDE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQxLzQ4LzU1/LzM2MF9GXzU0MTQ4/NTUwMF9XNkdOZHdi/R1lsMGVnSndHS0gx/VlJPclFnbDBQR0M0/VS5qcGc"}
                        alt=""
                        width={50}
                        height={50}
                        className="w-[50px] h-[50px] rounded-full object-cover"
                      /> */}
                      <div className="w-full ">
                        <h5 className="pl-3 text-[20px] font-[500] dark:text-white text-black">Give a Rating <span className="text-red-500">*</span>

                        </h5>
                        <div className="flex w-full ml-2 pb-3">
                          {
                            [1, 2, 3, 4, 5].map((i) => rating >= i ? (
                              <AiFillStar key={i} className="mr-1 cursor-pointer" color="rgb(246,186,0)" size={25} onClick={() => setRating(1)} />
                            ) : (
                              <AiOutlineStar key={i} className="mr-1 cursor-pointer" color="rgb(246,186,0)" size={25} onClick={() => setRating(i)} />
                            ))
                          }
                        </div>
                        <textarea name="" value={review} onChange={(e) => setReview(e.target.value)} id="" cols={40} rows={5} placeholder="Write Your comment ..." className="outline-none bg-transparent md:ml-3 border border-[#d4f0c89e] md:w-full p-2 rounded w-[95%] text-[18px] font-Poppins text-black dark:text-white"></textarea>
                      </div>
                    </div>
                    <div className="w-full flex justify-end">
                      <Button variant={"default"} className={`!w-[120px] !h-[40px] text-[18px] mt-5 text-black dark:text-white 
                      ${reviewCreationLoading && "cursor-not-allowed"}`} onClick={reviewCreationLoading ? () => { } : handleReviewSubmit}>
                        Submit
                      </Button>
                    </div>
                  </>
                )}
              <br />

              <div className="w-full bg-[#ffffff3b] text-black dark:text-white">
                <div className="w-full">
                  {
                    course?.reviews && [...course?.reviews].reverse().map((item: any, index: number) => (
                      <div className="w-full my-5" key={index}>
                        <div className="w-full flex">
                          <Avatar className="w-[40px] h-[40px]">
                            <AvatarImage src={item?.user.avatar ? item?.user?.avatar?.url : ""} alt="@avater" />
                            <AvatarFallback>{item?.user?.name || ""}</AvatarFallback>
                          </Avatar>
                          {/* <div className="w-[50px] h-[50px]"> */}
                          {/* <Image
                              src={item?.user.avatar ? item?.user?.avatar?.url : "https://imgs.search.brave.com/H-EWHnZrTM7Fp44-1C5jP5MFwCHtU_SEulqH5WtPHDE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQxLzQ4LzU1/LzM2MF9GXzU0MTQ4/NTUwMF9XNkdOZHdi/R1lsMGVnSndHS0gx/VlJPclFnbDBQR0M0/VS5qcGc"}
                              alt=""
                              width={50}
                              height={50}
                              className="w-[50px] h-[50px] rounded-full object-cover"
                            /> */}
                          {/* </div> */}
                          <div className="mt-2 ml-3">
                            <h1 className="text-[18px]">{item?.user?.name}</h1>
                            <Ratings rating={item?.rating} />
                            <p>
                              {item.comment}
                            </p>
                            <small className="text-[#100f0f83]">
                              {format(item.createdAt)} *
                            </small>
                          </div>
                        </div>
                        {
                          user.data.role === "admin" && item.commentReplies.length === 0 && (
                            <span className={`text-[25px] text-black dark:text-white font-[500] font-Poppins text-center py-2 !ml-10 cursor-pointer`}
                              onClick={() => {
                                setReviewId(item._id),
                                  setIsReviewReply(true)
                              }}>
                              Add Reply
                            </span>
                          )
                        }
                        {
                          isReviewReply && reviewId === item._id && (
                            <div className="w-full flex relative border-b">
                              <input
                                placeholder="Enter your reply ... "
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                                type="text" className={`block md:mt-2 outline-none bg-transparent border-b border-[#fff] p-[5px] w-[95%]`} />
                              <button onClick={handleReviewReplySubmit} type="submit" className="absolute right-0 bottom-1"> Submit</button>
                            </div>
                          )
                        }
                        {
                          item.commentReplies.map((i: any, index: number) => (

                            <div key={index} className="w-full flex md:ml-16 my-5">
                              <Avatar className="w-[40px] h-[40px]">
                                <AvatarImage src={i.user?.avatar ? i?.user?.avatar?.url : ""} alt="@avater" />
                                <AvatarFallback>{i.user?.name || ""}</AvatarFallback>
                              </Avatar>
                              {/* <div className="w-[50px] h-[50px]"> */}


                              {/* <Image
                                  src={i.user?.avatar ? i?.user?.avatar?.url : "https://imgs.search.brave.com/H-EWHnZrTM7Fp44-1C5jP5MFwCHtU_SEulqH5WtPHDE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQxLzQ4LzU1/LzM2MF9GXzU0MTQ4/NTUwMF9XNkdOZHdi/R1lsMGVnSndHS0gx/VlJPclFnbDBQR0M0/VS5qcGc"}
                                  alt=""
                                  width={50}
                                  height={50}
                                  className="w-[50px] h-[50px] rounded-full object-cover"
                                /> */}
                              {/* </div> */}
                              <div className="pl-2">
                                <h5 className="text-[20px]">
                                  <div className="flex items-center">
                                    {i?.user?.name} {i.user.role && <VscVerifiedFilled className="text-blue-700 ml-2" size={20} />}
                                  </div>
                                </h5>
                                <p>{i.comment}</p>
                                <small className="text-[#0a090983]">
                                  {format(i.createdAt)}
                                </small>
                              </div>
                            </div>

                          ))
                        }
                      </div>
                    ))
                  }
                </div>
              </div>
            </>
          </div>
        )
      }
    </div>
  );
};




const CommentReply = ({ data, activeVideo, answer, setAnswer, handleAnswerSubmit, user, setQuestionId, answerCreationLoading, questionId }: any) => {
  return (
    <>
      <div className="w-full my-3">
        {
          data[activeVideo].questions.map((item: any, index: number) => (
            <CommentItem
              key={index}
              data={data}
              activeVideo={activeVideo}
              item={item}
              setAnswer={setAnswer}
              answer={answer}
              questionId={questionId}
              setQuestionId={setQuestionId}
              handleAnswerSubmit={handleAnswerSubmit}
              answerCreationLoading={answerCreationLoading}
            />
          ))
        }
      </div>
    </>
  )

}


const CommentItem = ({ data, setQuestionId, item, answer, setAnswer, handleAnswerSubmit, answerCreationLoading, questionId }: any) => {
  const [replayActive, setReplayActive] = useState(false);
  return (
    <>
      <div className="my-4">
        <div className="flex mb-2">
          <Avatar className="w-[40px] h-[40px]">
            <AvatarImage src={item?.user?.avatar ? item?.user.avatar.url : ""} alt="@avater" />
            <AvatarFallback>{item?.user?.name || ""}</AvatarFallback>
          </Avatar>
          {/* <div className="w-[50px] h-[50px]">

            <Image
              src={item?.user.avatar ? item?.user.avatar.url : ""}
              alt=""
              width={50}
              height={50}
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </div> */}
          <div className="pl-3 text-black dark:text-white">
            <h5 className="text-[20px]">
              {item?.user.name}
            </h5>
            <p>
              {item?.question}
            </p>
            <small className="text-[#12111183]">{!item.createdAt ? "" : format(item?.createdAt)} *
            </small>
          </div>
        </div>
        {/* media */}
        <div className="w-full flex items-center">
          <h5 className="md:pl-16 text-black cursor-pointer mr-2" onClick={() => { setReplayActive(!replayActive), setQuestionId(item._id) }}>
            {!replayActive ? item?.questionReplies.length !== 0 ? "All Replies" : "Add Replay" : "Hide Replies"}
          </h5>
          <span className="cursor-pointer gap-1 flex w-min items-center text-lg">
            <LucideMessageCircle size={20} className="cursor-pointer text-black " fill="#ffffff83" />
            {item.questionReplies.length}
          </span>
        </div>
        {
          replayActive && questionId === item._id && (
            <>
              {
                item.questionReplies.map((item: any, index: number) => (
                  <div key={index} className="w-full flex md:ml-16 my-3 text-black dark:text-white">
                    <Avatar className="w-[40px] h-[40px]">
                      <AvatarImage src={item?.user.avatar ? item?.user.avatar.url : ""} alt="@avater" />
                      <AvatarFallback>{item?.user?.name || ""}</AvatarFallback>
                    </Avatar>
                    {/* <div className="w-[50px] h-[50px]">
                      
                      <Image
                        src={item?.user.avatar ? item?.user.avatar.url : ""}
                        alt=""
                        width={50}
                        height={50}
                        className="w-[50px] h-[50px] rounded-full object-cover"
                      />
                    </div> */}
                    <div className="pl-2">
                      <h5 className="text-[20px]">
                        <div className="flex items-center">
                          {item?.user?.name} {item.user.role && <VscVerifiedFilled className="text-blue-700 ml-2" size={20} />}
                        </div>
                      </h5>
                      <p className="">{item?.answer}
                      </p>
                      <small className="text-[#0b0b0b]">
                        {format(item?.createdAt)}
                      </small>
                    </div>
                  </div>
                ))
              }
              <>
                <div className="w-full flex relative text-black dark:text-white">
                  <input type="text" placeholder="Enter your answer ......" value={answer} onChange={(e: any) => setAnswer(e.target.value)}
                    className={`block md:ml-12 mt-2 outline-none bg-transparent border-b dark:border-[#fff] border-[#00000027] p-[5px] w-[95%] ${answer === "" || answerCreationLoading && "cursor-not-allowed"}`} />
                  <button className="absolute right-0 bottom-1" type="submit" onClick={handleAnswerSubmit} disabled={answerCreationLoading}>
                    Submit
                  </button>
                </div>
              </>
            </>
          )
        }
      </div>
    </>
  )
}



export default CourseContentMedia;









