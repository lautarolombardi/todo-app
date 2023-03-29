import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { type TodoProps } from './types/todo'

const App = () => {
  const [todoList, setTodoList] = useState<TodoProps[]>([])

  const onAddTodo = (
    todoTitle: string,
    setTodoTitle: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setTodoList([
      ...todoList,
      { id: Date.now(), title: todoTitle, done: false, isEditing: false }
    ])

    setTodoTitle('')
  }
  return (
    <>
      <main className='main'>
        <div className='container mx-auto py-12'>
          <h1 className='mb-16 text-3xl text-white font-bold text-center lg:text-4xl'>
            TO-DO APP
          </h1>

          <TodoInput onAddTodo={onAddTodo} />

          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
      </main>

      <footer className='h-[50px] flex justify-center items-center text-center text-white'>
        <p className='text-md text-lg'>Lautaro Lombardi © 2023</p>
      </footer>
    </>
  )
}

export default App
