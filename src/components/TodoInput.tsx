import { useState } from 'react'

interface Props {
  onAddTodo: (
    todoTitle: string,
    setTodoTitle: React.Dispatch<React.SetStateAction<string>>
  ) => void
}

const TodoInput = ({ onAddTodo }: Props) => {
  const [todoTitle, setTodoTitle] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onAddTodo(todoTitle, setTodoTitle)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value)
  }

  return (
    <form className='flex justify-center' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a to-do'
        className='w-full max-w-[270px] mb-10 px-4 py-3 inline-block rounded-lg text-center focus:outline-none md:px-8'
        value={todoTitle}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </form>
  )
}

export default TodoInput
