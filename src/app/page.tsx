import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowDown, Star } from "lucide-react";
import Image from "next/image";



export default function Home() {
  return (
    <div className="background-gradient grainy-light">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-4 xl:pt-12 lg:pb-52">
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                Journey Of Frontend Web Development
                <span className='bg-green-600 px-2 text-white'>Custom</span>{' '}
                Web Development
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

          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
            <div className="mt-5 transform rounded border-2 border-indigo-600 transition duration-200 ease-out hover:scale-x-110 hover:scale-y-110">
              <iframe src="https://www.youtube.com/embed/tw0JF-xVniU?si=qVXVGYFa80E50GpJ?rel=0" width={530} height={400} className="aspect-video w-full md:aspect-square"></iframe>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* new section */}
      <section className='bg-slate-100 grainy-dark py-24'>
        <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
          <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
            <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
              What our{' '}
              <span className='relative px-2'>
                customers{' '}
                <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500' />
              </span>{' '}
              say
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
                    <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500">
                      <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                    </div>
                  </div>
                  <div className="h-full w-px bg-green-600"></div>
                </div>
                <div className="pb-8 pt-1 text-gray-900">
                  <p className="mb-2 text-lg font-bold">
                    Interactive Live & Recording Classes
                  </p>
                  <p className="text-gray-800">
                    Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500">
                      <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                    </div>
                  </div>
                  <div className="h-full w-px bg-green-600"></div>
                </div>
                <div className="pb-8 pt-1 text-gray-900">
                  <p className="mb-2 text-lg font-bold">
                    Interactive Live & Recording Classes
                  </p>
                  <p className="text-gray-800">
                    Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500">
                      <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                    </div>
                  </div>
                  <div className="h-full w-px bg-green-600"></div>
                </div>
                <div className="pb-8 pt-1 text-gray-900">
                  <p className="mb-2 text-lg font-bold">
                    Interactive Live & Recording Classes
                  </p>
                  <p className="text-gray-800">
                    Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500">
                      <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                    </div>
                  </div>
                  <div className="h-full w-px bg-green-600"></div>
                </div>
                <div className="pb-8 pt-1 text-gray-900">
                  <p className="mb-2 text-lg font-bold">
                    Interactive Live & Recording Classes
                  </p>
                  <p className="text-gray-800">
                    Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500">
                      <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                    </div>
                  </div>
                  <div className="h-full w-px bg-green-600"></div>
                </div>
                <div className="pb-8 pt-1 text-gray-900">
                  <p className="mb-2 text-lg font-bold">
                    Interactive Live & Recording Classes
                  </p>
                  <p className="text-gray-800">
                    Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div>
                    <div className="border-offset-2 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500">
                      <ArrowDown className='h-4 w-4 text-green-600 fill-green-600' />
                    </div>
                  </div>

                </div>
                <div className="pb-8 pt-1 text-gray-900">
                  <p className="text-lg font-bold">
                    Unlimited Support
                  </p>
                </div>
              </div>
            </div>

            {/* image */}
            <div className='relative mt-[130px] gap-4 lg:pr-8 xl:pr-20'>
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

      <section>
        <MaxWidthWrapper className='py-24'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                What Are The Specialties Of{' '}
                <span className='relative px-2 bg-green-600 text-white'>
                  your own case
                </span>{' '}
                now
              </h2>
              <p className="text-lg text-gray-800">You Will Get From Us After Enrollment The Course</p>
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

                <div className="flex-auto text-gray-900">
                  <div className="flex flex-col items-center text-center md:flex-row">
                    <div
                      className="flex-auto"
                    >
                      <div className="pt-1 text-sm font-normal uppercase text-gray-700 md:hidden">
                        <span className="text-gradient p-2">Step 1: Learning</span>
                      </div>
                      <div className="p-2 text-xl font-semibold capitalize sm:text-base md:text-3xl">
                        Everyday Particular Chapter
                      </div>
                      <div className="w-[100%] p-2 pb-6 text-gray-700 sm:w-auto md:w-auto lg:w-auto">
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

                <div className="flex-auto text-gray-900">
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
                      <div className="pt-1 text-sm font-normal uppercase text-gray-700 md:hidden">
                        <span className="text-gradient p-2">Step 1: Learning</span>
                      </div>
                      <div className="p-2 text-xl font-semibold capitalize sm:text-base md:text-3xl">
                        Step By Step Project Based Teaching Method
                      </div>
                      <div className="w-[100%] p-2 pb-6 text-gray-700 sm:w-auto md:w-auto lg:w-auto">
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

                <div className="flex-auto text-gray-900">
                  <div className="flex flex-col items-center text-center md:flex-row">
                    <div
                      className="flex-auto"
                    >
                      <div className="pt-1 text-sm font-normal uppercase text-gray-700 md:hidden">
                        <span className="text-gradient p-2">Step 1: Learning</span>
                      </div>
                      <div className="p-2 text-xl font-semibold capitalize sm:text-base md:text-3xl">
                        Critical Thinking Ability
                      </div>
                      <div className="w-[100%] p-2 pb-6 text-gray-700 sm:w-auto md:w-auto lg:w-auto">
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
                  <div className="h-full border-r-4 border-transparent">
                    <div className="ml-4 h-full border-l-4 border-dashed border-green-700"></div>
                  </div>
                </div>

                <div className="flex-auto text-gray-900">
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
                      <div className="pt-1 text-sm font-normal uppercase text-gray-700 md:hidden">
                        <span className="text-gradient p-2">Step 1: Learning</span>
                      </div>
                      <div className="p-2 text-xl font-semibold capitalize sm:text-base md:text-3xl">
                        Started Journey Become A Junior Developer
                      </div>
                      <div className="w-[100%] p-2 pb-6 text-gray-700 sm:w-auto md:w-auto lg:w-auto">
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

      <section className='bg-slate-100 grainy-dark py-24'>
        <MaxWidthWrapper className='py-24'>
          <div className='mb-12 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                Lead Instructor
              </h2>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>


    </div>
  );
}
