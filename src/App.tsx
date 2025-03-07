import AddTodo from "./components/AddTodo"
import Title from "./components/Title"
import TodoList from "./components/TodoList"

function App() {


  return (<section className="container mx-auto px-1.5 min-h-screen py-5">
    <Title>
      Todo App
    </Title>

    <AddTodo />
    <TodoList />
  </section>)
}

export default App
