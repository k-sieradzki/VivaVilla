import React from 'react';
import images from '../../constants/images';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import { SmallBtn } from '../../components';
import styles from './Header.module.scss'


const Header = () => {
	return (
		<header id='home'>
			<Swiper
			speed={1000}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className={styles.mySwiper}
			>
					<SwiperSlide>
						<div className={styles.sliderImage}>
							<img src={images.slider1} alt='house1' />
							<div className={styles.sliderOverlay}></div>
						</div>
						<div className={styles.sliderTextbox}>
							<div className={styles.sliderText}>
								<h1>The House of The<br/><span>Narraive Art</span>
								</h1>
							</div>
							<SmallBtn btnTitle={'read more'}/>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className={styles.sliderImage}>
							<img src={images.slider2} alt='house2' />
							<div className={styles.sliderOverlay}></div>
						</div>
						<div className={styles.sliderTextbox}>
							<div className={styles.sliderText}>
							<h1>Catch Seafood<br/><span>Restaurant</span></h1>
							</div>
							<SmallBtn btnTitle={'read more'}/>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className={styles.sliderImage}>
							<img src={images.slider3} alt='house3' />
							<div className={styles.sliderOverlay}></div>
						</div>
						<div className={styles.sliderTextbox}>
							<div className={styles.sliderText}>
							<h1>Re Future<br/><span>Clinic</span></h1>
							</div>
							<SmallBtn btnTitle={'read more'}/>
						</div>
					</SwiperSlide>
			</Swiper>
			
			<div className={styles.socials}>
							<ul>
								<li><a href="#0">.Facebook</a></li>
								<li><a href="#0">.Instagram</a></li>
								<li><a href="#0">.Twitter</a></li>
								<li><a href="#0">.Linkedin</a></li>
							</ul>
					</div>
		</header>
	);
};

export default Header;



