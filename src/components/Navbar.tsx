import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navigation: NavItem[] = [
  { title: 'Home', href: '#' },
  { title: 'About', href: '#about' },
  { title: 'Programs', href: '#programs' },
  { title: 'Impact', href: '#impact' },
  { title: 'Team', href: '#team' },
  { title: 'Get Involved', href: '#get-involved' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
        : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/Original__1_-removebg-preview.png"
              alt="SheDrivesSports Logo"
              className="h-14 w-auto"
            />
            <span className="ml-3 text-lg font-bold text-gray-900 hidden sm:block">She Drives Sports</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={handleNavClick}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-purple-600 text-white px-5 py-2.5 rounded-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Donate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 shadow-inner">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={handleNavClick}
              className="text-gray-700 hover:text-purple-600 block px-3 py-2.5 rounded-md text-base font-medium transition-colors border-l-2 border-transparent hover:border-purple-600 hover:bg-purple-50"
            >
              {item.title}
            </a>
          ))}
          <button className="w-full mt-2 bg-purple-600 text-white px-4 py-3 rounded-md hover:bg-purple-700 transition-colors shadow-sm">
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
}