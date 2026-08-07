import { useEffect, useRef } from "react";

import { useChatContext } from "../../context/ChatContext";

import UserMessage from "./UserMessage";
import AssistantMessage from "./AssistantMessage";
import TypingIndicator from "./TypingIndicator";

export default function ChatContainer() {
  const { messages, loading } = useChatContext();

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto px-8 py-8">
      <div className="max-w-5xl mx-auto space-y-6">

        {messages.map((message) =>
          message.role === "user" ? (
            <UserMessage
              key={message.id}
              message={message.content}
            />
          ) : (
            <AssistantMessage
              key={message.id}
              message={message}
            />
          )
        )}

        {loading && <TypingIndicator />}

        <div ref={bottomRef}></div>

      </div>
    </div>
  );
}