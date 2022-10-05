import React from 'react';
import { TextHead, BigBtn } from '../../components';
import './About.scss';

import images from '../../constants/images';

const Story = () => {
	return (
		<section className='about' id='about'>
			<div className='container'>
				<div className='text-content'>
					<TextHead
						title={'Our Story'}
						desc={'Welcome To Hellix Architecture & Interior'}
					/>
					<p className='about-desc'>
						The basic philosophy of our studio is to create individual,
						aesthetically stunning solutions for our customers by lightning-fast
						development of projects employing unique styles and architecture.
						Even if you don’t have a ready sketch of what you want – we will
						help you to get the result you dreamed of.
					</p>
					<BigBtn title={'Discover More'} />
				</div>
				<div className='images'>
					<div className='main-img'>
						<img src={images.about1} alt='house1' />
						<div className='small-img'>
							<img src={images.about2} alt='house2' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Story;
