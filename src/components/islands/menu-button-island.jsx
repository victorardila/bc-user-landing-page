import React from "react";
import Button from "../common/button.tsx";

const MenuButtonIsland = () => {
  return (
    <div
      className="button-menu"
      style={{
        position: "absolute" /* Superponer los botones sobre el header */,
        top: "50%" /* Alinearlo verticalmente al centro */,
        right: "2rem" /* Espacio a la derecha */,
        transform: "translateY(-50%)" /* Centramos el menú verticalmente */,
        display: "flex",
        flexDirection: "column" /* Alinear botones verticalmente */,
        gap: "10px" /* Espacio entre botones */,
      }}
    >
      <Button
        onClick={() => console.log("¿Qué es BeatConnect?")}
        style={{
          background: "#0597F2",
          boxShadow: "0 0 10px #0000001a",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 15px",
          cursor: "pointer",
          fontSize: "90%",
        }}
        hoverStyle={{
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(0, 149, 255, 0.7))", // Gradiente para el hover
          boxShadow: "0 0 15px rgba(0, 149, 255, 0.7)", // Efecto de brillo
        }}
      >
        ¿Qué es BeatConnect?
      </Button>

      <Button
        onClick={() => console.log("Políticas y Privacidad")}
        style={{
          background: "#0597F2",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 15px",
          cursor: "pointer",
          fontSize: "90%",
        }}
        hoverStyle={{
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(0, 149, 255, 0.7))", // Gradiente para el hover
          boxShadow: "0 0 15px rgba(0, 149, 255, 0.7)", // Efecto de brillo
        }}
      >
        Políticas y Privacidad
      </Button>

      <Button
        onClick={() => console.log("Términos y Condiciones")}
        style={{
          background: "#0597F2",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 15px",
          cursor: "pointer",
          fontSize: "90%",
        }}
        hoverStyle={{
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(0, 149, 255, 0.7))", // Gradiente para el hover
          boxShadow: "0 0 15px rgba(0, 149, 255, 0.7)", // Efecto de brillo
        }}
      >
        Términos y Condiciones
      </Button>

      <Button
        onClick={() => console.log("Eliminación de cuenta")}
        style={{
          background: "#0597F2",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 15px",
          cursor: "pointer",
          fontSize: "90%",
        }}
        hoverStyle={{
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(0, 149, 255, 0.7))", // Gradiente para el hover
          boxShadow: "0 0 15px rgba(0, 149, 255, 0.7)", // Efecto de brillo
        }}
      >
        Eliminación de cuenta
      </Button>
    </div>
  );
};

export default MenuButtonIsland;
