const BASE_URL = "http://localhost:8000/api/v1";

export async function sendPrompt(message, sessionId = null) {
  const response = await fetch(`${BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      session_id: sessionId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch response");
  }

  return await response.json();
}