import React from 'react';

import images from '../../constants/images';
import './Customers.scss';

const Customers = () => {
	return (
		<section className='customers'>
			<div className='container'>
				<div className='clients-box'>
					<div className='client'>
						<div className='box'>
							<img src={images.real1} alt='brand name' />
						</div>
					</div>
					<div className='client'>
						<div className='box'>
							<img src={images.real2} alt='brand name' />
						</div>
					</div>
					<div className='client'>
						<div className='box'>
							<img src={images.real3} alt='brand name' />
						</div>
					</div>
					<div className='client'>
						<div className='box'>
							<img src={images.real4} alt='brand name' />
						</div>
					</div>
					<div className='client'>
						<div className='box'>
							<img src={images.real5} alt='brand name' />
						</div>
					</div>
					<div className='client'>
						<div className='box'>
							<img src={images.real6} alt='brand name' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Customers;
