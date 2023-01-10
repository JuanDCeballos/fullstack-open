import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  // const handleClickLog = () => {
  //   console.log('Clicked');
  // };

  const handleClickUI = () => {
    setCounter(counter + 1);
  };

  const clearCounter = () => {
    setCounter(0);
  };

  return (
    <>
      <div>{counter}</div>
      {/* <button onClick={handleClickLog}>plus</button> */}
      {/* <button onClick={() => setCounter(counter + 1)}>plus</button> */}
      <button onClick={handleClickUI}>plus</button>
      {/* <button onClick={() => setCounter(0)}>clear</button> */}
      <button onClick={clearCounter}>clear</button>
    </>
  );
};

export default App;
