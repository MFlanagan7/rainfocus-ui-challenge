import styles from './Rail.module.scss'
import rfLogo from '../../assets/graphics/rf-logo.svg'
import RailEvent from '../RailEvent/RailEvent'
import type { EventInfo } from '../../types/types'

type RailProps = {
    events: EventInfo[],
    activeId: string
}

const Rail = ({ events, activeId }: RailProps) => {
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
            <div className={styles.avatar}>FL</div>
        </div>
    )
}

export default Rail