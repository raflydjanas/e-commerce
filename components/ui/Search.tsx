import React, { useState } from "react";
import { Input } from "./input";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  console.log("🚀 ~ Products ~ setSearch:", search);

  return (
    <form>
      <Input className="bg-slate-800 border-slate-500 text-white text-lg" type="text" value={search} placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
    </form>
  );
};

export default Search;
