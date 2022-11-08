import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { TextHead } from '../../components';
import images from '../../constants/images';
import { Pagination, Navigation } from 'swiper';
import styles from './Portfolio.module.scss'


export default function App() {
	return (
		<section className={styles.portfolio} id='projects'>
			<div className={styles.container}>
				<div className={styles.textContent}>
					<TextHead title={'projects'} desc={'Featured Works'} />
					<div className={styles.sliderControls}>
						<button className={`prev ${styles.prev}`}>Prev</button>
						<button className={`next ${styles.next}`}>Next</button>
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
						className={`${styles.swiper} ${styles.portfolioSlider}`}
					>
						<SwiperSlide className={styles.swiperSlide }>
							<img src={images.wide1} alt='work1' />
							<div className={styles.sliderBtext}>
								<p className={styles.headTitle}>Buildings</p>
								<h3>Pensacola Cityblock</h3>
							</div>
						</SwiperSlide>

						<SwiperSlide className={styles.swiperSlide }>
							<img src={images.wide2} alt='work2' />
							<div className={styles.sliderBtext}>
								<p className={styles.headTitle}>Buildings</p>
								<h3>Pensacola Cityblock</h3>
							</div>
						</SwiperSlide>

						<SwiperSlide className={styles.swiperSlide }>
							<img src={images.wide3} alt='work3' />
							<div className={styles.sliderBtext}>
								<p className={styles.headTitle}>Buildings</p>
								<h3>Pensacola Cityblock</h3>
							</div>
						</SwiperSlide>
					</Swiper>
				</>
			</div>
		</section>
	);
}
