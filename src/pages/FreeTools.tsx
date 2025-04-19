
import React from 'react';
import { ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const tools = [
  {
    name: 'Zero To Mastery',
    description: 'Learn to code with professional tutorials and courses. Go from Zero to Mastery in any technology.',
    url: 'https://zerotomastery.io/',
  },
  {
    name: 'Roadmap.sh',
    description: 'Community driven roadmaps, articles and resources for developers. Step by step guides and paths to learn different tools or technologies.',
    url: 'https://roadmap.sh/',
  },
  {
    name: 'freeCodeCamp',
    description: 'Learn to code for free with thousands of interactive tutorials. Get certified while learning to code.',
    url: 'https://www.freecodecamp.org/',
  },
  {
    name: 'The Odin Project',
    description: 'Your free and open source full stack curriculum. Learn web development for free.',
    url: 'https://www.theodinproject.com/',
  },
  {
    name: 'MDN Web Docs',
    description: 'The premier source for web development documentation. Resources for developers, by developers.',
    url: 'https://developer.mozilla.org/',
  },
  {
    name: 'DevDocs',
    description: 'Fast, offline, and free documentation browser for developers. Search through multiple API documentations.',
    url: 'https://devdocs.io/',
  }
];

const FreeTools = () => {
  return (
    <div className="min-h-screen bg-cyber-blue">
      <Navbar />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 cyber-gradient-text">
          Free Developer Tools
        </h1>
        <p className="text-cyber-slate text-lg mb-12 max-w-3xl">
          A curated collection of free tools and platforms to help you learn programming and advance your development career.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Card key={tool.name} className="bg-cyber-dark/50 border-cyber-teal/20 hover:border-cyber-teal/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  {tool.name}
                  <a 
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyber-teal hover:text-cyber-teal/80 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </CardTitle>
                <CardDescription className="text-cyber-slate">
                  {tool.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeTools;
