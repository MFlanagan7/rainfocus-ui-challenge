import type { EventInfo } from '../../types/types'
import styles from './Sidebar.module.scss'

type SidebarProps = {
    event: EventInfo
}

const Sidebar = ({ event }: SidebarProps) => {
    return (
        <div className={styles.sidebar}>
            <p className={styles.navLabel}>{event.name}</p>
            <div className={styles.subheader}>
                {event.city},&nbsp;
                {event.stateCode}
                <span aria-hidden='true'>&nbsp;&bull;&nbsp;</span>
                {event.date}
            </div>
            <search className={styles.searchBar}>
                    <input className={styles.searchInput} type='search' placeholder='Search' aria-label='Search' />
            </search>
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