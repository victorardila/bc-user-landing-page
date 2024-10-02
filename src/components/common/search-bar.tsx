import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void; // Define el tipo para la propiedad onSearch
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm(""); // Opcional: limpiar el campo de búsqueda después de la búsqueda
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center", // Centra verticalmente
        justifyContent: "start",
        height: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "-webkit-fill-available",
          alignItems: "center",
          cursor: "pointer",
          marginRight: "0.5em", // Espacio entre la lupa y el input
          transition: "transform 0.2s", // Transición suave al mover la lupa
          transform: isActive ? "translateX(-5px)" : "translateX(0)", // Desplaza la lupa a la izquierda cuando está activa
        }}
        onClick={() => setIsActive(!isActive)}
      >
        <FontAwesomeIcon
          icon={faSearch}
          style={{
            fontSize: "20px",
          }}
        />
      </div>
      {isActive && (
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onBlur={() => setIsActive(false)} // Oculta el input al perder foco
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(); // Ejecuta la búsqueda al presionar Enter
            }
          }}
          placeholder="Buscar preguntas..."
          style={{
            height: "-webkit-fill-available",
            border: "1px solid #ccc", // Borde del input
            padding: "0.5em", // Espaciado interno
            borderRadius: "4px", // Bordes redondeados
            fontSize: "18px", // Tamaño de fuente
          }}
        />
      )}
    </div>
  );
};

export default SearchBar;
