import styles from './RailEvent.module.scss'
import type { EventInfo } from "../../types/types"

type RailEventProps = {
    event: EventInfo,
    isActive: boolean
}

const RailEvent = ({ event, isActive }: RailEventProps) => {
  return (
    <button type='button' className={styles.button} aria-current={isActive ? 'true' : undefined}>
        <img src={event.logoUrl} alt={event.name} />
    </button>
  )
}

export default RailEvent