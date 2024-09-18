// app/RealHotelsLayout.tsx
"use client";

import React, { useEffect } from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';
import {threadId} from "../../assistant-config"
const RealHotelsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state, setState } = useGlobalContext();

  useEffect(() => {
    setState({
      threadId: process.env.NEXT_PUBLIC_UAB_THREAD_ID,
    });
  }, [setState]);

  return (
    <div>
      <h1>Real Hotels Group Benchmark4</h1>
      {children}
    </div>
  );
};

export default RealHotelsLayout;