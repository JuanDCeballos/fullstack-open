// const App = () => (
//   <div>
//     <p>Hello world</p>
//   </div>
// )

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const lastName = 'Lopez'
  const IdkAge = 23;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = 'juan.' age = {15 + 5}/>
      <Hello name = {lastName} age = {IdkAge}/>
      <Hello name = 'ceballos' age = '12'/>
    </div>
  )
}

export default App;
