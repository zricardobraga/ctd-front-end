import Character from './components/Character/Index.jsx'
import styles from './app.module.css'

function App() {

  return (
    <>
      <main className={styles.mainContainer}>
        <section className={styles.sectionContainer}>
          <Character />
        </section>
      </main>
    </>
  )

}

export default App
