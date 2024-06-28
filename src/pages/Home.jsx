import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import {
	Autoplay,
	EffectCreative,
	Navigation,
	Pagination,
} from "swiper/modules";

// {Rouge} bg-[#C1272D]
// {Vert} bg-[#007A33]
// {OR} bg-[#FFD700]
// {OR} bg-[#FFD700]
// {BLUE MAJORELLE} bg-[#4A90E2]
// {BLANC CASSE} bg-[#F8F8F8]
// {NOIR} bg-[#333333]
// {GRIS CLAIR} bg-[#CCCCCC]
export default function Home() {
	return (
		<div className='lg:pt-[15vh] pt-[21vw] bg-white '>
			<title>Home</title>
			<div className=' w-[100vw] h-[100vh] element-center   element-center'>
				<div className='w-[28%] h-full px-4 py-5 '>
					<div className='matches w-full h-full bg-white rounded-2xl shadow-2xl'>
						<div className='logofont w-full h-fit bg-[#00A448] rounded-t-2xl text-center py-3 font-semibold text-3xl tracking-wider'>
							MatchWeek
						</div>
					</div>
				</div>
				<div className='w-[72%] h-full'>
					<div className='h-[60%] mt-[3%] mx-[1%] '>
						<Swiper
							speed={1000}
							loop={true}
							effect='coverflow'
							spaceBetween={20}
							centeredSlides={true}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
							navigation={true}
							modules={[EffectCreative, Autoplay, Pagination, Navigation]}
							className='mySwiper w-full h-full bg-white text-center rounded-xl'
						>
							<SwiperSlide>
								<img src='/src/assets/images/w1.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/src/assets/images/w2.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/src/assets/images/w3.jpg' alt='' />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
}
