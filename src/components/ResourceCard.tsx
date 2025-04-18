
import React from 'react';
import { ExternalLink, Play, BookOpen, Film, List, Globe, Wrench } from 'lucide-react';
import { Resource } from '@/data/resources';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const getIcon = () => {
    switch (resource.type) {
      case 'video':
        return <Play className="h-4 w-4 text-cyber-pink" />;
      case 'playlist':
        return <List className="h-4 w-4 text-cyber-purple" />;
      case 'article':
        return <BookOpen className="h-4 w-4 text-cyber-teal" />;
      case 'course':
        return <Film className="h-4 w-4 text-cyber-teal" />;
      case 'tool':
        return <Wrench className="h-4 w-4 text-cyber-purple" />; // Changed from Tool to Wrench
      case 'website':
        return <Globe className="h-4 w-4 text-cyber-pink" />;
      default:
        return <Globe className="h-4 w-4 text-cyber-teal" />;
    }
  };

  return (
    <div className="glass-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyber-teal/10 hover:-translate-y-1 group">
      <div className="h-40 bg-gradient-to-br from-cyber-blue to-cyber-dark overflow-hidden relative">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-cyber-dark/90 to-transparent">
          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-cyber-dark/60 backdrop-blur-sm border border-white/10 text-cyber-slate">
            {getIcon()}
            <span className="ml-1 capitalize">{resource.type}</span>
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-display font-medium mb-2 text-white group-hover:text-cyber-teal transition-colors">{resource.title}</h3>
        <p className="text-cyber-slate text-sm mb-4 line-clamp-2">{resource.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-0.5 rounded-full bg-cyber-dark border border-cyber-teal/10 text-cyber-slate"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={resource.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-cyber-teal text-sm hover:text-cyber-teal/80 transition-colors"
        >
          Explore Resource
          <ExternalLink className="ml-2 h-3 w-3" />
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
