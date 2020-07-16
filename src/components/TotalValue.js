import React from 'react';

const TotalValue = ({ valuesList }) => {
  const renderTotal = () => {
    return valuesList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  return <div>{renderTotal()}</div>;
};

export default TotalValue;
