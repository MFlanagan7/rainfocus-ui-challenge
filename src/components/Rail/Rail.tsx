import styles from './Rail.module.scss'
import rfLogo from '../../assets/graphics/rf-logo.svg'
import RailEvent from '../RailEvent/RailEvent'
import type { EventInfo, User } from '../../types/types'
import Avatar from '../Avatar/Avatar'

type RailProps = {
    events: EventInfo[],
    activeId: string
    user: User,
}

const Rail = ({ events, activeId, user }: RailProps) => {
    return (
        <div className={styles.rail}>
            <div className={styles.top}>
                <img className={styles.rfLogo} src={rfLogo} alt="RainFocus logo" />
                {
                    events.map( (event) => 
                        <RailEvent 
                            key={event.id}
                            event={event}
                            isActive={event.id === activeId}
                        />
                    )
                }
            </div>
            <Avatar initials={user.initials} className={styles.avatarSlot} name={user.name} />
        </div>
    )
}

export default Rail