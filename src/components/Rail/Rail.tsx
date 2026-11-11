import styles from './Rail.module.scss'
import rfLogo from '../../assets/graphics/rf-logo.svg'
import eventLogo from '../../assets/graphics/mountain-event-logo.png'

const Rail = () => {
    return (
        <div className={styles.rail}>
            <div className={styles.top}>
                <img className={styles.rfLogo} src={rfLogo} alt="RainFocus logo" />
                <div className={styles.events}>
                    <img src={eventLogo} alt="Mountain Event Summit" />
                </div>
            </div>
            <div className={styles.avatar}>FL</div>
        </div>
    )
}

export default Rail