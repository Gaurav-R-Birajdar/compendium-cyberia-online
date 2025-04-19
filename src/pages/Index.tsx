import React, { useState } from 'react';
import { ArrowRight, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import CategorySection from '@/components/CategorySection';
import FeaturedResources from '@/components/FeaturedResources';
import ResourceCard from '@/components/ResourceCard';
import Footer from '@/components/Footer';
import { getResourcesByCategory, categories } from '@/data/resources';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const categoryResources = getResourcesByCategory(activeCategory);

  return (
    <div className="min-h-screen bg-cyber-blue">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              The Ultimate <span className="cyber-gradient-text">CS Resource</span> Compendium
            </h1>
            <p className="text-cyber-slate text-lg md:text-xl mb-8 leading-relaxed">
              Discover free resources to master programming, web development, data science, and more. All curated in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button className="bg-gradient-to-r from-cyber-purple to-cyber-pink hover:opacity-90 transition-opacity text-white">
                Explore Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyber-slate h-4 w-4" />
                <input 
                  type="text" 
                  placeholder="Search for a topic..." 
                  className="pl-10 pr-4 py-2 rounded-md w-full sm:w-64 bg-cyber-dark border border-cyber-teal/20 focus:border-cyber-teal focus:outline-none"
                />
              </div>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="#categories" 
                className="inline-flex flex-col items-center text-cyber-slate hover:text-cyber-teal transition-colors"
              >
                <span className="text-sm mb-2">Scroll to browse</span>
                <ChevronDown className="h-5 w-5 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-12 bg-cyber-dark/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-cyber-teal">100+</p>
              <p className="text-cyber-slate text-sm">Video Tutorials</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-cyber-purple">50+</p>
              <p className="text-cyber-slate text-sm">Free Courses</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-cyber-pink">30+</p>
              <p className="text-cyber-slate text-sm">Learning Paths</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-white">6</p>
              <p className="text-cyber-slate text-sm">Subject Categories</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <CategorySection />
      
      {/* Featured Resources */}
      <FeaturedResources />
      
      {/* Category Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 cyber-gradient-text">Browse by Category</h2>
          
          <div className="mb-10 overflow-x-auto pb-4">
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? 'bg-cyber-teal/20 text-cyber-teal border border-cyber-teal/30'
                      : 'bg-cyber-dark/50 text-cyber-slate border border-transparent hover:border-cyber-teal/10 hover:text-cyber-teal/80'
                  }`}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button className="bg-transparent border border-cyber-teal text-cyber-teal hover:bg-cyber-teal/10 transition-colors">
              View All Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* About */}
      <section id="about" className="py-20 bg-cyber-dark/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 cyber-gradient-text">About EduLinker</h2>
            <p className="text-cyber-slate text-lg mb-8 leading-relaxed">
              EduLinker is a curated collection of free Computer Science resources from across the web.
              Our mission is to make quality CS education accessible to everyone by organizing the best
              free resources available online.
            </p>
            <p className="text-cyber-slate mb-8">
              Have a resource to suggest? Want to contribute? <a href="#" className="cyber-link">Contact us</a>.
            </p>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto glass-card rounded-lg p-8 border border-cyber-teal/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 text-white">Stay Updated</h2>
              <p className="text-cyber-slate">
                Get notified when we add new resources and features.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-md bg-cyber-dark border border-cyber-teal/20 focus:border-cyber-teal focus:outline-none"
              />
              <Button className="bg-gradient-to-r from-cyber-purple to-cyber-pink hover:opacity-90 transition-opacity text-white whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
