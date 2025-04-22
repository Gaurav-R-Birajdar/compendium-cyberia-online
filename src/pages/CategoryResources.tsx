
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getResourcesByCategory, categories } from '@/data/resources';
import ResourceCard from '@/components/ResourceCard';
import Navbar from '@/components/Navbar';
import { certificationsByCategory } from '@/data/certifications';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const CategoryResources = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [viewMode, setViewMode] = useState<"courses" | "certifications">("courses");
  const [certView, setCertView] = useState<"available" | "roadmaps">("available");
  const [cloudProvider, setCloudProvider] = useState<"all" | "aws" | "azure" | "google">("all");
  
  const resources = getResourcesByCategory(categoryId || '');
  const category = categories.find(cat => cat.id === categoryId);
  const certifications = certificationsByCategory[categoryId || ''] || [];

  // Filter resources by cloud provider if we're in the cloud-computing category
  const filteredResources = categoryId === 'cloud-computing' && cloudProvider !== 'all'
    ? resources.filter(resource => resource.tags.includes(cloudProvider))
    : resources;

  // Filter certifications by provider if we're in cloud-computing
  const filteredCertifications = categoryId === 'cloud-computing' && cloudProvider !== 'all'
    ? certifications.filter(cert => cert.provider.toLowerCase().includes(cloudProvider))
    : certifications;

  // Function to handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/placeholder.svg';
  };

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
          <p className="text-cyber-slate text-lg mb-6">{category.description}</p>

          {categoryId === 'cloud-computing' && (
            <Tabs defaultValue="all" className="mb-6">
              <TabsList>
                <TabsTrigger value="all" onClick={() => setCloudProvider("all")}>All Providers</TabsTrigger>
                <TabsTrigger value="aws" onClick={() => setCloudProvider("aws")}>AWS</TabsTrigger>
                <TabsTrigger value="azure" onClick={() => setCloudProvider("azure")}>Azure</TabsTrigger>
                <TabsTrigger value="google" onClick={() => setCloudProvider("google")}>Google Cloud</TabsTrigger>
              </TabsList>
            </Tabs>
          )}

          {certifications.length > 0 && (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

              {viewMode === "certifications" && (
                <ToggleGroup
                  type="single"
                  value={certView}
                  onValueChange={(val: string) => setCertView((val as "available"|"roadmaps") || "available")}
                  className="flex gap-2"
                >
                  <ToggleGroupItem value="available" variant={certView==='available' ? "outline":undefined} size="default">
                    Available Certifications
                  </ToggleGroupItem>
                  <ToggleGroupItem value="roadmaps" variant={certView==='roadmaps' ? "outline":undefined} size="default">
                    Certification Roadmaps
                  </ToggleGroupItem>
                </ToggleGroup>
              )}
            </div>
          )}
        </div>

        {(viewMode === "courses" || certifications.length === 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}

        {viewMode === "certifications" && certifications.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certView === "available" ? (
              // Show available certifications
              filteredCertifications.map(cert => (
                <div key={cert.id} className="glass-card rounded-lg overflow-hidden hover:shadow-lg transition-all group p-5 flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="h-6 w-6 text-cyber-yellow" />
                    <span className="font-bold text-lg text-white">{cert.title}</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-cyber-slate uppercase bg-cyber-dark px-2 py-1 rounded">
                      {cert.provider}
                    </span>
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
                    <img 
                      src={cert.badgeUrl} 
                      alt={cert.title + " badge"} 
                      className="w-20 h-20 object-contain my-2"
                      onError={handleImageError}
                    />
                  )}
                  {cert.tags && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {cert.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-cyber-dark border border-cyber-teal/10 text-cyber-slate">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-cyber-teal text-sm hover:text-cyber-teal/80 transition-colors underline mt-auto"
                  >
                    View Certification
                  </a>
                </div>
              ))
            ) : (
              // Show certification roadmaps
              filteredCertifications
                .filter(cert => cert.roadmap && cert.roadmap.length > 0)
                .map(cert => (
                  <div key={cert.id} className="glass-card rounded-lg overflow-hidden hover:shadow-lg transition-all group p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="h-6 w-6 text-cyber-yellow" />
                      <span className="font-bold text-lg text-white">{cert.provider} Career Path</span>
                    </div>
                    <div className="space-y-2">
                      {cert.roadmap?.map((step, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-cyber-pink">{index + 1}.</span>
                          <span className="text-cyber-slate">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryResources;
