const Course = (props) => {
  console.log(props.course.name)
  return (
    <div>
      <h1>  {props.course.name} </h1>
      <ul>
        {props.course.parts.map(part =>  
          <li key={part.id}>
            {part.name}
          </li>)}
      </ul>
    </div>
  )
}
/*
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
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>

    </div>
  )
}*/

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App