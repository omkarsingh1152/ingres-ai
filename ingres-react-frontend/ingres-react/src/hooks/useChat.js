import { useChatContext } from "../context/ChatContext";
import { sendPrompt } from "../api/chatApi";

export default function useChat() {
    const {
        addUserMessage,
        addAssistantMessage,
        loading,
        setLoading,
        sessionId,
        setSessionId,
    } = useChatContext();

    const sendMessage = async (text, addUser = true) => {
        if (!text.trim()) return;

        if (addUser) {
            addUserMessage(text);
        }

        setLoading(true);

        try {
            const data = await sendPrompt(text, sessionId);

            if (!sessionId) {
                setSessionId(data.session_id);
            }

            addAssistantMessage(data);
        } catch (err) {
            console.error("Error sending message:", err);

            addAssistantMessage({
                reply: "Unable to connect to backend.",
            });
        } finally {
            setLoading(false);
        }
    };

    return {
        sendMessage,
        loading,
    };
}