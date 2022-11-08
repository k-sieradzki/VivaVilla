import React from 'react';
import { BigBtn } from '../../components';

import styles from './Startnow.module.scss'



const Startnow = () => {
	return (
		<section className={styles.startnow}>
			<div className={styles.container}>
				<div className={styles.textContent}>
					<h2>Get Incredible Interior Design Right Now!</h2>
					<p>
						Lorem ipsum dolor sit amet messa. consectetuer adipiscing elit.
						Aenean commodo ligula eget dolor.
					</p>
					<BigBtn newColor={'colorWhite'} title={'start my project'} />
				</div>
			</div>
		</section>
	);
};

export default Startnow;
