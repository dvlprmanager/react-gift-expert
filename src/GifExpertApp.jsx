import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Punc "]);

  const onAddCategory = (newCategory) => {
    if (categorias.includes(newCategory)) return;
    setCategorias([newCategory, ...categorias]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategorie={(value) => onAddCategory(value)} />
      {categorias.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
