import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          This project is
          <code className={styles.code}> under development</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
      <a
          href="./latest-block"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Blockchain metrics from Blockchain.info <span>-&gt;</span>
          </h2>
          <p>
            Proxy Server - Blockchain.info
          </p>
        </a>
      <a
          href="./lightning-metrics"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Lightning Metrics from 1ML <span>-&gt;</span>
          </h2>
          <p>
            Proxy Server - 1ML Real-Time Lightning Network Statistics
          </p>
        </a>
        <a
          href="./feed"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Feed RSS <span>-&gt;</span>
          </h2>
          <p>
            Proxy Server - BitcoinNews RSS feed
          </p>
        </a>
        <a
          href="./feed-pt"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Feed RSS <span>-&gt;</span>
          </h2>
          <p>
            BR Proxy Server - BitcoinNews RSS feed
          </p>
        </a>

        <a
          href="./feed-es"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Feed RSS <span>-&gt;</span>
          </h2>
          <p>
            ES Proxy Server - BitcoinNews RSS feed
          </p>
        </a>

        <a
          href="./feed-de"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Feed RSS <span>-&gt;</span>
          </h2>
          <p>
            DE Proxy Server - BitcoinNews RSS feed
          </p>
        </a>

        <a
          href="./feed-tr"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Feed RSS <span>-&gt;</span>
          </h2>
          <p>
            TR Proxy Server - BitcoinNews RSS feed
          </p>
        </a>

        <a
          href="./feed-ko"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Feed RSS <span>-&gt;</span>
          </h2>
          <p>
            JA Proxy Server - BitcoinNews RSS feed
          </p>
        </a>

        <a
          href="./feed-ja"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Feed RSS <span>-&gt;</span>
          </h2>
          <p>
            Proxy Server - BitcoinNews RSS feed
          </p>
        </a>
      </div>
    </main>
  )
}
