
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getResourcesByCategory, categories } from '@/data/resources';
import ResourceCard from '@/components/ResourceCard';
import Navbar from '@/components/Navbar';
// @ts-ignore
import { certificationsByCategory } from '@/data/certifications';

// Toggle Button UI from shadcn/ui, fallback to simple version for now
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"; 

const CategoryResources = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [viewMode, setViewMode] = useState<"courses" | "certifications">("courses");
  const resources = getResourcesByCategory(categoryId || '');
  const category = categories.find(cat => cat.id === categoryId);

  // Get certifications for this category
  const certifications = certificationsByCategory[categoryId || ''] || [];

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

          {certifications.length > 0 && (
            <div className="my-6">
              <ToggleGroup
                type="single"
                value={viewMode}
                onValueChange={(val: string) => setViewMode((val as "courses"|"certifications") || "courses")}
                className="flex gap-2"
              >
                <ToggleGroupItem value="courses" variant={viewMode==='courses' ? "outline":undefined} size="default">
                  Courses
                </ToggleGroupItem>
                <ToggleGroupItem value="certifications" variant={viewMode==='certifications' ? "outline":undefined} size="default">
                  <Award className="inline mr-1 h-4 w-4" /> Global Certifications
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          )}
        </div>

        {(viewMode === "courses" || certifications.length === 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}

        {viewMode === "certifications" && certifications.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map(cert => (
              <div key={cert.id} className="glass-card rounded-lg overflow-hidden hover:shadow-lg transition-all group p-5 flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-6 w-6 text-cyber-yellow" />
                  <span className="font-bold text-lg text-white">{cert.title}</span>
                </div>
                <div className="mb-2">
                  <span className="text-xs font-semibold text-cyber-slate uppercase bg-cyber-dark px-2 py-1 rounded">{cert.provider}</span>
                </div>
                <div className="mb-3 text-cyber-slate">{cert.description}</div>
                <div className="mb-2">
                  {cert.options && cert.options.length > 0 && (
                    <span className="block text-xs text-cyber-teal">
                      Options: {cert.options.join(', ')}
                    </span>
                  )}
                </div>
                {cert.badgeUrl && (
                  <img src={cert.badgeUrl} alt={cert.title + " badge"} className="w-20 h-20 object-contain my-2" />
                )}
                {cert.tags && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {cert.tags.map(tag => (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-cyber-dark border border-cyber-teal/10 text-cyber-slate" key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-cyber-teal text-sm hover:text-cyber-teal/80 transition-colors underline mt-auto">View Certification</a>
                {cert.roadmap && cert.roadmap.length > 1 && (
                  <div className="mt-4">
                    <span className="font-semibold text-cyber-pink text-xs">Recommended Roadmap:</span>
                    <ol className="list-decimal ml-6 text-xs text-cyber-slate mt-1">
                      {cert.roadmap.map(step => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryResources;
