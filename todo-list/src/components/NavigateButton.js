import React from 'react';

const NavigateButton = ({ text, btnClass, onClick }) => {
  return (
    <div>
      <button
        className={`btn btn-sm ${btnClass}`}
        style={{ marginRight: '6px', marginBottom: '5px' }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default NavigateButton;
