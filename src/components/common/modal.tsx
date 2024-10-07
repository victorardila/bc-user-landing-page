import React, { useState } from 'react';
import { 
  faCheck,
  faXmark
 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '../common/button';

// Componente Modal con estilos inline
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          width: '500px',
          maxWidth: '100%',
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <h2>{title}</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
        </div>
        <div
          style={{
            marginTop: '10px',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// Componente principal que acepta un botón como children
interface AppProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const App: React.FC<AppProps> = ({ children, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Renderizamos el botón recibido como children */}
      <div onClick={openModal}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >{children}</div>

      {/* Modal que se abre al hacer clic en el botón */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={
        title
      }>
        <p>{description}</p>
        <div className='buttons' style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '5vh',
          margin: '10px 0',
        }}>
          <Button onClick={closeModal} style={{
            backgroundColor: 'red',
            color: 'white',
            width: '48%',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}>
            <FontAwesomeIcon icon={faXmark} style={{
              width: '20px',
              height: 'auto',
            }} />
          </Button>
          <Button onClick={closeModal} style={{
            backgroundColor: 'green',
            color: 'white',
            width: '48%',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}>
            <FontAwesomeIcon icon={faCheck} style={{
              width: '20px',
              height: 'auto',
            }} />
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default App;
