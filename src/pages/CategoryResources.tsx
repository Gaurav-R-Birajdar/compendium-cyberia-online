
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getResourcesByCategory, categories } from '@/data/resources';
import ResourceCard from '@/components/ResourceCard';
import Navbar from '@/components/Navbar';

const CategoryResources = () => {
  const { categoryId } = useParams();
  const resources = getResourcesByCategory(categoryId || '');
  const category = categories.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-cyber-blue">
        <Navbar />
        <div className="container mx-auto px-4 pt-32">
          <h1 className="text-2xl text-white">Category not found</h1>
          <Link to="/">
            <Button className="mt-4">
              <ArrowLeft className="mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-blue">
      <Navbar />
      <div className="container mx-auto px-4 pt-32">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="text-cyber-teal mb-4">
              <ArrowLeft className="mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-display font-bold mb-4 cyber-gradient-text">
            {category.name} Resources
          </h1>
          <p className="text-cyber-slate text-lg">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryResources;
