import React from 'react';

import { TextHead } from '../../components';

import './Skills.scss';

const SkillsTwo = () => {
	return (
		<section className='skills' id='skills'>
			<div className='container'>
				<TextHead title={'our skills'} desc={'The Core Company Values'} />
				<div className='skills-box'>
					<div className='skill'>
						<div className='circle'>
							<div
								className='circle-progress'
								style={{
									background: `conic-gradient(#d7926b 342deg, black 0deg)`,
								}}
							>
								<span>95%</span>
							</div>
							<div className='text-box'>
								<h4>Illustration</h4>
								<p>Lorem ipsum dolor amet sociis dolor.</p>
							</div>
						</div>
					</div>
					<div className='skill'>
						<div className='circle'>
							<div
								className='circle-progress'
								style={{
									background: `conic-gradient(#d7926b 180deg, black 0deg)`,
								}}
							>
								<span>50%</span>
							</div>
							<div className='text-box'>
								<h4>Interior Design</h4>
								<p>Lorem ipsum dolor amet sociis dolor.</p>
							</div>
						</div>
					</div>
					<div className='skill'>
						<div className='circle'>
							<div
								className='circle-progress'
								style={{
									background: `conic-gradient(#d7926b 360deg, black 0deg)`,
								}}
							>
								<span>100%</span>
							</div>
							<div className='text-box'>
								<h4>Architecture</h4>
								<p>Lorem ipsum dolor amet sociis dolor.</p>
							</div>
						</div>
					</div>
					<div className='skill'>
						<div className='circle'>
							<div
								className='circle-progress'
								style={{
									background: `conic-gradient(#d7926b 270deg, black 0deg)`,
								}}
							>
								<span>75%</span>
							</div>
							<div className='text-box'>
								<h4>3D Modeling</h4>
								<p>Lorem ipsum dolor amet sociis dolor.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsTwo;
