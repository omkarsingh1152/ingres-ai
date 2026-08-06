import Hero from "../components/home/Hero";
import PromptChips from "../components/home/PromptChips";
import SearchBar from "../components/home/SearchBar";

export default function Home() {
  return (
    <div className="h-full bg-[#0b0f19] flex items-center justify-center">

      <main className="w-full max-w-6xl px-6 flex flex-col items-center">

        <Hero />

        <PromptChips />

        <SearchBar />

      </main>

    </div>
  );
}