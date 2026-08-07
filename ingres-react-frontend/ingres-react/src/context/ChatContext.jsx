import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role: "user",
        content: text,
      },
    ]);
  };

const addAssistantMessage = (data) => {
  setMessages((prev) => [
    ...prev,
    {
      id: crypto.randomUUID(),
      role: "assistant",

      // AI Response
      content: data.reply,

      // Visualization
      chart: data.chart ?? null,
      records: data.records ?? [],

      // Additional Information
      cropAdvisory: data.crop_advisory ?? null,
      intent: data.intent ?? null,
      entities: data.entities ?? {},
      dataSource: data.data_source ?? null,
      generatedAt: data.generated_at ?? null,
    },
  ]);
};

  return (
    <ChatContext.Provider
      value={{
        messages,
        loading,
        sessionId,
        setSessionId,
        setLoading,
        addUserMessage,
        addAssistantMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  return useContext(ChatContext);
}