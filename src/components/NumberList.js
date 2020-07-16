import React from 'react';

const NumberList = ({ valuesList }) => {
  return (
    <div>
      <ul>
        {valuesList.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default NumberList;
