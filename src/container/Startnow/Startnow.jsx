import React from 'react';

import './Startnow.scss';

import { BigBtn } from '../../components';

const Startnow = () => {
	return (
		<section className='startnow'>
			<div className='container'>
				<div className='text-content'>
					<h2>Get Incredible Interior Design Right Now!</h2>
					<p>
						Lorem ipsum dolor sit amet messa. consectetuer adipiscing elit.
						Aenean commodo ligula eget dolor.
					</p>
					<BigBtn title={'start my project'} />
				</div>
			</div>
		</section>
	);
};

export default Startnow;
