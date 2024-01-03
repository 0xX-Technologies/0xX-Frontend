import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
// import "./styles.css";
import { EffectCards } from "swiper/modules";
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";
import p4 from "../assets/p4.jpeg";
import p5 from "../assets/p5.jpeg";
import p6 from "../assets/p6.jpg";
import p8 from "../assets/p8.jpeg";
import Image from "next/image";
import bot from "../assets/bot.svg"
import telegram from "../assets/telegram.svg"

export default function Team() {
	return (
		<>
		<div  className="flex flex-col pb-16 bg-[#000000] pt-20 md:pt-40">
				<div id="team" className="Inter text-white mb-7 Inter text-[6.107vw] text-center font-extrabold lg:text-[54px] gap-7 pt-5">
				TEAM</div>
			<div className="flex items-center justify-center">
				<div className="body">
					<Swiper
						effect={"cards"}
						grabCursor={true}
						modules={[EffectCards]}
						className="mySwiper"
					>
						<SwiperSlide className="swiper-slide">
						<div className="img-container">
							<Image className="profile" src={p3} alt="profile" />
							</div>
							<div className="position">Founder</div>
							<div className="profile-name">Evan Salve</div>
						</SwiperSlide>
						<SwiperSlide>
						<div className="img-container">
							<Image className="profile" src={p4} alt="profile" />
							</div>
							<div className="position">CTO</div>
							<div className="profile-name">Pedro Tancos</div>
						</SwiperSlide>
						<SwiperSlide>
						<div className="img-container">
							<Image className="profile" src={p5} alt="profile" />
							</div>
							<div className="position">Backend Engineer</div>
							<div className="profile-name">Mick Phagans</div>
						</SwiperSlide>
						<SwiperSlide>
						<div className="img-container">
							<Image className="profile" src={p1} alt="profile" />
							</div>
							<div className="position">Frontend Engineer</div>
							<div className="profile-name">Tyler Harvey</div>
						</SwiperSlide>
						<SwiperSlide>
						<div className="img-container">
							<Image className="profile" src={p2} alt="profile" />
							</div>
							<div className="position">Chief AI Engineer</div>
							<div className="profile-name">Josh Taylor</div>
						</SwiperSlide>
						<SwiperSlide>
						<div className="img-container">
							<Image className="profile" src={p8} alt="profile" />
							</div>
							<div className="position">AI Engineer</div>
							<div className="profile-name">Thiago Alves</div>
						</SwiperSlide>
						<SwiperSlide>
						<div className="img-container">
							<Image className="profile" src={p4} alt="profile" />
							</div>
							<div className="position">AI Engineer</div>
							<div className="profile-name">Kevin Mata</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="img-container">
							<Image className="profile" src={p6} alt="profile" />
							</div>
							<div className="position">Technical Advisor</div>
							<div className="profile-name">Matt Brace</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
		<div className="flex items-center flex-wrap justify-evenly h-[fit-content] md:h-[30rem] Inter text-white font-light pt-20 bg-gradient-to-b from-black via-[#101010] to-[#252525] ">
			<div className="">
				<div className="text-center md:text-left">GET GOING WITH <span className="font-bold">TYPEAI</span></div>
				<div className=" text-[32px] md:text-[58px] font-extrabold"><span className="text-[#FFC100]">AI</span> IN YOUR POCKET</div>
				<div className="flex justify-center md:justify-start my-4">
				<button className="rounded-2xl flex border border-solid border-yellow-500 px-1 sm:px-8 py-2 uppercase cursor-pointer">
					<span className="px-1"><Image src={telegram} alt=""/></span>
                   <span>TELEGRAM BOT</span> 
                  </button>
				  </div>
			</div>
			<div>
				<Image src={bot} alt="TypeAI" style={{width: '30vw', maxWidth: '30rem', minWidth: '20rem'}} />
			</div>
		</div>
		</>
	);
}
