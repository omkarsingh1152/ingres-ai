import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import ChatHeader from "../components/chat/ChatHeader";
import ChatContainer from "../components/chat/ChatContainer";
import ChatInput from "../components/chat/ChatInput";

import { useChatContext } from "../context/ChatContext";
import useChat from "../hooks/useChat";

export default function Chat() {
  const { state } = useLocation();

  const { addUserMessage } = useChatContext();
  const { sendMessage } = useChat();

  // Prevent duplicate execution (React Strict Mode)
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    if (state?.prompt) {
      initialized.current = true;

      // Show user message immediately
      addUserMessage(state.prompt);

      // Send to backend without adding user message again
      sendMessage(state.prompt, false);
    }
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#0b0f19]">
      <ChatHeader />

      <ChatContainer />

      <ChatInput onSend={sendMessage} />
    </div>
  );
}