const Header = (props) => {
  return (
    <h1>
      {props.title}
    </h1>
  )
}

const Content = ({ name, exercises }) => {

  return (
    <div>
      <h2>{name}</h2>
      <p>Number of Exercises: {exercises}</p>
    </div>
  )
}

const Parts = ({ parts }) => {
  return (
    <>
      {parts.map(({id, name, exercises}) => (
        <Content key={`part ${id}`} name={name} exercises={exercises} />
      ))}
    </>
  )
}

const Total = ({ parts }) => {
  return (
    <p>
      <b>
      Total number of exercises:
      {parts.map(a => a.exercises).reduce((a, b) => a + b)}
      </b>
    </p>
  )
}

const Deneme = ({ data }) => {
  return (
    <div>
      <Header title={data.name} />
      <Parts parts={data.parts} />
      <br />
      <Total parts={data.parts} />
    </div>
  )

}

const App = () => {
  const course = [
    {
      name: 'Fundementals of Web apps',
      id: 1,
      parts: [
        {
          name: "General Info",
          exercises: 0,
          id: 1
        },
        {
          name: "Fundamentals of Web apps",
          exercises: 6,
          id: 2
        },
      ]
    },
    {
      name: "Introduction to React",
      id: 2,
      parts: [
        {
          name: "Introduction to React",
          exercises: 2,
          id: 1
        },
        {
          name: "JavaScript",
          exercises: 2,
          id: 2
        },
        {
          name: "Component state, event handlers",
          exercises: 0,
          id: 3
        },
        {
          name: "A more complex state, debugging React apps",
          exercises: 8,
          id: 4
        }
      ]
    },
    {
      name: "Communicating with server",
      id: 3,
      parts: [
        {
          name: "Rendering a collection, modules",
          exercises: 4,
          id: 1
        },
        {
          name: "Forms",
          exercises: 4,
          id: 2
        },
        {
          name: "Getting data from server",
          exercises: 4,
          id: 3
        },
        {
          name: "Altering data in server",
          exercises: 3,
          id: 4
        },
        {
          name: "Adding Styles to React app",
          exercises: 2,
          id: 5
        }
      ]
    }
  ]



  return (
    <div>
      {course.map(a => (
        <Deneme key={`course ${a.id}`} data={a} />
      ))}
    </div>
  )
}

export default App;
