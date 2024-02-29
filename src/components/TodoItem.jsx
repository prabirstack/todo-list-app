import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'
export default function TodoItem({ name }) {
  return (
    <div className='w-full bg-slate-900 p-4 mb-4 flex justify-between items-center rounded-lg'>
      <h4>{name}</h4>
      <div className='flex items-center gap-4'>
        <button>
          <FiEdit />
        </button>
        <button>
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  )
}
