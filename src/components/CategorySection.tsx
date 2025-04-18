
import React from 'react';
import { categories } from '@/data/resources';

const CategorySection = () => {
  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2 cyber-gradient-text">Resource Categories</h2>
        <p className="text-cyber-slate mb-12 max-w-2xl">
          Browse resources by category to find exactly what you need for your learning journey.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="glass-card rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyber-teal/10 cursor-pointer"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-display font-medium mb-2 text-white">{category.name}</h3>
              <p className="text-cyber-slate text-sm mb-4">{category.description}</p>
              <a href={`#${category.id}`} className="text-cyber-teal text-sm hover:text-cyber-teal/80 transition-colors">
                View resources →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
