import React, { useState } from "react";
import DropDown from "../common/drop-down";
import SearchBar from "../common/search-bar";
import FAQData from "../../assets/json/SeccionesFaq.json";

const FaqsContainerListIsland = () => {
  const dataFaqs = FAQData.faqs;
  const [searchTerm, setSearchTerm] = useState(""); // Agregado para el término de búsqueda

  const handleSearch = (term) => {
    setSearchTerm(term); // Actualiza el término de búsqueda
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="header-content-fqs"
        style={{
          display: "flex",
          width: "100%",
          height: "6%",
          justifyContent: "space-between",
        }}
      >
        <SearchBar onSearch={handleSearch} />{" "}
        {/* Pasa la función handleSearch */}
        <span>{FAQData.faqs.length} Preguntas</span>
      </div>
      <div
        className="container-content-faqs scrollable"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "-webkit-fill-available",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {dataFaqs
          .filter((item) =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase())
          ) // Filtra las preguntas según el término de búsqueda
          .map((item, index) => (
            <DropDown
              key={index} // Agrega una clave única aquí
              question={item.question}
              answer={item.answer}
              hasButton={item.hasButton}
              url={item.url}
            />
          ))}
      </div>
    </div>
  );
};

export default FaqsContainerListIsland;
