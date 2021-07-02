import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import flashPoolIcon from '../../assets/images/flashpool.svg'
export const HomePage: React.FC = () => {
  return (
    <div className={`g-container ${styles.myPool}`}>
      <div>
        <div className={styles.title__wrapper}>
          <div className={styles.title}>
            <img src={flashPoolIcon} alt="" />
            <span>Ethereum</span>
          </div>
        </div>
      </div>
    </div>
  )
}
