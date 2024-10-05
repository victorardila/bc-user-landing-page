import { useState } from 'react';
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FAQItemProps {
  question: string;
  answer: string;
  hasButton: boolean;
  url?: string;
}

const DropDown: React.FC<FAQItemProps> = ({ question, answer, hasButton, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen); 
  };

  const handleClick = () => {
    if (url) {
      window.location.href = url; // Redirige al usuario a la URL correspondiente
    }
  };

  return (
    <div 
    className='faq-item'
    style={{
      borderBottom: '1px solid #ccc',
      width: '100%', // Ajusta el ancho según sea necesario
      borderRadius: '5px',
      boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.2)',
      margin: '2px 0'
    }} onClick={toggleOpen}>
      <div 
      className='faq-question'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '50px',
        alignItems: 'center',
        cursor: 'pointer'
      }}>
        <div 
        className='faq-question-text'
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '95%',
          height: '-webkit-fill-available',
          padding: '0 1em'
        }}>
          <h3
            style={{
              margin: 0,
              fontSize: '100%',
              fontWeight: 'bold'
            }}
          >{question}</h3>
        </div>
        <div 
        className='faq-question-icon'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '5%',
          height: '-webkit-fill-available',
        }}>
          <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown}  style={{ 
            width: '20px',
            height: '20px',
           }} />
        </div>
      </div>

      {isOpen && (
        <div 
        className='faq-answer'
        style={{
          padding: '10px',
          backgroundColor: '#f9f9f9',
          borderTop: '1px solid #ccc'
        }}>
          <p
            style={{
              margin: 0,
              fontSize: '100%',
              fontWeight: 'normal'
            }}
          >{answer}</p>
          {hasButton && (
            <button 
              className="delete-account-btn" 
              onClick={handleClick}
              style={{
                backgroundColor: 'rgb(184, 20, 20)',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                fontWeight: 'bold',
                fontSize: '1em',
              }}>
              Ir a Eliminar Cuenta
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDown;