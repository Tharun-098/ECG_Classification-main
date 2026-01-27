import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-cyan-700" />
            <span className="text-xl font-bold text-cyan-800">HeartScan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" active={location.pathname === '/'} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/information" active={location.pathname === '/information'} onClick={closeMenu}>
              Information
            </NavLink>
            <NavLink to="/prediction" active={location.pathname === '/prediction'} onClick={closeMenu}>
              Prediction
            </NavLink>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-cyan-700 hover:text-cyan-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 invisible'
        } bg-white overflow-hidden`}
      >
        <div className="px-4 py-3 space-y-4">
          <NavLink to="/" active={location.pathname === '/'} onClick={closeMenu} mobile>
            Home
          </NavLink>
          <NavLink to="/information" active={location.pathname === '/information'} onClick={closeMenu} mobile>
            Information
          </NavLink>
          <NavLink to="/prediction" active={location.pathname === '/prediction'} onClick={closeMenu} mobile>
            Prediction
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children, onClick, mobile }) => {
  return (
    <Link
      to={to}
      className={`
        ${mobile ? 'block' : 'inline-block'}
        ${active 
          ? 'text-cyan-700 font-medium' 
          : 'text-gray-600 hover:text-cyan-700'
        }
        transition-colors duration-200
      `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;