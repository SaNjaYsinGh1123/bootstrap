import React,{useContext} from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='sticky top-0 z-10 text-3xl flex justify-between text-black-500 font-bold p-5 md:p-3 bg-sky-500 border-b-2 border-gray-500  header-color '>
       <Link to='/'><div className='text-2xl md:text-3xl'>
          Boot<span>Strap</span>
        </div></Link>
     {
        <Link to='/create'>
          <h1 className='text-2xl text-black flex items-center cursor-pointer'>
            {/* <Button  color='inherit'>
              <AddIcon className='mr-2'/>Add New
            </Button>  */}
            +Book
          </h1>
        </Link>
  
    }
    </div>
  )
}

export default Header