"use client";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e) => {
  const value = e.target.value.trim(); // ← trim() যোগ করো
  const params = new URLSearchParams(searchParams);
  if (value) {
    params.set("search", value);
  } else {
    params.delete("search");
  }
  router.push(`/explore?${params.toString()}`);
};


  const handleCategory = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("category", value);
    } else {
      params.delete("category"); // ← "All" select হলে delete করো
    }
    router.push(`/explore?${params.toString()}`);
  };

  return (
    <div className="flex gap-4 mb-10">
      <input
        type="text"
        placeholder="Search cars..."
        defaultValue={searchParams.get("search") || ""}
        onChange={handleSearch}
        className="flex-1 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
      />
      <select
        onChange={handleCategory}
        defaultValue={searchParams.get("category") || ""}
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
    </div>
  );
};

export default Search;