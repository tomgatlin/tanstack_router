import { Link } from '@tanstack/react-router'

const HeaderTwo = () => {
  return (
    <div className='p-4 flex items-center justify-end text-black'>
        <Link to="/" className="mx-4 hover:underline">Home</Link>
        <Link to="/about" className="mx-4 hover:underline">About</Link>
        <Link to="/tom" className="mx-4 hover:underline">Tom</Link>
    </div>
  )
}

export default HeaderTwo