// app/RealHotelsLayout.tsx
"use client";

import React, { useEffect } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import {threadId, assistantId} from "../assistant-config"

const RealHotelsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setState } = useGlobalContext();

  useEffect(() => {
    setState({
      assistantId: assistantId,
      threadId: threadId
    });
  }, [setState]);

  return (
    <div>
      <h1>Real Hotels Group Benchmark</h1>
      {children}
    </div>
  );
};

export default RealHotelsLayout;