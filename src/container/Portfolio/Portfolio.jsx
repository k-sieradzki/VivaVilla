import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Portfolio.scss';

import { TextHead } from '../../components';
import images from '../../constants/images';
import { Pagination, Navigation } from 'swiper';

export default function App() {
	return (
		<section className='portfolio' id='projects'>
			<div className='container'>
				<div className='text-content'>
					<TextHead title={'projects'} desc={'Featured Works'} />
					<div className='slider-controls'>
						<button className='prev'>Prev</button>
						<button className='next'>Next</button>
					</div>
				</div>
				<>
					<Swiper
						speed={500}
						slidesPerView={'auto'}
						loop={true}
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						navigation={{
							prevEl: '.prev',
							nextEl: '.next',
						}}
						modules={[Pagination, Navigation]}
						className='mySwiper portfolio-slider'
					>
						<SwiperSlide>
							<img src={images.wide1} alt='work1' />
							<div className='slider-btext'>
								<p className='head-title'>Buildings</p>
								<h3>Pensacola Cityblock</h3>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<img src={images.wide2} alt='work2' />
							<div className='slider-btext'>
								<p className='head-title'>Buildings</p>
								<h3>Pensacola Cityblock</h3>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<img src={images.wide3} alt='work3' />
							<div className='slider-btext'>
								<p className='head-title'>Buildings</p>
								<h3>Pensacola Cityblock</h3>
							</div>
						</SwiperSlide>
					</Swiper>
				</>
			</div>
		</section>
	);
}
