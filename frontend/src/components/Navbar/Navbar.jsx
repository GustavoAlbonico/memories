import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2><Link to="/">Memories</Link></h2>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/add-memory">Adicionar Memória</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar