import React from 'react';

import { TextHead, SmallBtn } from '../../components';
import images from '../../constants/images';
import './Blog.scss';

const Blog = () => {
	return (
		<section className='blog' id='blog'>
			<div className='container'>
				<div className='text-content'>
					<TextHead title={'blog'} desc={'Latest News'} />
				</div>

				<div className='news-container'>
					<div className='news'>
						<div className='box'>
							<div className='image'>
								<img src={images.blog1} alt='news1' />
								<div className='category'>Interior</div>
							</div>
							<div className='news-desc'>
								<div className='credits'>
									<a href='#0'>APRIL 06, 2022</a>
									<a href='#0'>Floyd Miles</a>
								</div>
								<h3>Nordic style, interior style for simple life</h3>
								<SmallBtn btnTitle={'read more'} />
							</div>
						</div>
					</div>
					<div className='news'>
						<div className='box'>
							<div className='image'>
								<img src={images.blog2} alt='news2' />
								<div className='category'>Interior</div>
							</div>
							<div className='news-desc'>
								<div className='credits'>
									<a href='#0'>APRIL 06, 2022</a>
									<a href='#0'>Floyd Miles</a>
								</div>
								<h3>Nordic style, interior style for simple life</h3>
								<SmallBtn btnTitle={'read more'} />
							</div>
						</div>
					</div>
					<div className='news'>
						<div className='box'>
							<div className='image'>
								<img src={images.blog3} alt='news3' />
								<div className='category'>Interior</div>
							</div>
							<div className='news-desc'>
								<div className='credits'>
									<a href='#0'>APRIL 06, 2022</a>
									<a href='#0'>Floyd Miles</a>
								</div>
								<h3>Nordic style, interior style for simple life</h3>
								<SmallBtn btnTitle={'read more'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;
