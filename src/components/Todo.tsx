import { useState } from 'react'

import { type TodoProps } from '../types/todo'

import { BsTrashFill, BsCheckCircleFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'

interface Props {
  todo: TodoProps
  todoList: TodoProps[]
  setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>
}

const Todo = ({ todo, todoList, setTodoList }: Props) => {
  const [editTodoInput, setEditTodoInput] = useState<string>(todo.title)

  const removeTodo = (id: number) => {
    setTodoList(todoList.filter(i => i.id !== id))
  }

  const editTodo = (id: number) => {
    setTodoList(
      todoList.map(i => (id === i.id ? { ...todo, isEditing: true } : i))
    )
  }

  const todoDone = (id: number) => {
    setTodoList(todoList.map(i => (i.id === id ? { ...i, done: true } : i)))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault()

    setTodoList(
      todoList.map(i =>
        i.id === id ? { ...todo, title: editTodoInput, isEditing: false } : i
      )
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodoInput(e.target.value)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditTodoInput(e.target.value)
  }

  return (
    <li className='py-5 text-center md:flex md:justify-between md:items-center'>
      {todo.isEditing ? (
        <form
          className={`mb-5 md:mb-0 ${
            todo.isEditing ? 'basis-[40%]' : 'basis-[30%]'
          }`}
          onSubmit={e => {
            handleSubmit(e, todo.id)
          }}
        >
          <input
            type='text'
            className='w-full px-3 py-1 border border-b-violet-900 text-center focus:outline-none'
            value={editTodoInput}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </form>
      ) : (
        <h4
          className={`mb-5 transition-all duration-300 md:mb-0 md:basis-[30%] ${
            todo.done ? 'line-through opacity-80' : 'no-underline opacity-100'
          }`}
        >
          {todo.title}
        </h4>
      )}
      <div
        className={`flex text-2xl text-violet-900 md:basis-[30%] ${
          todo.isEditing || todo.done
            ? 'justify-center'
            : 'justify-between md:justify-around'
        }`}
      >
        <BsTrashFill
          className='inline-block cursor-pointer hover:scale-90 transition-all duration-300'
          onClick={() => {
            removeTodo(todo.id)
          }}
        />
        <FaEdit
          className={`cursor-pointer hover:scale-90 transition-all duration-300 ${
            todo.done ? 'hidden' : 'ínline-block'
          } ${todo.isEditing ? 'hidden' : 'inline-block'}`}
          onClick={() => {
            editTodo(todo.id)
          }}
        />
        <BsCheckCircleFill
          className={`${
            todo.isEditing
              ? 'hidden'
              : 'inline-block cursor-pointer hover:scale-90 transition-all duration-300'
          } ${todo.done ? 'hidden' : 'inline-block'}`}
          onClick={() => {
            todoDone(todo.id)
          }}
        />
      </div>
    </li>
  )
}

export default Todo
