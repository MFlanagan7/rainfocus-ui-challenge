import type { EventInfo, User } from '../../types/types'
import styles from './TopBar.module.scss'
import rfLogo from '../../assets/graphics/rf-logo.svg'
import MenuIcon from '../icons/MenuIcon'
import Avatar from '../Avatar/Avatar'
import type { RefObject } from 'react'

type TopBarProps = {
    event: EventInfo,
    user: User,
    isMenuOpen: boolean,
    onToggleMenu: () => void,
    menuButtonRef: RefObject<HTMLButtonElement | null>,
}

const TopBar = ({ event, user, isMenuOpen, onToggleMenu, menuButtonRef }: TopBarProps) => {
    return (
        <header className={styles.header}>
            <button className={styles.button} type='button' aria-label='Open menu' aria-expanded={isMenuOpen} aria-controls='sidebar' onClick={onToggleMenu} ref={menuButtonRef}>
                <MenuIcon />
            </button>
            <div className={styles.mobileDetails}>
                <img className={styles.rfLogo} src={rfLogo} alt="RainFocus logo" />
                <p className={styles.label}>{event.name}</p>
                <Avatar initials={user.initials} className={styles.avatarSlot} name={user.name} />
            </div>
        </header>
    )
}

export default TopBar