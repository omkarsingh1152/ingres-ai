export default function TypingIndicator() {
  return (
    <div className="flex items-start gap-4">

      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
        🤖
      </div>

      {/* Bubble */}
      <div className="bg-[#182133] rounded-2xl px-5 py-4 flex gap-2">

        <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></span>

        <span
          className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"
          style={{ animationDelay: "0.15s" }}
        ></span>

        <span
          className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></span>

      </div>

    </div>
  );
}