"use client";
import { Button } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (category) params.set("category", category);
    router.push(`/explore?${params.toString()}`);
  };

  return (
    <div className="flex gap-4 mb-10 max-w-150">
      <input
        value={search}
        type="text"
        placeholder="Search cars..."
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="flex-1 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors "
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-zinc-900 border border-zinc-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
      >
        <option value="">All</option>
        <option value="SUV">SUV</option>
        <option value="Sedan">Sedan</option>
        <option value="Sports">Sports</option>
        <option value="Luxury">Luxury</option>
        <option value="Electric">Electric</option>
        <option value="Pickup">Pickup</option>
        <option value="Van">Van</option>
      </select>
      <Button
        onClick={handleSearch}
        className="px-6 py-5 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg"
      >
        Search
      </Button>
    </div>
  );
};

export default Search;