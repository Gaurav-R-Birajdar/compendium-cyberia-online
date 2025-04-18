import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-cyber-blue/80 backdrop-blur-md border-b border-cyber-teal/20 py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-display font-bold mr-2 text-cyber-teal animate-glow">
              EduLinker
            </h1>
            <span className="text-xs bg-cyber-teal/10 px-2 py-0.5 rounded text-cyber-teal border border-cyber-teal/20">
              CS Resources
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/#categories" className="nav-link">Categories</Link>
          <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer" className="nav-link">Free Tools</a>
          <div className="ml-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-slate h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search resources..." 
              className="pl-10 pr-4 py-2 rounded-full text-sm bg-cyber-dark border border-cyber-teal/20 focus:border-cyber-teal focus:outline-none"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-cyber-teal hover:bg-cyber-teal/10"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-cyber-dark/95 backdrop-blur-md border-b border-cyber-teal/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="nav-link block">Home</Link>
            <Link to="/#categories" className="nav-link block">Categories</Link>
            <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer" className="nav-link block">Free Tools</a>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-slate h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-full pl-10 pr-4 py-2 rounded-full text-sm bg-cyber-dark border border-cyber-teal/20 focus:border-cyber-teal focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
