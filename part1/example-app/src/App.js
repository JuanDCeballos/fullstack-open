import { useState } from 'react';

const Display = ({ counter }) => <div>{counter}</div>;

const Buttons = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);
  const clearCounter = () => setCounter(0);

  return (
    <>
      <Display counter={counter} />
      {/* <button onClick={handleClickLog}>plus</button> */}
      {/* <button onClick={() => setCounter(counter + 1)}>plus</button> */}
      {/* <button onClick={increaseCounter}>plus</button> */}
      {/* <button onClick={() => setCounter(0)}>clear</button> */}
      {/* <button onClick={clearCounter}>clear</button> */}
      <Buttons onClick={increaseCounter} text='plus' />
      <Buttons onClick={clearCounter} text='clear' />
      <Buttons onClick={decreaseCounter} text='decrease' />
    </>
  );
};

export default App;
