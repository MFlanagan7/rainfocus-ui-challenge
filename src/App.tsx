import styles from './App.module.scss'
import Rail from "./components/Rail/Rail";
import Sidebar from "./components/Sidebar/Sidebar";
import { events } from './data/events';
import attendee from './assets/graphics/attendee.svg'

const current = events[0]

function App() {
  return (
    <div className={styles.app}>
      <Rail events={events} activeId={current.id} />
      <Sidebar event={current} activeNavId='attendees' />
      <main className={styles.main}>
        <header className={styles.header}>
          <img className={styles.logo} src={current.logoUrl} alt='' />
          <div className={styles.headerDetails}>
            <h1 className={styles.eventHeadline}>{current.name}</h1>
            <p>{current.date}</p>
            <p>{current.city}, {current.state}</p>
          </div>
          <button className={styles.button} type='button'>Edit event</button>
        </header>
        <section className={styles.section1}>
          <h2 className={styles.pageHeadline}>Event setup guide</h2>
          <p>See the available list of modules below. We suggest that you start with the attendee module.</p>
        </section>
        <section className={styles.accordion}>
          <header className={styles.accordionHeader}>
            <img className={styles.attendeeIcon} src={attendee} alt='' />
            <h3>Attendee</h3>
          </header>
          <section className={styles.step1Section}>
            <h4 className={styles.step1Header}>Step 1: <span className={styles.headerText}>Base settings.</span></h4>
            <div className={styles.step1Body}>
              <div>
                <h5 className={styles.cardTitle}>General</h5>
                <p className={styles.cardBody}>Define Attendee types & attributes</p>
              </div>
              <div>
                <h5 className={styles.cardTitle}>Title</h5>
                <p className={styles.cardBody}>Description that explains the value goes here. Description that explains the value goes here. </p>
              </div>
              <div>
                <h5 className={styles.cardTitle}>Title</h5>
                <p className={styles.cardBody}>Description that explains the value goes here. Description that explains the value goes here. </p>
              </div>
            </div>
            
          </section>
          <section className={styles.step2}>
            
          </section>
          <section className={styles.step3}>
            
          </section>
        </section>
      </main>
    </div>
  )
}

export default App
