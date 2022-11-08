import React from 'react';

import { MdArchitecture, MdBackupTable } from 'react-icons/md';
import { AiOutlineAntDesign, AiOutlineBulb } from 'react-icons/ai';
import { SmallBtn, TextHead } from '../../components';

import styles from './Services.module.scss'

const Services = () => {
	return (
		<section className={styles.services} id='services'>
			<div className={styles.container}>
				<div className={styles.textContent}>
					<TextHead title={'what can we offer'} desc={'Our Services'} />
				</div>
				<div className={styles.servicesBox}>
					<div className={styles.itemBox}>
						<div className={styles.item}>
							<div className={styles.iconBox}>
								<MdArchitecture />
							</div>
							<h3>Architecture & Interior</h3>
							<p>Aenean commodo nec ligula eget cum sociis dolor.</p>
							<SmallBtn newColor={'btnInSalmon'} btnTitle={'read more'} />
						</div>
					</div>
					<div className={styles.itemBox}>
						<div className={styles.item}>
							<div className={styles.iconBox}>
								<AiOutlineAntDesign />
							</div>
							<h3>Project Planning</h3>
							<p>Aenean commodo nec ligula eget cum sociis dolor.</p>
							<SmallBtn newColor={'btnInSalmon'} btnTitle={'read more'} />
						</div>
					</div>
					<div className={styles.itemBox}>
						<div className={styles.item}>
							<div className={styles.iconBox}>
								<MdBackupTable />
							</div>
							<h3>Product Design</h3>
							<p>Aenean commodo nec ligula eget cum sociis dolor.</p>
							<SmallBtn newColor={'btnInSalmon'}  btnTitle={'read more'} />
						</div>
					</div>
					<div className={styles.itemBox}>
						<div className={styles.item}>
							<div className={styles.iconBox}>
								<AiOutlineBulb />
							</div>
							<h3>Custom Solutions</h3>
							<p>Aenean commodo nec ligula eget cum sociis dolor.</p>
							<SmallBtn newColor={'btnInSalmon'} btnTitle={'read more'} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
