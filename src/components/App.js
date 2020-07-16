import React, { useState } from 'react';
import AddNum from './AddNum';
import NumberList from './NumberList';
import TotalValue from './TotalValue';

const App = () => {
  const [valuesList, setValuesList] = useState([]);

  return (
    <div>
      <div>
        {<AddNum valuesList={valuesList} setValuesList={setValuesList} />}
      </div>
      <div>{<NumberList valuesList={valuesList} />}</div>
      <div>{<TotalValue valuesList={valuesList} />}</div>
    </div>
  );
};

export default App;
