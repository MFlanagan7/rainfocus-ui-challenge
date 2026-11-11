import styles from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <p className={styles.navLabel}>RainFocus Summit</p>
            <div>Search</div>
            <nav aria-label='Event'>
                <ul>
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar