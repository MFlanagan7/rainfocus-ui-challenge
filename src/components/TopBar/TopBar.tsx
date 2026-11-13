import type { EventInfo, User } from '../../types/types'
import styles from './TopBar.module.scss'
import rfLogo from '../../assets/graphics/rf-logo.svg'
import MenuIcon from '../icons/MenuIcon'
import Avatar from '../Avatar/Avatar'

type TopBarProps = {
    event: EventInfo,
    user: User,
}

const TopBar = ({ event, user }: TopBarProps) => {
    return (
        <header className={styles.header}>
            <button className={styles.button} type='button' aria-label='Open menu'>
                <MenuIcon />
            </button>
            <div className={styles.mobileDetails}>
                <img className={styles.rfLogo} src={rfLogo} alt="RainFocus logo" />
                <p>{event.name}</p>
                <Avatar initials={user.initials} className={styles.avatarSlot} name={user.name} />
            </div>
        </header>
    )
}

export default TopBar