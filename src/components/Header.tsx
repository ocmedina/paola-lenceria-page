import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaRegUserCircle, FaShoppingBag } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">

      {/* Barra Superior */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {/* Buscador */}
        <div className="flex-1 flex justify-start pl-4">
          <BsSearch className="text-2xl text-gray-700 cursor-pointer" />
        </div>

        {/* Logo Central */}
        <div className="flex-1 flex justify-center">
          <a href="/">
            <img
              src="/Logo.png" // Reemplaza con la URL de tu logo
              alt="Logo"
              className="h-23"
            />
          </a>
        </div>

        {/* Íconos de Usuario y Carrito */}
        <div className="flex-1 flex justify-end pr-4 space-x-6">
          <FaRegUserCircle className="text-2xl text-gray-700 cursor-pointer" />
          <FaShoppingBag className="text-2xl text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Barra Inferior - Navegación */}
      <nav className="hidden lg:flex justify-center py-4">
        <ul className="flex items-center space-x-8 text-gray-700 text-sm font-semibold">
          <li><a href="#" className="hover:text-pink-600 transition-colors">Inicio</a></li>
          <li><a href="#" className="hover:text-pink-600 transition-colors">Nueva colección</a></li>
          <NavItem title="Lencería" />
          <NavItem title="Bombachas" />
          <NavItem title="Pijamería - Homewear" />
          <NavItem title="Accesorios" />
          <NavItem title="Rafi Men" />
          <li><a href="#" className="hover:text-pink-600 transition-colors">Regalo Gift Card</a></li>
          <li><a href="#" className="hover:text-pink-600 transition-colors">Rebajas</a></li>
          <li><a href="#" className="hover:text-pink-600 transition-colors">Tabla de talles</a></li>
        </ul>
      </nav>

    </header>
  );
};

// Componente auxiliar para los ítems de navegación con dropdown
const NavItem = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <li 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href="#" className="flex items-center hover:text-pink-600 transition-colors">
        {title}
        <svg 
          className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </a>

      {/* Menú Desplegable (Dropdown) */}
      <div 
        className={`absolute top-full left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        {/* Aquí irían los enlaces del submenú */}
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Submenú 1</a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Submenú 2</a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Submenú 3</a>
      </div>
    </li>
  );
};

export default Header;