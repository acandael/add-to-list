import React, { useState } from 'react';
import AddNum from './AddNum';

const App = () => {
  const { valuesList, setValuesList } = useState([]);

  console.log(valuesList);

  return (
    <div>
      {<AddNum valuesList={valuesList} setValuesList={setValuesList} />}
    </div>
  );
};

export default App;
