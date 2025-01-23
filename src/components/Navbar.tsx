import  { useState } from 'react';
import { Menu, X, Trophy } from 'lucide-react';
import { NavItem } from '../types';

const navigation: NavItem[] = [
  { title: 'Home', href: '#' },
  { title: 'About', href: '#about' },
  { title: 'Programs', href: '#programs' },
  { title: 'Impact', href: '#impact' },
  { title: 'Team', href: '#team' },
  { title: 'Get Involved', href: '#get-involved' },
  { title: 'News & Events', href: '#news' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Trophy className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">SheDrivesports</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.title}
              </a>
            ))}
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
              Donate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.title}
              </a>
            ))}
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}