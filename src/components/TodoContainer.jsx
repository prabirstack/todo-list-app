import TodoItem from './TodoItem'

export default function TodoContainer({ todoList }) {
  return (
    <section className='bg-slate-700 w-full max-w-2xl mx-auto text-center px-8 pt-6 pb-12 rounded-lg'>
      <h1 className='text-3xl font-semibold capitalize mb-4'>
        Get things done!
      </h1>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </section>
  )
}
