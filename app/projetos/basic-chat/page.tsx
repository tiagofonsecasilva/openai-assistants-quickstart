"use client";

import React from "react";
import styles from "./page.module.css"; // use simple styles for demonstration purposes
import Chat from "../../components/chat";
import { CORELayout } from "@/app/layouts/CORELayout";
import { useGlobalContext } from "@/app/contexts/GlobalContext";
import MessageViewer from "@/app/components/message-viewer";


const Home = () => {

  return (
    <CORELayout>
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.column}>
          {/* <FileViewer /> */}
          <MessageViewer />
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.chat}>
            <Chat />
          </div>
        </div>
      </div>
    </main>
    </CORELayout>
  );
};

export default Home;
