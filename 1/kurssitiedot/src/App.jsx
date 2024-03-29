const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>  {props.course} </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} exercises={props.parts[1]}/>
      <Part part={props.parts[2]} exercises={props.parts[3]}/>
      <Part part={props.parts[4]} exercises={props.parts[5]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>

    </div>
  )
}

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
    <div>
      <Header course={course.name} />
      <Content parts={[course.parts[0].name, course.parts[0].exercises, course.parts[1].name, course.parts[1].exercises, course.parts[2].name, course.parts[2].exercises]}/>
      <Total exercises={[course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises]} />
    </div>
  )
}

export default App