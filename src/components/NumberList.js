import React, { useState } from 'react';
import './NumberList.css';

const NumberList = ({ valuesList, setValuesList }) => {
  const [selected, setSelected] = useState(0);
  const [activeButton, setActiveButton] = useState('');

  const deleteSelected = (value) => {
    setValuesList(valuesList.filter((e) => e !== value));
    setActiveButton('');
  };

  const handleSelected = (selectedNum, selectedButton) => {
    setSelected(selectedNum);
    setActiveButton(selectedButton);
  };

  return (
    <div>
      <ul>
        {valuesList.map((value, index) => {
          return (
            <button
              key={index}
              onClick={() => handleSelected(value, index)}
              className={`${activeButton === index ? 'active-color' : null}`}
            >
              {value}
            </button>
          );
        })}
      </ul>
      <button onClick={() => deleteSelected(selected)}>Delete Selected</button>
    </div>
  );
};

export default NumberList;
