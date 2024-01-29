const Course = (props) => {
  const total = props.course.parts.map(part => part.exercises).reduce(
    (s, p) => s + p
  )
  return (
    <div>
      <h1>  {props.course.name} </h1>
      <ul>
        {props.course.parts.map(part =>  
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>)}
      </ul>
      <b>total of exercises {total}</b>
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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
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