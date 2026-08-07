import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ChatHeader from "../components/chat/ChatHeader";
import ChatContainer from "../components/chat/ChatContainer";
import ChatInput from "../components/chat/ChatInput";

import { useChatContext } from "../context/ChatContext";

export default function Chat() {
  const { state } = useLocation();

  const {
    messages,
    addUserMessage,
    addAssistantMessage,
  } = useChatContext();

  // Add initial prompt only once
  useEffect(() => {
    if (
      state?.prompt &&
      messages.length === 0
    ) {
      addUserMessage(state.prompt);

      setTimeout(() => {
        addAssistantMessage(
          "Hello! I'm INGRES AI. This is a temporary AI response."
        );
      }, 1000);
    }
  }, []);

  const handleSend = (text) => {
    addUserMessage(text);

    setTimeout(() => {
      addAssistantMessage(
        "This is a temporary AI response."
      );
    }, 1000);
  };

  return (
    <div className="h-full flex flex-col bg-[#0b0f19]">

      <ChatHeader />

      <ChatContainer />

      <ChatInput onSend={handleSend} />

    </div>
  );
}