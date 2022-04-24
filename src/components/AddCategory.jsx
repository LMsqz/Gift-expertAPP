import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState(""); //esctrin vacio

  // porder escribir en el imput
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // disparar un accion o enter formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //llamar un componete del hijo a padre validacio
    if (inputValue.trim().length > 2) {
      // dar un accion en el fomormulario
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* el input valio siempre renderisara  */}
      {/* <h3>{inputValue}</h3> */}
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
