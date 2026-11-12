import styles from './App.module.scss'
import Rail from "./components/Rail/Rail";
import Sidebar from "./components/Sidebar/Sidebar";
import { events } from './data/events';
import attendee from './assets/graphics/attendee.svg'
import Card from './components/Card/Card';
import AddCircleIcon from './components/icons/AddCircleIcon';
import ArrowIcon from './components/icons/ArrowIcon';
import ComputerIcon from './components/icons/ComputerIcon';

const current = events[0]

const cardData = [
  { id: 1, title: 'Attendee Registration', body: 'Start by creating a general registration workflow' },
  { id: 2, title: 'Attendee Registration', body: 'Start by creating a general registration workflow' },
  { id: 3, title: 'Attendee Registration', body: 'Start by creating a general registration workflow' },
]

function App() {
  return (
    <div className={styles.app}>
      <Rail events={events} activeId={current.id} />
      <Sidebar event={current} activeNavId='attendees' />
      <main className={styles.main}>
        <header className={styles.header}>
          <img className={styles.logo} src={current.logoUrl} alt='' />
          <div>
            <h1 className={styles.eventHeadline}>{current.name}</h1>
            <p>{current.date}</p>
            <p>{current.city}, {current.state}</p>
          </div>
          <button className={styles.button} type='button'>Edit event</button>
        </header>
        <section>
          <h2 className={styles.pageHeadline}>Event setup guide</h2>
          <p>See the available list of modules below. We suggest that you start with the attendee module.</p>
        </section>
        <section className={styles.accordion}>
          <header className={styles.accordionHeader}>
            <img className={styles.attendeeIcon} src={attendee} alt='' />
            <h3>Attendee</h3>
          </header>
          <section className={styles.step}>
            <h4 className={styles.stepHeader}>Step 1: <span className={styles.headerText}>Base settings.</span></h4>
            <div className={styles.step1Body}>
              <div className={styles.step1Card}>
                <h5 className={styles.cardTitle}>General</h5>
                <p className={styles.cardBody}>Define Attendee types & attributes</p>
              </div>
              <div className={styles.step1Card}>
                <h5 className={styles.cardTitle}>Title</h5>
                <p className={styles.cardBody}>Description that explains the value goes here. Description that explains the value goes here. </p>
              </div>
              <div className={styles.step1Card}>
                <h5 className={styles.cardTitle}>Title</h5>
                <p className={styles.cardBody}>Description that explains the value goes here. Description that explains the value goes here. </p>
              </div>
            </div>
          </section>
          <section className={styles.step}>
            <h4 className={styles.stepHeader}>Step 2: <span className={styles.headerText}>Build registration workflows.</span></h4>
            <div className={styles.cardGrid}>
              {cardData.map( (card) => (
                <Card icon={<ArrowIcon />} title={card.title} body={card.body} />

              ))}
              <button className={styles.step2CardButton} type='button'>
                <span className={styles.step2CardDefault}>
                  <span className={styles.icon}><AddCircleIcon /></span>
                  <span className={styles.cardBody}>Add Registration Workflow</span>
                </span>
              </button>
            </div>
          </section>
          <section className={styles.step}>
            <h4 className={styles.stepHeader}>Step 3: <span className={styles.headerText}>Design post-registration experiences.</span></h4>
            <div className={styles.cardGrid}>
              <Card icon={<ComputerIcon />} title='Attendee Portal' body="Manage the portal that attendees will see after they’ve register for your event." />
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}

export default App
