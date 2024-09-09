"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  const categories = {
    "Basic chat": "basic-chat",
    "Function calling": "function-calling",
    "File search": "file-search",
    All: "all",
    "Real Hotels Group Benchmark": "real-hotels-group"
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        Projetos disponíveis
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/projetos/${url}`}>
            {name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
