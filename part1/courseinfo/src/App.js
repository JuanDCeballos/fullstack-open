const Header = (props) => (
  <>
    <h1>{props.courseName}</h1>
  </>
)

const Part = ({ data }) => (
  <>
    <p>
      {data.part1} {data.exercises1}
    </p>
    <p>
      {data.part2} {data.exercises2}
    </p>
    <p>
      {data.part3} {data.exercises3}
    </p>
  </>
)

const Content = ({ data }) => {
  return (
    <Part data={data} />
  );
}

const Total = ({ data }) => (
  <>
    <p>Number of exercises {data.exercises1 + data.exercises2 + data.exercises3}</p>
  </>
)

const App = () => {
  const course = 'Half Stack application development'
  const courseInf = {
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14
  };

  return (
    <>
      <Header courseName={course} />
      <Content data={courseInf} />
      <Total data={courseInf} />
    </>
  )
}

export default App;
