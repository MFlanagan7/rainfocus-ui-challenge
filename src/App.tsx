import styles from './App.module.scss'
import Rail from "./components/Rail/Rail";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className={styles.app}>
      <Rail />
      <Sidebar />
      <main className={styles.main}>
        <h1>Event Header</h1>
      </main>
    </div>
  )
}

export default App
