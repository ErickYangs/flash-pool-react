import styles from './index.module.scss'

export const BaseLoading = () => {
    return <div className={styles.loading}>
        <svg className={styles.circular} viewBox="0 0 50 50">
            <circle
                cx="25px"
                cy="25px"
                r="12"
                fill="none"
                stroke-width="3"
                stroke-linecap="round"
            />
        </svg>
    </div>
}