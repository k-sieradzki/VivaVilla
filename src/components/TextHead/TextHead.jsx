import React from 'react'
import styles from './TextHead.module.scss'

const TextHead = ({title, desc}) => {
  return (
    <div className={styles.textHead}>
        <p className={styles.headTitle}>{title}</p>
        <h2>{desc}</h2>
    </div>
  )
}

export default TextHead