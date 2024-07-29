import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowDown, Check, CircleCheckBig, SquareCheckBig, Star } from "lucide-react";
import Image from "next/image";
import Profile from "@/components/Profile";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PublicCourses from "@/components/course/PublicCourses";
import { styles } from "@/lib/styles";

export default function Home() {
  return (
    <div className={`${styles.lightTheme}`}>
      {/* hero */}
      <section className={`dark:${styles.darkTheme} pb-12`}>
        {/* Hero area */}
        <MaxWidthWrapper className="pt-5 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-4">
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight dark:text-white text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                Start your
                <span className='bg-green-600 px-2 text-white'>programming Journey</span>{' '}
                with our Dedicated community!
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                We Strongly Believe In Personalized Learning & Empower Individuals To Kick-Start Their Careers. There Is No Chance Of Falling Behind, With A Module-Wise Structured & Project Based Study Plan Packed With Quizzes, Assignments,
                <span className='font-semibold'>one-of-one</span> Practice Homework For Interview Preparation & Special Guidance For Freelancing In Just One Course.
              </p>
              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <Image
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-1.png'
                    alt='user image'
                    width={40}
                    height={40}
                  />
                  <Image
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-2.png'
                    alt='user image'
                    width={40}
                    height={40}
                  />
                  <Image
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-3.png'
                    alt='user image'
                    width={40}
                    height={40}
                  />
                  <Image
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-4.jpg'
                    alt='user image'
                    width={40}
                    height={40}
                  />
                  <Image
                    className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-5.jpg'
                    alt='user image'
                    width={40}
                    height={40}
                  />
                </div>

                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                  </div>

                  <p>
                    <span className='font-semibold'>1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-10 lg:mx-0 lg:mt-20 h-fit'>
            <div className="mt-5 transform rounded border-2 border-indigo-600 transition duration-200 ease-out hover:scale-x-110 hover:scale-y-110">
              <iframe src="https://www.youtube.com/embed/tw0JF-xVniU?si=qVXVGYFa80E50GpJ?rel=0" width={630} height={500} className="aspect-video w-full md:aspect-square"></iframe>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Effective Personalized */}
      <section className={`dark:${styles.darkTheme} py-12`}>
        <MaxWidthWrapper className='flex flex-col items-center gap-16'>
          <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
            <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 dark:text-white dark:text-white'>
              Effective{' '}
              <span className='relative px-2'>
                Personalized{' '}
                <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500' />
              </span>{' '}
              Learning
            </h2>
            <Image
              src='/logo-secendery.png'
              className='w-32 order-0 lg:order-2 object-cover'
              alt="student-image"
              width={128}
              height={128}
            />
          </div>

          {/* Effective Personalized */}
          <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
            {/* writing */}
            <div className='lg:py-6 lg:pr-16 gap-4 xl:pr-20'>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-green-500">
                      <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                    </div>
                  </div>
                  <div className="h-full w-px bg-green-600"></div>
                </div>
                <div className="pb-8 pt-1 text-gray-900 dark:text-white">
                  <p className="mb-2 text-lg font-bold">
                    Interactive Live & Recording Classes
                  </p>
                  <p className="text-gray-800 dark:text-white">
                    Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-green-500">
                      <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                    </div>
                  </div>
                  <div className="h-full w-px bg-green-600"></div>
                </div>
                <div className="pb-8 pt-1 text-gray-900 dark:text-white">
                  <p className="mb-2 text-lg font-bold">
                    Interactive Live & Recording Classes
                  </p>
                  <p className="text-gray-800 dark:text-white">
                    Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-green-500">
                      <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                    </div>
                  </div>
                  <div className="h-full w-px bg-green-600"></div>
                </div>
                <div className="pb-8 pt-1 text-gray-900 dark:text-white">
                  <p className="mb-2 text-lg font-bold">
                    Interactive Live & Recording Classes
                  </p>
                  <p className="text-gray-800 dark:text-white">
                    Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-green-500">
                      <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                    </div>
                  </div>
                  <div className="h-full w-px bg-green-600"></div>
                </div>
                <div className="pb-8 pt-1 text-gray-900 dark:text-white">
                  <p className="mb-2 text-lg font-bold">
                    Interactive Live & Recording Classes
                  </p>
                  <p className="text-gray-800 dark:text-white">
                    Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-green-500">
                      <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                    </div>
                  </div>
                  <div className="h-full w-px bg-green-600"></div>
                </div>
                <div className="pb-8 pt-1 text-gray-900 dark:text-white">
                  <p className="mb-2 text-lg font-bold">
                    Interactive Live & Recording Classes
                  </p>
                  <p className="text-gray-800 dark:text-white">
                    Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-green-500">
                      <Check className='h-4 w-4 text-green-600 fill-green-600' />
                    </div>
                  </div>

                </div>
                <div className="pb-8 pt-1 text-gray-900 dark:text-white">
                  <p className="text-lg font-bold">
                    Unlimited Support
                  </p>
                </div>
              </div>
            </div>

            {/* image */}
            <div className='relative gap-4 lg:pr-8 xl:pr-20'>
              <Image
                src={'/banner.svg'}
                className="md-max-w-sm h-auto object-cover"
                alt="banner"
                width={610}
                height={459}
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Step section */}
      <section className={`dark:${styles.darkTheme} py-12`}>
        <MaxWidthWrapper className=''>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 dark:text-white'>
                What Are The Specialties Of{' '}
                <span className='relative px-2 bg-green-600 text-white'>
                  your own case
                </span>{' '}
                now
              </h2>
              <p className="text-lg text-gray-800 dark:text-white">You Will Get From Us After Enrollment The Course</p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl py-10">
            <div>
              {/* 1 */}
              <div className="flex flex-row">
                <div className="hidden flex-col items-center md:flex">
                  <div className="text-gradient mr-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase">
                    <div className="text-3xl font-black text-gray-500">
                      Step 1
                    </div>
                    <div className="text-sm text-gray-500">
                      Learning
                    </div>

                  </div>
                  <div className="h-full border-l-4 border-transparent">
                    <div className="mr-4 h-full border-l-4 border-dashed border-green-600">

                    </div>
                  </div>

                </div>

                <div className="flex-auto text-gray-900 dark:text-white">
                  <div className="flex flex-col items-center text-center md:flex-row">
                    <div
                      className="flex-auto"
                    >
                      <div className="pt-1 text-sm font-normal uppercase text-gray-700 dark:text-white md:hidden">
                        <span className="text-gradient p-2">Step 1: Learning</span>
                      </div>
                      <div className="p-2 text-xl font-semibold capitalize sm:text-base md:text-3xl">
                        Everyday Particular Chapter
                      </div>
                      <div className="w-[100%] p-2 pb-6 text-gray-700 dark:text-white sm:w-auto md:w-auto lg:w-auto">
                        Everyday We Will Give You Access Only One Chapter For Your Productive Learning.There Is No Chance Of Falling Behind, With A Module-Wise Structured Study Plan Packed With Quizzes, Assignments & Practice Home Work For Interview Preparation.
                      </div>

                    </div>
                    <div>
                      <Image
                        src={"/step1.svg"}
                        className="pointer-events-none h-auto object-cover p-4 md:max-w-sm"
                        alt="step1"
                        width={643}
                        height={341}
                      />
                    </div>
                  </div>
                </div>

              </div>
              {/* 2 */}
              <div className="flex flex-row items-start">
                <div className="border-r-4 border-t-4 border-transparent">
                  <div className="ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-dashed border-green-700"></div>
                </div>
                <div className="flex-auto border-t-4 border-transparent">
                  <div className="h-16 border-b-4 border-dashed border-green-700"></div>
                </div>
                <div className="mr-16 mt-16 h-16 w-16 rounded-tr-full border-r-4 border-t-4 border-dashed border-green-700"></div>
              </div>
              {/* 3 */}
              <div className="flex flex-row-reverse">
                <div className="hidden flex-col items-center md:flex">
                  <div className="text-gradient ml-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase">
                    <div className="text-3xl font-black">Step 2</div>
                    <div className="text-sm text-gray-500">Practicing </div>
                  </div>
                  <div className="h-full border-r-4 border-transparent">
                    <div className="ml-4 h-full border-l-4 border-dashed border-green-700"></div>
                  </div>
                </div>

                <div className="flex-auto text-gray-900 dark:text-white">
                  <div className="flex flex-col items-center text-center md:flex-row">
                    <div>
                      <Image
                        src={"/step2.webp"}
                        className="pointer-events-none h-auto object-cover p-4 md:max-w-sm"
                        alt="step1"
                        width={643}
                        height={341}
                      />
                    </div>
                    <div
                      className="flex-auto"
                    >
                      <div className="pt-1 text-sm font-normal uppercase text-gray-700 dark:text-white md:hidden">
                        <span className="text-gradient p-2">Step 1: Learning</span>
                      </div>
                      <div className="p-2 text-xl font-semibold capitalize sm:text-base md:text-3xl">
                        Step By Step Project Based Teaching Method
                      </div>
                      <div className="w-[100%] p-2 pb-6 text-gray-700 dark:text-white sm:w-auto md:w-auto lg:w-auto">
                        Everyday We Will Give You Access Only One Chapter For Your Productive Learning.There Is No Chance Of Falling Behind, With A Module-Wise Structured Study Plan Packed With Quizzes, Assignments & Practice Home Work For Interview Preparation.
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              {/* 4 */}
              <div className="flex flex-row-reverse items-start">
                <div className="border-l-4 border-t-4 border-transparent">
                  <div className="mr-16 h-16 w-16 rounded-br-full border-b-4 border-r-4 border-dashed border-green-700"></div>
                </div>
                <div className="flex-auto border-t-4 border-transparent">
                  <div className="h-16 border-b-4 border-dashed border-green-700"></div>
                </div>
                <div className="ml-16 mt-16 h-16 w-16 rounded-tl-full border-l-4 border-t-4 border-dashed border-green-700"></div>
              </div>
              {/* 5 */}
              <div className="flex flex-row">
                <div className="hidden flex-col items-center md:flex">
                  <div className="text-gradient mr-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase">
                    <div className="text-3xl font-black text-gray-500">
                      Step 3
                    </div>
                    <div className="text-sm text-gray-500">
                      THINKING
                    </div>

                  </div>
                  <div className="h-full border-l-4 border-transparent">
                    <div className="mr-4 h-full border-l-4 border-dashed border-green-600">

                    </div>
                  </div>

                </div>

                <div className="flex-auto text-gray-900 dark:text-white">
                  <div className="flex flex-col items-center text-center md:flex-row">
                    <div
                      className="flex-auto"
                    >
                      <div className="pt-1 text-sm font-normal uppercase text-gray-700 dark:text-white md:hidden">
                        <span className="text-gradient p-2">Step 1: Learning</span>
                      </div>
                      <div className="p-2 text-xl font-semibold capitalize sm:text-base md:text-3xl">
                        Critical Thinking Ability
                      </div>
                      <div className="w-[100%] p-2 pb-6 text-gray-700 dark:text-white sm:w-auto md:w-auto lg:w-auto">
                        You Will Have A Practice Day After Every 2-3 Chapter. There Will Be A Conceptual Session On That Practice Day. So Not Only You Are Learning Or Practicing, But You Will Also Get Time To Think About How Exactly Programming Happens And You Can Get Ready For Problem-Solving And Real-Life Implementation.
                      </div>

                    </div>
                    <div>
                      <Image
                        src={"/step3.svg"}
                        className="pointer-events-none h-auto object-cover p-4 md:max-w-sm"
                        alt="step1"
                        width={643}
                        height={341}
                      />
                    </div>
                  </div>
                </div>

              </div>
              {/* 6 */}
              <div className="flex flex-row items-start">
                <div className="border-r-4 border-t-4 border-transparent">
                  <div className="ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-dashed border-green-700"></div>
                </div>
                <div className="flex-auto border-t-4 border-transparent">
                  <div className="h-16 border-b-4 border-dashed border-green-700"></div>
                </div>
                <div className="mr-16 mt-16 h-16 w-16 rounded-tr-full border-r-4 border-t-4 border-dashed border-green-700"></div>
              </div>
              {/* 7 */}
              <div className="flex flex-row-reverse">
                <div className="hidden flex-col items-center md:flex">
                  <div className="text-gradient ml-4 flex w-32 flex-col items-center justify-center rounded py-5 uppercase">
                    <div className="text-3xl font-black">Step 4</div>
                    <div className="text-sm text-gray-500">IMPLEMENTATION </div>
                  </div>
                  {/* <div className="h-full border-r-4 border-transparent">
                    <div className="ml-4 h-full border-l-4 border-dashed border-green-700"></div>
                  </div> */}
                </div>

                <div className="flex-auto text-gray-900 dark:text-white">
                  <div className="flex flex-col items-center text-center md:flex-row">
                    <div>
                      <Image
                        src={"/step4.webp"}
                        className="pointer-events-none h-auto object-cover p-4 md:max-w-sm"
                        alt="step1"
                        width={643}
                        height={341}
                      />
                    </div>
                    <div
                      className="flex-auto"
                    >
                      <div className="pt-1 text-sm font-normal uppercase text-gray-700 dark:text-white md:hidden">
                        <span className="text-gradient p-2">Step 1: Learning</span>
                      </div>
                      <div className="p-2 text-xl font-semibold capitalize sm:text-base md:text-3xl">
                        Started Journey Become A Junior Developer
                      </div>
                      <div className="w-[100%] p-2 pb-6 text-gray-700 dark:text-white sm:w-auto md:w-auto lg:w-auto">
                        Finally After 4-6 Month You Can Get Ready For IMPLEMENTATION Your Knowledge For Make Money By Job Or Freelancing. It s Not Easy But Not Impossible. I Know You Can Do That. We Will Always With You.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Lead Instructor */}
      <section className={`dark:${styles.darkTheme} py-12`}>
        <MaxWidthWrapper className="">
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 dark:text-white'>
                Lead Instructor
              </h2>
            </div>
          </div>

          <div className="grid max-w-screen-lg lg:grid-cols-2 sm:mx-auto">
            <div className="flex items-center FounderImages mb-8 lg:mb-0">
              <Profile />
            </div>
            <div className="flex flex-col justify-center text-gray-900 dark:text-white border-l-2 border-green-500 ps-[50px] instructorDetailsBorder">
              <div>
                <div className="text-sm text-gray-700 dark:text-white capitalize tracking-wide">
                  <p> Md Abdur Rahim is afull stack web developer. They has been involved in web development and software profession for 5+ years.</p>
                  <br />
                  <p>  At the time of class 9, Out of love for programming and passion for teaching people, Eshan founded Hablu Programmer Platform in February 2021 which has around 600+ programming related video tutorials.</p>
                  <br />
                  <p>More than 250,000 people are learning free programming from Hablu Programmer YouTube channel and public Facebook group.</p>
                </div>
                <div className="mt-5">
                  <p className="font-semibold">Md Abdur Rahim</p>
                  <p className="font-semibold">Founder &amp; CEO - Rs Programmer</p>
                  <Image
                    src={'/logo-secendery.png'}
                    className="h-auto max-w-md webLogo"
                    alt="logo"
                    width={268}
                    height={75}
                  />
                  <p className="text-[15px] mt-3 text-gray-600">Trade License: TRAD/6NOGUPN/000340/2023 </p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Opportunity course card */}
      <section className={`dark:${styles.darkTheme} py-12`}>
        <MaxWidthWrapper>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-5xl text-gray-900 dark:text-white'>
                ExpandYourCareer{' '}
                <span className='relative px-2 bg-green-600 text-white'>
                  Opportunity
                </span>{' '}
                WithOurCourses
              </h2>
            </div>
          </div>
          {/* PublicCourses card */}
          <PublicCourses />
        </MaxWidthWrapper>
      </section>
      {/* Students Feedback */}
      <section className={`dark:${styles.darkTheme} py-12`}>
        <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-20'>
          <div className=''>
            <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 dark:text-white'>
              Students {" "}
              <span className='relative px-2'>
                Feedback{' '}
                <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500' />
              </span>{' '}
              say
            </h2>
            <p className="text-[16px] font-Poppins text-center md:w-[40%] mx-auto text-gray-700 dark:text-white">Our Students Are Our Strength, See What They Say About Us. Learners have always expressed their love for Hablu-Programmer.</p>
          </div>
          {/* card grid */}
          <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  The case feels durable and I even got a compliment on the
                  design. Had the case for two and a half months now and{' '}
                  <span className='p-0.5 bg-slate-800 text-white'>
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it.
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <Image
                  className='rounded-full h-12 w-12 object-cover'
                  src='/user-3.png'
                  alt='user'
                  width={48}
                  height={48}
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>Jonathan</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  The case feels durable and I even got a compliment on the
                  design. Had the case for two and a half months now and{' '}
                  <span className='p-0.5 bg-slate-800 text-white'>
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it.
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <Image
                  className='rounded-full h-12 w-12 object-cover'
                  src='/user-3.png'
                  alt='user'
                  width={48}
                  height={48}
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>Jonathan</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
                <Star className='h-5 w-5 text-green-600 fill-green-600' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  The case feels durable and I even got a compliment on the
                  design. Had the case for two and a half months now and{' '}
                  <span className='p-0.5 bg-slate-800 text-white'>
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it.
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <Image
                  className='rounded-full h-12 w-12 object-cover'
                  src='/user-3.png'
                  alt='user'
                  width={48}
                  height={48}
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>Jonathan</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-green-600' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </MaxWidthWrapper>
      </section>
      {/* Frequently Asked */}
      <section className={`dark:${styles.darkTheme} py-12`}>
        <MaxWidthWrapper>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-5xl text-gray-900 dark:text-white'>
                Frequently Asked{' '}
                <span className='relative px-2 bg-green-600 text-white'>
                  Questions
                </span>{' '}
              </h2>
            </div>
          </div>
          <div className="mt-12">
            <dl className="space-y-8">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[19px]">How Can I Get The Course Videos?</AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    Course Videos Will Be Pre-Recorded & Weekly Live Session. You Have To Create An Account And Register For This Course. From The Beginning, Videos Will Be Distributed In One Chapter Every Day. Each Chapter Typically Has 3 To 8 Videos. You Must Watch These Videos Within 24 Hours Of Our Release.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-[19px]">How Much Time Will Take To Finish The Course?</AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    Course Videos Will Be Pre-Recorded & Weekly Live Session. You Have To Create An Account And Register For This Course. From The Beginning, Videos Will Be Distributed In One Chapter Every Day. Each Chapter Typically Has 3 To 8 Videos. You Must Watch These Videos Within 24 Hours Of Our Release.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-[19px]">What I Will Learn From This Course?</AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    Course Videos Will Be Pre-Recorded & Weekly Live Session. You Have To Create An Account And Register For This Course. From The Beginning, Videos Will Be Distributed In One Chapter Every Day. Each Chapter Typically Has 3 To 8 Videos. You Must Watch These Videos Within 24 Hours Of Our Release.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-[19px]">What should I do if I get stuck somewhere while following the course?</AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    Course Videos Will Be Pre-Recorded & Weekly Live Session. You Have To Create An Account And Register For This Course. From The Beginning, Videos Will Be Distributed In One Chapter Every Day. Each Chapter Typically Has 3 To 8 Videos. You Must Watch These Videos Within 24 Hours Of Our Release.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-[19px]">How do you conduct online classes? Do you only provide recorded classes?</AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    Course Videos Will Be Pre-Recorded & Weekly Live Session. You Have To Create An Account And Register For This Course. From The Beginning, Videos Will Be Distributed In One Chapter Every Day. Each Chapter Typically Has 3 To 8 Videos. You Must Watch These Videos Within 24 Hours Of Our Release.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-[19px]">How to pay the course fee? Is it in one go or installments are available?</AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    Course Videos Will Be Pre-Recorded & Weekly Live Session. You Have To Create An Account And Register For This Course. From The Beginning, Videos Will Be Distributed In One Chapter Every Day. Each Chapter Typically Has 3 To 8 Videos. You Must Watch These Videos Within 24 Hours Of Our Release.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-[19px]">How Can I Get The Course Videos?</AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    Course Videos Will Be Pre-Recorded & Weekly Live Session. You Have To Create An Account And Register For This Course. From The Beginning, Videos Will Be Distributed In One Chapter Every Day. Each Chapter Typically Has 3 To 8 Videos. You Must Watch These Videos Within 24 Hours Of Our Release.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </dl>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
