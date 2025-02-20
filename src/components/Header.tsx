import { Link } from 'react-router'
import Container from './Container'

const Header = () => {
  return (
    <div className='w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
        <Container>
        <Link to="/">
          <span>Basic Form</span>
        </Link>
        <Link to="/advanced-form">
          <span>Advanced Form</span>
        </Link>
        </Container>    
    </div>
  )
}

export default Header