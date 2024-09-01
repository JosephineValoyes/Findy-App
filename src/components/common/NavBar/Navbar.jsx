import { Link } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  const menuItem = (
    <>
      <Link to="/" onClick={closeMenu}>Home</Link>
      <Link to="/login" onClick={closeMenu}>Login</Link>
      <Link to="/profile" onClick={closeMenu}>Profile</Link>
      <Link to="/postDetails" onClick={closeMenu}>PostDetails</Link>
      <Link to="/register" onClick={closeMenu}>Register</Link>
      <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
    </>
  )

  return (
    <>

      {/* Desktop Menu */}
      <nav className='hidden md:flex gap-6 backdrop-blur-xl h-full items-center w-[51.875rem] justify-center'>
        {menuItem}
      </nav>

      {/* Botón Mobile Menu */}
      <button className="block md:hidden" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
      </button>

      {/* Mobile Menu */}
      <nav className={`md:hidden  ${open ? 'block' : 'hidden'} w-9/12 h-screen backdrop-blur-xl absolute top-0 right-0 flex flex-col p-6 gap-6 font-nav `}>
        <button className="block md:hidden" onClick={toggleMenu}>close</button>
        {open && menuItem}
      </nav>
    </>
  )
}

export default Navbar