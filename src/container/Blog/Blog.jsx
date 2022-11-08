import React from 'react';

import { TextHead, SmallBtn } from '../../components';
import images from '../../constants/images';
import styles from './Blog.module.scss'


const Blog = () => {
	return (
		<section className={styles.blog} id='blog'>
			<div className={styles.container}>
				<div className={styles.textContent}>
					<TextHead title={'blog'} desc={'Latest News'} />
				</div>

				<div className={styles.newsContainer}>
					<div className={styles.news}>
						<div className={styles.box}>
							<div className={styles.image}>
								<img src={images.blog1} alt='news1' />
								<div className={styles.category}>Interior</div>
							</div>
							<div className={styles.newsDesc}>
								<div className={styles.credits}>
									<a href='#0'>APRIL 06, 2022</a>
									<a href='#0'>Floyd Miles</a>
								</div>
								<h3>Nordic style, interior style for simple life</h3>
								<SmallBtn newColor={'btnInBlack'} btnTitle={'read more'} />
							</div>
						</div>
					</div>
					<div className={styles.news}>
						<div className={styles.box}>
							<div className={styles.image}>
								<img src={images.blog2} alt='news2' />
								<div className={styles.category}>Interior</div>
							</div>
							<div className={styles.newsDesc}>
								<div className={styles.credits}>
									<a href='#0'>APRIL 06, 2022</a>
									<a href='#0'>Floyd Miles</a>
								</div>
								<h3>Nordic style, interior style for simple life</h3>
								<SmallBtn newColor={'btnInBlack'} btnTitle={'read more'} />
							</div>
						</div>
					</div>
					<div className={styles.news}>
						<div className={styles.box}>
							<div className={styles.image}>
								<img src={images.blog3} alt='news3' />
								<div className={styles.category}>Interior</div>
							</div>
							<div className={styles.newsDesc}>
								<div className={styles.credits}>
									<a href='#0'>APRIL 06, 2022</a>
									<a href='#0'>Floyd Miles</a>
								</div>
								<h3>Nordic style, interior style for simple life</h3>
								<SmallBtn newColor={'btnInBlack'} btnTitle={'read more'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;
