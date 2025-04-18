
import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark py-12 border-t border-cyber-teal/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-display font-bold text-cyber-teal mb-2">Cyberia</h2>
            <p className="text-cyber-slate text-sm max-w-md">
              A curated collection of free computer science resources to help you learn and grow as a developer.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <div>
              <h3 className="text-white font-medium mb-3">Navigate</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-cyber-slate hover:text-cyber-teal text-sm transition-colors">Home</a></li>
                <li><a href="#categories" className="text-cyber-slate hover:text-cyber-teal text-sm transition-colors">Categories</a></li>
                <li><a href="#featured" className="text-cyber-slate hover:text-cyber-teal text-sm transition-colors">Featured</a></li>
                <li><a href="#about" className="text-cyber-slate hover:text-cyber-teal text-sm transition-colors">About</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-3">Connect</h3>
              <div className="flex space-x-3">
                <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 text-cyber-slate hover:text-cyber-teal hover:bg-white/10 transition-colors">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 text-cyber-slate hover:text-cyber-teal hover:bg-white/10 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cyber-slate text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Cyberia. All resources belong to their respective owners.
          </p>
          <p className="text-cyber-slate text-sm flex items-center">
            Made with <Heart className="h-3 w-3 text-cyber-pink mx-1" /> for the CS community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
