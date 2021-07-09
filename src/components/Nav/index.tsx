import { NavItem } from './NavItem'
import { FC } from 'react'
import { devNav } from '../../utils/url'
import styles from './index.module.scss'

export const NavArea: FC = () => {
  return (
    <div className={styles.header__nav}>
      {devNav.map((item) => (
        <NavItem title={item.title} url={item.url} list={item.list} key={item.title}/>
      ))}
    </div>
  )
}
