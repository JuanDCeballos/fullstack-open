const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <>
      <p>
        hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </>
  );
};

function App() {
  const name = "Emerson";
  const age = 22;

  return (
    <>
      <Hello name="Sebas" age={21}></Hello>
      <Hello name={name} age={age}></Hello>
    </>
  );
};

export default App;
