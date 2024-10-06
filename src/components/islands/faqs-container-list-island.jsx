import React, { useState, useEffect } from "react";
import DropDown from "../common/drop-down";
import SearchBar from "../common/search-bar";
import FAQData from "../../assets/json/SeccionesFaq.json";
import DescriptionSection from "../../assets/json/DescriptionSection.json";
import { useButtonMenu } from "../../hooks/useButtonMenu";

const FaqsContainerListIsland = () => {
  const dataFaqs = FAQData.faqs;
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [sections, setSections] = useState([]); // Secciones únicas
  const [selectedSection, setSelectedSection] = useState([]); // Sección seleccionada

  // Usa el hook de Zustand para obtener el estado del botón
  const { selectedButton, setSelectedButton } = useButtonMenu();

  const handleSearch = (term) => {
    setSearchTerm(term); // Actualiza el término de búsqueda
    if (term === "") {
      setSelectedSection([]); // Limpia la sección seleccionada al borrar el término de búsqueda
    }
  };

  // Filtra las preguntas según el término de búsqueda
  const filteredFaqsSearched = dataFaqs.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filtra las preguntas por la sección seleccionada
  const filteredFaqsSection = dataFaqs.filter((item) =>
    item.section.toLowerCase().includes(selectedButton)
  );

  // Al cargar el componente, obtenemos las secciones únicas
  useEffect(() => {
    const uniqueSections = Array.from(
      new Set(dataFaqs.map((item) => item.section.toLowerCase()))
    );
    setSections(uniqueSections);
  }, [dataFaqs]);

  // Al cambiar selectedButton, actualiza selectedSection
  useEffect(() => {
    if (sections.includes(selectedButton)) {
      // Capitaliza la primera letra
      const capitalizedSection =
        selectedButton.charAt(0).toUpperCase() + selectedButton.slice(1);

      // Encuentra la descripción correspondiente en DescriptionSection
      const descriptionObject = DescriptionSection.find(
        (item) => item.section.toLowerCase() === selectedButton.toLowerCase()
      );

      // Establece el estado selectedSection
      setSelectedSection([
        capitalizedSection,
        descriptionObject
          ? descriptionObject.description
          : "Descripción no disponible.",
      ]);
    } else {
      setSelectedSection([]); // Limpia la sección seleccionada si el botón no está seleccionado
    }
  }, [selectedButton, sections]); // Añade sections como dependencia

  // Detectar si se está haciendo búsqueda para limpiar la selección
  useEffect(() => {
    if (searchTerm !== "") {
      setSelectedButton(null); // Limpia la sección seleccionada cuando se busca
    }
  }, [searchTerm, setSelectedButton]);

  // Determina si se deben mostrar los dropdowns según la lógica de filtrado
  const shouldShowDefinitionSection =
    selectedButton !== null &&
    filteredFaqsSection.length > 0 &&
    searchTerm === "";

  // Obtener las FAQs a mostrar
  const faqsToShow = searchTerm
    ? filteredFaqsSearched
    : selectedButton
      ? filteredFaqsSection
      : dataFaqs; // Muestra todas las FAQs si no hay filtro de búsqueda ni sección seleccionada

  // Conteo de preguntas encontradas
  const totalQuestionsCount = searchTerm
    ? filteredFaqsSearched.length
    : selectedButton
      ? filteredFaqsSection.length
      : dataFaqs.length;

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
        className="header-content-faqs"
        style={{
          display: "flex",
          width: "100%",
          height: "6%",
          justifyContent: "space-between",
        }}
      >
        <SearchBar onSearch={handleSearch} />
        <span>{totalQuestionsCount} Preguntas</span>
      </div>
      <div
        className="container-content-faqs"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "-webkit-fill-available",
          padding: "10px",
        }}
      >
        <div
          className="definition-sections"
          style={{
            display: shouldShowDefinitionSection ? "flex" : "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "-webkit-fill-available",
            height: "20%",
            backgroundColor: "white",
            boxShadow: "0 0 10px #0000001a",
            borderRadius: "5px",
            border: "1px solid #e5e5e5",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#1a1a1a", fontSize: "150%" }}>
            {selectedSection[0]}
          </h2>
          <p style={{ color: "#1a1a1a", fontSize: "100%" }}>
            {selectedSection[1]}
          </p>
        </div>
        <div
          className="faqs-sections scrollable"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "-webkit-fill-available",
            padding: "10px",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          {faqsToShow.map((item, index) => (
            <DropDown
              key={index}
              question={item.question}
              answer={item.answer}
              hasButton={item.hasButton}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqsContainerListIsland;
