import React from 'react'

const Header = (props) => {
  return(
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Part = ({ part }) => {
  return(
      <p>
        {part.name} {part.exercises}
      </p>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => part.exercises + total, 0)
  
  return (
    <p>Number of exercises {total}</p>
  )

}

const Course = ({ course }) => (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
)

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