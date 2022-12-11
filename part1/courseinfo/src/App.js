  const Header = ({ data }) => (
  <>
    <h1>{data.name}</h1>
  </>
)

const Part = ({ data }) => (
  <>
    <p>
      {data.name} {data.exercises}
    </p>
  </>
)

const Content = ({ data }) => {
  return (
    <>
      <Part data={data.parts[0]} />
      <Part data={data.parts[1]} />
      <Part data={data.parts[2]} />
    </>
  );
}

const Total = ({ data }) => (
  <>
    <p>
      Number of exercises { data.parts[0].exercises +  data.parts[1].exercises + data.parts[2].exercises }
    </p>
  </> 
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  } 

  return (
    <>
      <Header data = {course} />
      <Content data = {course}/>
      <Total data = {course} />
    </>
  )
}

export default App;
