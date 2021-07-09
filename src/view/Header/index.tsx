import { FC } from 'react'
import homeLogo from '../../assets/images/logo.svg'
import { NavArea } from '../../components/Nav'
import styles from './index.module.scss'

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <a href="https://wing.finance/">
        {' '}
        <img className={styles.header__logo} src={homeLogo} alt="wing" />
      </a>
      <div className={styles.header__nav}>
        <NavArea />
      </div>
    </div>
  )
}
