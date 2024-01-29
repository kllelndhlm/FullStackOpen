const Course = (props) => {
  const total = props.course.parts.map(part => part.exercises).reduce(
    (s, p) => s + p
  )
  return (
    <div>
      <h2>  {props.course.name} </h2>
        {props.course.parts.map(part =>  
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>)}
          
      <b>total of exercises {total}</b>
    </div>
  )
}

export default Course