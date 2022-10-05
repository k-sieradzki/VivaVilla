import React from 'react';


import { TextHead } from '../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import {CgArrowLongLeft, CgArrowLongRight} from 'react-icons/cg'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Team.scss';

import { Pagination, Navigation } from 'swiper';
import images from '../../constants/images';

const Team = () => {
	return (
		<section className='team' id='team'>
			<div className='container'>
				<div className='text-content'>
					<TextHead title={'professionals'} desc={'Our Team'} />
				</div>

				<button className='team-prev'><CgArrowLongLeft/></button>
				<button className='team-next'><CgArrowLongRight/></button>

				<div className='team-slider-box'>
					<>
						<Swiper
							loop={true}
							slidesPerView={2}
							spaceBetween={30}
							navigation={{
								prevEl: '.team-prev',
								nextEl: '.team-next',
							}}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination, Navigation]}
							className='mySwiper team-swiper'
							breakpoints={{
								992: {
									slidesPerView: 3,
								},
								1200: {
									slidesPerView: 4,
								},
							}}
						>
							<SwiperSlide className='swiper-person'>
								<img src={images.team1} alt='' />
								<div className="swiper-over">
									<div className="links">
										<a href="#0"><FaFacebookF/></a>
										<a href="#0"><FaTwitter/></a>
										<a href="#0"><FaInstagram/></a>
										<a href="#0"><FaLinkedinIn/></a>
									</div>
									<div className="name">
										<p>interior design</p>
										<h3>Jenny Willson</h3>
									</div>
								</div>
							</SwiperSlide >
							<SwiperSlide className='swiper-person'>
								<img src={images.team2} alt='' />
								<div className="swiper-over">
									<div className="links">
										<a href="#0"><FaFacebookF/></a>
										<a href="#0"><FaTwitter/></a>
										<a href="#0"><FaInstagram/></a>
										<a href="#0"><FaLinkedinIn/></a>
									</div>
									<div className="name">
										<p>interior design</p>
										<h3>Max Willson</h3>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className='swiper-person'>
								<img src={images.team3} alt='' />
								<div className="swiper-over">
									<div className="links">
										<a href="#0"><FaFacebookF/></a>
										<a href="#0"><FaTwitter/></a>
										<a href="#0"><FaInstagram/></a>
										<a href="#0"><FaLinkedinIn/></a>
									</div>
									<div className="name">
										<p>interior design</p>
										<h3>Alice Willson</h3>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className='swiper-person'>
								<img src={images.team4} alt='' />
								<div className="swiper-over">
									<div className="links">
										<a href="#0"><FaFacebookF/></a>
										<a href="#0"><FaTwitter/></a>
										<a href="#0"><FaInstagram/></a>
										<a href="#0"><FaLinkedinIn/></a>
									</div>
									<div className="name">
										<p>interior design</p>
										<h3>John Willson</h3>
									</div>
								</div>
							</SwiperSlide>

						</Swiper>
					</>
				</div>
			</div>
		</section>
	);
};

export default Team;
