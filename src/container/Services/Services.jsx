import React from 'react';

import { MdArchitecture, MdBackupTable } from 'react-icons/md';
import { AiOutlineAntDesign, AiOutlineBulb } from 'react-icons/ai';

import './Services.scss';
import { SmallBtn, TextHead } from '../../components';

const Services = () => {
	return (
		<section className='services' id='services'>
			<div className='container'>
				<div className='text-content'>
					<TextHead title={'what can we offer'} desc={'Our Services'} />
				</div>
				<div className='services-box'>
					<div className='item-box'>
						<div className='item'>
							<div className='icon-box'>
								<MdArchitecture />
							</div>
							<h3>Architecture & Interior</h3>
							<p>Aenean commodo nec ligula eget cum sociis dolor.</p>
							<SmallBtn btnTitle={'read more'} />
						</div>
					</div>
					<div className='item-box'>
						<div className='item'>
							<div className='icon-box'>
								<AiOutlineAntDesign />
							</div>
							<h3>Project Planning</h3>
							<p>Aenean commodo nec ligula eget cum sociis dolor.</p>
							<SmallBtn btnTitle={'read more'} />
						</div>
					</div>
					<div className='item-box'>
						<div className='item'>
							<div className='icon-box'>
								<MdBackupTable />
							</div>
							<h3>Product Design</h3>
							<p>Aenean commodo nec ligula eget cum sociis dolor.</p>
							<SmallBtn btnTitle={'read more'} />
						</div>
					</div>
					<div className='item-box'>
						<div className='item'>
							<div className='icon-box'>
								<AiOutlineBulb />
							</div>
							<h3>Custom Solutions</h3>
							<p>Aenean commodo nec ligula eget cum sociis dolor.</p>
							<SmallBtn btnTitle={'read more'} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
