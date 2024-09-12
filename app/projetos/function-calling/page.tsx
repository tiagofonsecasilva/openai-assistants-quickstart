"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "../shared/page.module.css";
import Chat from "../../components/chat";
import ChatStyles from "./chat.module.css";
import WeatherWidget from "../../components/weather-widget";
import { getWeather } from "../../utils/weather";
import { RequiredActionFunctionToolCall } from "openai/resources/beta/threads/runs/runs";
import MainLayout from "@/app/layouts/MainLayout/MainLayout";
import UABLayout from "@/app/layouts/MainLayout/UABLayout";
import { useGlobalContext } from "@/app/contexts/GlobalContext";
import Markdown from "react-markdown";

interface WeatherData {
  location?: string;
  temperature?: number;
  conditions?: string;
}

type MessageProps = {
  role: "user" | "assistant" | "code";
  text: string;
};

const FunctionCalling = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const isEmpty = Object.keys(weatherData).length === 0;
  const { state } = useGlobalContext();
  const [messages, setMessages] = useState([]);

  const functionCallHandler = async (call: RequiredActionFunctionToolCall) => {
    if (call?.function?.name !== "get_weather") return;
    const args = JSON.parse(call.function.arguments);
    const data = getWeather(args.location);
    setWeatherData(data);
    return JSON.stringify(data);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch(`/api/assistants/messages`);
      const data = await response.json();
      setMessages(data?.data);
    };
    fetchMessages();
  }, []);

  const UserMessage = ({ text }: { text: string }) => {
    return <div className={ChatStyles.userMessage}>{text}</div>;
  };

  const AssistantMessage = ({ text }: { text: string }) => {
    return (
      <div className={ChatStyles.assistantMessage}>
        <Markdown>{text}</Markdown>
      </div>
    );
  };

  const CodeMessage = ({ text }: { text: string }) => {
    return (
      <div className={ChatStyles.codeMessage}>
        {text.split("\n").map((line, index) => (
          <div key={index}>
            <span>{`${index + 1}. `}</span>
            {line}
          </div>
        ))}
      </div>
    );
  };

  const Message = ({ role, text }: MessageProps) => {
    switch (role) {
      case "user":
        return <UserMessage text={text} />;
      case "assistant":
        return <AssistantMessage text={text} />;
      case "code":
        return <CodeMessage text={text} />;
      default:
        return null;
    }
  };

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <MainLayout>
      <UABLayout>
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.column}>
              {/* <WeatherWidget
                location={weatherData.location || "---"}
                temperature={weatherData.temperature?.toString() || "---"}
                conditions={weatherData.conditions || "Sunny"}
                isEmpty={isEmpty}
              /> */}
              <div className={ChatStyles.messages}>
                {messages?.map((msg, index) => (
                  msg?.content.map((content) => (
                    <Message
                      key={index}
                      role={msg.role}
                      text={content.text.value}
                    />
                  ))
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <div className={styles.chatContainer}>
              <div className={styles.chat}>
                <Chat functionCallHandler={functionCallHandler} />
              </div>
            </div>
          </div>
        </main>
      </UABLayout>
    </MainLayout>
  );
};

export default FunctionCalling;
