import { type TodoProps } from '../types/todo'
import Todo from './Todo'

interface Props {
  todoList: TodoProps[]
  setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>
}

const TodoList = ({ todoList, setTodoList }: Props) => {
  return (
    <div className='p-4 bg-white rounded-lg md:p-6'>
      <h2 className='mb-3 text-2xl text-center text-gray-900 font-bold'>
        To-do list
      </h2>

      <p className='mb-3 text-center text-gray-500'>Add a to-do to the list</p>

      <ul className={todoList.length !== 0 ? 'block' : 'hidden'}>
        {todoList.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
