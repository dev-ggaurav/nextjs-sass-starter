import styles from '../styles/components/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          My <a href="https://nextjs.org">Next.js!</a> and SASS starter.
        </h1>
        <h2 className="test">This is for test!</h2>
      </main>
    </div>
  )
}
