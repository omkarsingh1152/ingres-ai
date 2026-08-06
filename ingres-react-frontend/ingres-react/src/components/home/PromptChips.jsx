const prompts = [
  "Groundwater level in Wardha?",
  "Over-exploited zones in Rajasthan",
  "Simulate 20% reduction in Punjab",
  "Crop advisory for Marathwada",
];

export default function PromptChips() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10 text-xs">
      {prompts.map((item) => (
        <button
          key={item}
          className="px-4 py-1 rounded-full bg-[#1b2538] border border-slate-700 text-slate-300 hover:bg-slate-700 transition"
        >
          {item}
        </button>
      ))}
    </div>
  );
}