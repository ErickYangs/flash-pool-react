import {FC, useEffect, useRef, useState} from 'react'
import styles from './index.module.scss'

export const NavItem: FC = () => {
  const [isShowNavList, setIsShowNavList] = useState<boolean>(false)

  useEffect(() => {
    console.log('styles', styles)
  }, [])

  return (
    <div
      className={styles.drop_down}
      onMouseEnter={() => setIsShowNavList(true)}
      onMouseLeave={() => setIsShowNavList(false)}
    >
      <div className={styles.main_title}>
        <div className={styles.names}>title</div>
      </div>
      {isShowNavList ? (
          <div className={styles.drop_list}>
            <div>
              <div className={styles.user_set}>111</div>
              <div className={styles.user_set}>111</div>
              <div className={styles.user_set}>111</div>
              <div className={styles.user_set}>111</div>
              <div className={styles.user_set}>111</div>
            </div>
          </div>
      ) : (
        ''
      )}
    </div>
  )
}
