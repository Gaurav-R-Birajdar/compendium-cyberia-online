
import React from 'react';
import ResourceCard from './ResourceCard';
import { getFeaturedResources } from '@/data/resources';

const FeaturedResources = () => {
  const featuredResources = getFeaturedResources();
  
  return (
    <section id="featured" className="py-20 bg-cyber-dark/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-2 cyber-gradient-text">Featured Resources</h2>
        <p className="text-cyber-slate mb-12 max-w-2xl">
          Hand-picked resources to get you started on your learning journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;
