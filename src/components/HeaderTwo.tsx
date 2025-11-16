import { Link } from '@tanstack/react-router'

const HeaderTwo = () => {
  return (
    <div className='p-4 flex items-center justify-end bg-gray-800 text-white shadow-lg'>
        <Link to="/" className="mx-4 hover:underline">Home</Link>
        <Link to="/about" className="mx-4 hover:underline">About</Link>
    </div>
  )
}

export default HeaderTwo