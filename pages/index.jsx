import { useState } from 'react';
import EntryForm from '../components/EntryForm';
import DisplayEntries from '../components/DisplayEntries';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [entries, setEntries] = useState([]);
  
  const addEntryToPhoneBook = (entry) => {
    setEntries((prevEntries) =>
      [...prevEntries, entry]
        .sort((a, b) =>
          a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
        )
    );
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="PhoneBook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <EntryForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <DisplayEntries entries={entries} />
      
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}


