import React from 'react';
import './SmallBtn.scss'

const SmallBtn = ({btnTitle}) => {
	return (
		<div className='btn-small'>
			<a href='#0'> {btnTitle}</a>
		</div>
	);
};

export default SmallBtn;
