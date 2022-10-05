import React from 'react';
import './Counter.scss';

const Counter = () => {
	return (
		<section className='counter'>
			<div className='container'>
				<div className='counter-box'>
					<div className='counter-bg'>532</div>
					<div className='counter-num'>
						<div className='number'>532</div>
						<h5>
							Happy <br /> Clients
						</h5>
					</div>
				</div>
				<div className='counter-box'>
					<div className='counter-bg'>48</div>
					<div className='counter-num'>
						<div className='number'>48</div>
						<h5>
							Years of <br /> Experience
						</h5>
					</div>
				</div>
				<div className='counter-box'>
					<div className='counter-bg'>76</div>
					<div className='counter-num'>
						<div className='number'>76</div>
						<h5>
							Awards <br /> Winning
						</h5>
					</div>
				</div>
				<div className='counter-box'>
					<div className='counter-bg'>19</div>
					<div className='counter-num'>
						<div className='number'>19</div>
						<h5>
							Office <br /> Worldwide
						</h5>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Counter;
