import React, { useState } from 'react';

const AddNum = ({ valuesList, setValuesList }) => {
  const [value, setValue] = useState('');

  const addNumber = (value) => {
    const number = parseInt(value);
    setValuesList([...valuesList, number]);
  };

  return (
    <form onSubmit={addNumber}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button>Add Number</button>
    </form>
  );
};

export default AddNum;
