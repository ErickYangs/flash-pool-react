import { FC, useState } from 'react'
import styles from './index.module.scss'
import { openPage } from '../../../utils/tool'

type ListType = {
  text: string
  url: string
}

type PropType = {
  title: string
  url: string
  list?: Array<ListType>
}

export const NavItem: FC<PropType> = ({ title, url, list }) => {
  const [isShowNavList, setIsShowNavList] = useState<boolean>(false)

  function renderItem(list: Array<ListType>) {
    return (
      <div className={styles.drop_list}>
        <div>
          {list.map((item) => (
            <div
              key={item.text}
              onClick={() => {
                openPage(item.url)
              }}
              className={styles.user_set}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      className={styles.drop_down}
      onMouseEnter={() => setIsShowNavList(true)}
      onMouseLeave={() => setIsShowNavList(false)}
    >
      <div className={styles.main_title}>
        <div
          onClick={() => {
            openPage(url)
          }}
          className={styles.names}
        >
          {title}
        </div>
      </div>
      {isShowNavList && list && renderItem(list)}
    </div>
  )
}
