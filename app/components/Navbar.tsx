import { useState } from "react";
import { Link } from "@remix-run/react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link to='/' className='text-xl font-bold'>
          MyLogo
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex space-x-6 text-lg'>
          <li>
            <Link to='/about' className='hover:text-blue-500'>
              About
            </Link>
          </li>
          <li>
            <Link to='/services' className='hover:text-blue-500'>
              Services
            </Link>
          </li>
          <li>
            <Link to='/contact' className='hover:text-blue-500'>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white flex flex-col justify-center items-center space-y-6 text-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <button
          className='absolute top-6 right-6'
          onClick={() => setIsOpen(false)}
          title='X Close mobile menu'
        >
          <X size={32} />
        </button>
        <Link
          to='/about'
          className='hover:text-blue-500'
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to='/services'
          className='hover:text-blue-500'
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          to='/contact'
          className='hover:text-blue-500'
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
