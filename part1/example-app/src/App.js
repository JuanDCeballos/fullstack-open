const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };

  return (
    <>
      <p>
        hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </>
  );
};

function App() {
  const name = "Emerson";
  const age = 21;

  return (
    <>
      <Hello name="Sebas" age={20}></Hello>
      <Hello name={name} age={age}></Hello>
    </>
  );
}

export default App;
