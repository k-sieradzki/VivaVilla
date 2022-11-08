import React from 'react';


import { TextHead } from '../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import {CgArrowLongLeft, CgArrowLongRight} from 'react-icons/cg'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './Team.css';
import styles from './Team.module.scss'
import { Pagination, Navigation } from 'swiper';
import images from '../../constants/images';

const Team = () => {
	return (
		<section className={styles.team} id='team'>
			<div className={styles.container}>
				<div className={styles.textContent}>
					<TextHead title={'professionals'} desc={'Our Team'} />
				</div>

				<button className={`teamPrev ${styles.teamPrev}`}><CgArrowLongLeft/></button>
				<button className={`teamNext ${styles.teamNext}`}><CgArrowLongRight/></button>

				<div className={styles.teamSliderBox}>
					<>
						<Swiper
							loop={true}
							slidesPerView={2}
							spaceBetween={30}
							navigation={{
								prevEl: '.teamPrev',
								nextEl: '.teamNext',
							}}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination, Navigation]}
							className={`${styles.mySwiper} ${styles.teamSwiper}`}
							breakpoints={{
								992: {
									slidesPerView: 3,
								},
								1200: {
									slidesPerView: 4,
								},
							}}
						>
							<SwiperSlide className={styles.swiperPerson}>
								<img src={images.team1} alt='' />
								<div className={styles.swiperOver}>
									<div className={styles.links}>
										<a href="#0"><FaFacebookF/></a>
										<a href="#0"><FaTwitter/></a>
										<a href="#0"><FaInstagram/></a>
										<a href="#0"><FaLinkedinIn/></a>
									</div>
									<div className={styles.name}>
										<p>interior design</p>
										<h3>Jenny Willson</h3>
									</div>
								</div>
							</SwiperSlide >
							<SwiperSlide className={styles.swiperPerson}>
								<img src={images.team2} alt='' />
								<div className={styles.swiperOver}>
									<div className={styles.links}>
										<a href="#0"><FaFacebookF/></a>
										<a href="#0"><FaTwitter/></a>
										<a href="#0"><FaInstagram/></a>
										<a href="#0"><FaLinkedinIn/></a>
									</div>
									<div className={styles.name}>
										<p>interior design</p>
										<h3>Max Willson</h3>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className={styles.swiperPerson}>
								<img src={images.team3} alt='' />
								<div className={styles.swiperOver}>
									<div className={styles.links}>
										<a href="#0"><FaFacebookF/></a>
										<a href="#0"><FaTwitter/></a>
										<a href="#0"><FaInstagram/></a>
										<a href="#0"><FaLinkedinIn/></a>
									</div>
									<div className={styles.name}>
										<p>interior design</p>
										<h3>Alice Willson</h3>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className={styles.swiperPerson}>
								<img src={images.team4} alt='' />
								<div className={styles.swiperOver}>
									<div className={styles.links}>
										<a href="#0"><FaFacebookF/></a>
										<a href="#0"><FaTwitter/></a>
										<a href="#0"><FaInstagram/></a>
										<a href="#0"><FaLinkedinIn/></a>
									</div>
									<div className={styles.name}>
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
