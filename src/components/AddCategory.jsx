import { useState } from "react";

export const AddCategory = ({ onNewCategorie }) => {
  const [inputvalue, setInputvalue] = useState("");

  const onInputChange = ({ target }) => {
    setInputvalue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputvalue.trim().length <= 1) return;

    onNewCategorie(inputvalue.trim());
    // setCategories(categorias => [...categorias,inputvalue])
    setInputvalue("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputvalue}
        onChange={onInputChange}
      />
    </form>
  );
};
