// app/contexts/GlobalContext.tsx
"use client";

import { createContext, useState, useContext, ReactNode } from 'react';

interface GlobalState {
  assistantId: string,
  threadId: string
}

interface GlobalContextType {
  state: GlobalState;
  setState: (state: GlobalState) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GlobalState>({assistantId: null, threadId: null} );

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};