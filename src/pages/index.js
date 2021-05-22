import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";


export default function Home() {
  const [time, setTime] = useState(null)
  useEffect(() => {
    fetch('/api/time')
      .then(res => res.json())
      .then(data => {
        setTime(data.current_timestamp)
      })

  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js PostgreSQL
        </h1>

        <p className={styles.description}>
          Next.js上でpostgresqlからデータ取得し、表示する例 <br />
          <SyntaxHighlighter language="typescript" style={{ ...monokaiSublime, fontSize: 12 }} >
            {`
const [time, setTime] = useState(null)
useEffect(() => {
  fetch('/api/time')
    .then(res => res.json())
    .then(data => {
      setTime(data.current_timestamp)
    })

}, [])`}
          </SyntaxHighlighter>
        </p>

        <p>
          <strong>現在時間</strong>： {time}
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright 2021 m_sawada
        </a>
      </footer>
    </div >
  )
}
