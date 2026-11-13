import type { EventInfo } from '../../types/types'
import styles from './Sidebar.module.scss'
import { navData } from '../../data/nav-data'
import CloseIcon from '../icons/CloseIcon'
import type { RefObject } from 'react'

type SidebarProps = {
    event: EventInfo,
    activeNavId: string,
    isOpen: boolean,
    onClose: () => void,
    closeButtonRef: RefObject<HTMLButtonElement | null>,
}

const Sidebar = ({ event, activeNavId, isOpen, onClose, closeButtonRef }: SidebarProps) => {
    return (
        <div id='sidebar' className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.sidebarHeader}>
                <p className={styles.navLabel}>{event.name}</p>
                <button className={styles.closeButton} type='button' aria-label='Close menu' onClick={onClose} ref={closeButtonRef}>
                    <CloseIcon />
                </button>
            </div>
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
                {navData.map( (nav) => (
                    <li key={nav.id}>
                        <a className={styles.link} href={nav.href} aria-current={nav.id === activeNavId ? 'page' : undefined}>{nav.label}</a>
                        {nav.children && (
                            <ul className={styles.subList}>
                                {nav.children.map( (child) => (
                                    <li key={child.id}>
                                        <a className={styles.subLink} href={child.href}>{child.label}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar