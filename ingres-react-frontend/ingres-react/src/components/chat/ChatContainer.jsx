import { useChatContext } from "../../context/ChatContext";

import UserMessage from "./UserMessage";
import AssistantMessage from "./AssistantMessage";

export default function ChatContainer() {
  const { messages } = useChatContext();

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
              message={message.content}
            />
          )

        )}

      </div>
    </div>
  );
}