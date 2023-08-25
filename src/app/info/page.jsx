import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Info = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Our Services</h1>
      <div className={styles.items}>
        <Link href="/info/illustrations" className={styles.item}>
          <span className={styles.title}>Translations</span>
        </Link>
        <Link href="/info/websites" className={styles.item}>
          <span className={styles.title}>Artificial Intelligence</span>
        </Link>
        <Link href="/info/application" className={styles.item}>
          <span className={styles.title}>Search Engine Evaluator</span>
        </Link>
      </div>
    </div>
  );
};

export default Info;