import React, {ReactNode} from 'react'
import styles from './index.module.scss'

export enum ButtonType {
  Go = 'go',
  Span = 'span',
  Primary = 'primary',
  Submit = 'submit',
  Link = 'link',
  Insure = 'insure',
}

type PropType = {
  label?: string
  disable?: boolean
  type?: ButtonType
  block?: boolean
  onClick?: () => void
  className?: string
  children?: ReactNode
}
export const BaseButton: React.FC<PropType> = ({
  label,
  onClick,
  disable = false,
  type = ButtonType.Primary,
  className,
  block = false,
  children,
}) => {
  const eventHandler = () => {
    if (onClick && !disable) {
      onClick()
    }
  }

  return (
    <div
      className={`${styles.button} ${block ? styles.block : ''} ${styles[type]}`}
      onClick={eventHandler}
      role="button"
      aria-disabled={disable}
      aria-label={label}
    >
      {children}
      {label ? <span className={styles.button__label}>{label}</span> : ''}
      {type === ButtonType.Go ? (
        <i className={`iconfont iconArrow_Right ${styles.icon_go}`} />
      ) : (
        ''
      )}
    </div>
  )
}
