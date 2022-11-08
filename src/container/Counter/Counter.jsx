import React from 'react';

import styles from './Counter.module.scss'
const Counter = () => {
	return (
		<section className={styles.counter}>
			<div className={styles.container}>
				<div className={styles.counterBox}>
					<div className={styles.counterBg}>532</div>
					<div className={styles.counterNum}>
						<div className={styles.number}>532</div>
						<h5>
							Happy <br /> Clients
						</h5>
					</div>
				</div>
				<div className={styles.counterBox}>
					<div className={styles.counterBg}>48</div>
					<div className={styles.counterNum}>
						<div className={styles.number}>48</div>
						<h5>
							Years of <br /> Experience
						</h5>
					</div>
				</div>
				<div className={styles.counterBox}>
					<div className={styles.counterBg}>76</div>
					<div className={styles.counterNum}>
						<div className={styles.number}>76</div>
						<h5>
							Awards <br /> Winning
						</h5>
					</div>
				</div>
				<div className={styles.counterBox}>
					<div className={styles.counterBg}>19</div>
					<div className={styles.counterNum}>
						<div className={styles.number}>19</div>
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
