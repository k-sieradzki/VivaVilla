import React from 'react'

import './TextHead.scss'


const TextHead = ({title, desc}) => {
  return (
    <div className='text-head'>
        <p className='head-title'>{title}</p>
        <h2>{desc}</h2>
    </div>
  )
}

export default TextHead