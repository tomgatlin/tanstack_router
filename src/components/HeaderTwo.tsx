import { Link, useLocation} from '@tanstack/react-router'

const HeaderTwo = () => {
    const location = useLocation()
    const homeMatch = location.pathname === '/';
    const textColor = homeMatch ? 'text-white' : 'text-black'

  return (
    <div className={`fixed top-0 left-0 w-full p-4 flex items-center justify-end text-black bg-transparent z-50 ${textColor}`}>
        <Link to="/" className="mx-4 hover:underline">Home</Link>
        <Link to="/about" className="mx-4 hover:underline">About</Link>
        <Link to="/tom" className="mx-4 hover:underline">Tom</Link>
    </div>
  )
}

export default HeaderTwo