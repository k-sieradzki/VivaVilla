import React from 'react';
import images from '../../constants/images';

import styles from './Customers.module.scss'


const Customers = () => {
	return (
		<section className={styles.customers}>
			<div className={styles.container}>
				<div className={styles.clientsBox}>
					<div className={styles.client}>
						<div className={styles.box}>
							<img src={images.real1} alt='brand name' />
						</div>
					</div>
					<div className={styles.client}>
						<div className={styles.box}>
							<img src={images.real2} alt='brand name' />
						</div>
					</div>
					<div className={styles.client}>
						<div className={styles.box}>
							<img src={images.real3} alt='brand name' />
						</div>
					</div>
					<div className={styles.client}>
						<div className={styles.box}>
							<img src={images.real4} alt='brand name' />
						</div>
					</div>
					<div className={styles.client}>
						<div className={styles.box}>
							<img src={images.real5} alt='brand name' />
						</div>
					</div>
					<div className={styles.client}>
						<div className={styles.box}>
							<img src={images.real6} alt='brand name' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Customers;
