import TodoContainer from './components/TodoContainer'

const todoList = [
  { id: 1, name: 'buy bread', isCompleted: false },
  { id: 2, name: 'go shopping', isCompleted: false },
  { id: 3, name: 'go to club', isCompleted: false },
]

function App() {
  return (
    <div className='h-screen grid place-items-center'>
      <TodoContainer todoList={todoList} />
    </div>
  )
}

export default App
