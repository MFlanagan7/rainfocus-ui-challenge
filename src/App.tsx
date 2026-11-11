import styles from './App.module.scss'
import Rail from "./components/Rail/Rail";
import Sidebar from "./components/Sidebar/Sidebar";
import { events } from './data/events';

const current = events[0]

function App() {
  return (
    <div className={styles.app}>
      <Rail events={events} activeId={current.id} />
      <Sidebar event={current} />
      <main className={styles.main}>
        <h1>Event Header</h1>
      </main>
    </div>
  )
}

export default App
