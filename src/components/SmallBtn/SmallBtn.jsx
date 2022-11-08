import React from 'react';
import styles from './SmallBtn.module.scss'

const SmallBtn = ({btnTitle, newColor}) => {
	return (
		<div className={styles.btnSmall}>
			<a className={`${styles.btnInSmall} ${styles[newColor]}`} href='#0'> {btnTitle}</a>
		</div>
	);
};

export default SmallBtn;
