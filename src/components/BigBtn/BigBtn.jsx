import React from 'react'

import styles from './BigBtn.module.scss'

const BigBtn = ({title, newColor}) => {
  return (
    <button className={`${styles.bigBtn} ${styles[newColor]}`}>{title}</button>
  )
}

export default BigBtn