import React from 'react';

import { TextHead } from '../../components';

import styles from './Skills.module.scss'

const SkillsTwo = () => {
	return (
		<section className={styles.skills} id='skills'>
			<div className={styles.container}>
				<TextHead title={'our skills'} desc={'The Core Company Values'} />
				<div className={styles.skillsBox}>
					<div className={styles.skill}>
						<div className={styles.circle}>
							<div
								className={styles.circleProgress}
								style={{
									background: `conic-gradient(#d7926b 342deg, black 0deg)`,
								}}
							>
								<span>95%</span>
							</div>
							<div className={styles.textBox}>
								<h4>Illustration</h4>
								<p>Lorem ipsum dolor amet sociis dolor.</p>
							</div>
						</div>
					</div>
					<div className={styles.skill}>
						<div className={styles.circle}>
							<div
								className={styles.circleProgress}
								style={{
									background: `conic-gradient(#d7926b 180deg, black 0deg)`,
								}}
							>
								<span>50%</span>
							</div>
							<div className={styles.textBox}>
								<h4>Interior Design</h4>
								<p>Lorem ipsum dolor amet sociis dolor.</p>
							</div>
						</div>
					</div>
					<div className={styles.skill}>
						<div className={styles.circle}>
							<div
								className={styles.circleProgress}
								style={{
									background: `conic-gradient(#d7926b 360deg, black 0deg)`,
								}}
							>
								<span>100%</span>
							</div>
							<div className={styles.textBox}>
								<h4>Architecture</h4>
								<p>Lorem ipsum dolor amet sociis dolor.</p>
							</div>
						</div>
					</div>
					<div className={styles.skill}>
						<div className={styles.circle}>
							<div
								className={styles.circleProgress}
								style={{
									background: `conic-gradient(#d7926b 270deg, black 0deg)`,
								}}
							>
								<span>75%</span>
							</div>
							<div className={styles.textBox}>
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
