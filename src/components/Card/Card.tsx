import type { ReactNode } from 'react'
import styles from './Card.module.scss'

type CardProps = {
    icon: ReactNode,
    title: string,
    body: string,
}

const Card = ({ icon, title, body }: CardProps) => {
    return (
        <div className={styles.stepCard}>
            <header className={styles.stepCardHeader}>
                <span className={styles.icon}>{icon}</span>
                <h5 className={styles.cardTitle}>{title}</h5>
            </header>
            <p className={styles.cardBody}>{body}</p>
        </div>
    )
}

export default Card