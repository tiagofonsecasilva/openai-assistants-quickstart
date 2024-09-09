"use client";
import React from "react";
import styles from "../shared/page.module.css";

import Chat from "../../components/chat";
import FileViewer from "../../components/file-viewer";
import { Messages } from "openai/resources/beta/threads/messages";
import MessageViewer from "@/app/components/message-viewer";
import RealHotelsLayout from "@/app/layouts/RealHotelsLayout";
import MainLayout from "@/app/layouts/MainLayout/MainLayout";

const RealHotelsGroup = () => {
  return (
    <MainLayout>
    <RealHotelsLayout>
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.column}>
          <FileViewer />
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.chat}>
            <Chat />
          </div>
        </div>
      </div>
    </main>
    </RealHotelsLayout>
    </MainLayout>

  );
};

export default RealHotelsGroup;
