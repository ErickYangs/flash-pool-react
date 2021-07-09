import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import flashPoolIcon from '../../assets/images/flashpool.svg'
import { PoolOverview } from './PoolOverview'

export const HomePage: React.FC = () => {
  return (
    <div className={`g-container ${styles.my_pool}`}>
      <div>
        <div className={styles.title__wrapper}>
          <div className={styles.title}>
            <img src={flashPoolIcon} alt="" />
            <span>Ethereum</span>
          </div>
        </div>
      </div>
      <PoolOverview
        TotalBorrow={'0'}
        TotalLockedWingDollar={'0'}
        TotalSupply={'0'}
        TotalWingInsuranceDollar={'0'}
      />
    </div>
  )
}
