import { FC } from 'react'
import styles from './index.module.scss'
import { getDollarLabel } from '../../../utils/format'

type PropTypes = {
  TotalSupply: string
  TotalBorrow: string
  TotalWingInsuranceDollar: string
  TotalLockedWingDollar: string
}

export const PoolOverview: FC<PropTypes> = ({
  TotalBorrow,
  TotalSupply,
  TotalLockedWingDollar,
  TotalWingInsuranceDollar,
}) => {
  return (
    <div className={`g-card ${styles.pool_overview}`}>
      <div className="g-sub-title g-font-bold">Pool Overview</div>
      <div className={styles.list}>
        <div>
          <div className={styles.label}>Total Supply</div>
          <div className={`${styles.value} g-font-num-mid`}>
            {getDollarLabel(TotalSupply)}
          </div>
        </div>
        <div>
          <div className={styles.label}>Total Borrow</div>
          <div className={`${styles.value} g-font-num-mid`}>
            {getDollarLabel(TotalBorrow)}
          </div>
        </div>
        <div>
          <div className={styles.label}>Total Insure</div>
          <div className={`${styles.value} g-font-num-mid`}>
            {getDollarLabel(TotalLockedWingDollar)}
          </div>
        </div>
        <div>
          <div className={styles.label}>Total WING Locked</div>
          <div className={`${styles.value} g-font-num-mid`}>
            {getDollarLabel(TotalWingInsuranceDollar)}
          </div>
        </div>
      </div>
    </div>
  )
}
