import React, { useState } from 'react';

const AddNum = ({ valuesList, setValuesList }) => {
  const [value, setValue] = useState('');
  const regexp = new RegExp(`^-?[0-9]*$`);

  const addNumber = (value) => {
    const number = parseInt(value);
    setValuesList([...valuesList, number]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addNumber(value);
    setValue('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          const newValue = e.target.value;
          if (regexp.test(newValue)) {
            setValue(e.target.value);
          }
        }}
      ></input>
      <button>Add Number</button>
    </form>
  );
};

export default AddNum;
