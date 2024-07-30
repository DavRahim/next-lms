"use client"
import Image from "next/image";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules';

type Props = {};

const Profile = (props: Props) => {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiper w-[320px] h-[350px]"
            >
                <SwiperSlide
                    className='flex items-center justify-center rounded-2xl border-[5px] border-green-400 bg-green-400'
                >
                    <Image
                        alt='swiper image'
                        src={'/profile-image.jpg'}
                        className='w-full h-full object-fill'
                        width={320}
                        height={350}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className='flex items-center justify-center rounded-2xl bg-green-400 border-[5px] border-green-400 '
                >
                    <Image
                        alt='swiper image'
                        src={'/profile-image.jpg'}
                        className='w-full h-full object-fill'
                        width={320}
                        height={350}
                    />
                </SwiperSlide>
            </Swiper>
        </>);
};

export default Profile;
