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
                <ul className={styles.navList}>
                    <li><a className={styles.link} href="#">Guide</a></li>
                    <li><a className={styles.link} href="#" aria-current='page'>Attendees</a>
                        <ul className={styles.subList}>
                            <li><a className={styles.subLink} href="#">Attendees</a></li>
                            <li><a className={styles.subLink} href="#">Attendee types</a></li>
                            <li><a className={styles.subLink} href="#">Packages</a></li>
                            <li><a className={styles.subLink} href="#">Reg codes</a></li>
                            <li><a className={styles.subLink} href="#">Discounts</a></li>
                        </ul>
                    </li>
                    <li><a className={styles.link} href="#">Content</a></li>
                    <li><a className={styles.link} href="#">Exhibitors</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar