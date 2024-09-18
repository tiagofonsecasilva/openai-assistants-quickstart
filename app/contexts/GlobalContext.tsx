// app/contexts/GlobalContext.tsx
"use client";

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface GlobalState {
  assistantId?: string,
  threadId: string
}

interface GlobalContextType {
  state: GlobalState;
  setState: (state: GlobalState) => void;
  messages: any;
  setMessages: (messages: any) => void;

}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GlobalState>({assistantId: null, threadId: null} );
  const [messages, setMessages] = useState([]);
  const [assistants, setAssistants] = useState(null);


  useEffect(() => {
    const selectedAssistant = localStorage.getItem('selectedAssistant');
    if (selectedAssistant) {
      setState(prevState => ({
        ...prevState,
        assistantId: selectedAssistant
      }));
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ state, setState, messages, setMessages }}>
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