"use client";

import React, { use, useEffect } from "react";
import styles from "./page.module.css";
import SelectLabels from "./components/material/select/SelectLabels";

const Home = () => {
  const categories = {
    "CORE ": "basic-chat",
    "Faculdade": "function-calling",
    "File search": "file-search",
    All: "all",
    "Real Hotels Group Benchmark": "real-hotels-group"
  };

  const [loading, setLoading] = React.useState(false);
  const [assistantsList, setAssistantsList] = React.useState("");

  const fetchAssistantId = async () => {
    setLoading(true);

    const response = await fetch("/api/assistants", { method: "Get" });
    const data = await response.json();
    setAssistantsList(data.data);

    setLoading(false);
  };


  useEffect(() => {
    fetchAssistantId();
  }, []);

  return (
    <main className={styles.main}>
      <SelectLabels data={assistantsList} />
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
