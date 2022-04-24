import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitGrid } from "./components/GitGrid";

export const GifExpertApp = () => {
  // const categories = ["One Puch", "Samural x", "Dragol Ball"];
  const [categories, setCategories] = useState(["One Puch"]);

  // const handleAdd = () => {
  //   setCategories((cats) => [...cats, "hunterXhunter"]);
  // };

  return (
    <>
      <h2>GilExportApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* boramos el boto */}
      <ol>
        {categories.map((category) => (
          <GitGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
