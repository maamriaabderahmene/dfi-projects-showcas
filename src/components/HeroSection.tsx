
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="flex flex-wrap gap-6 items-center">
              <img 
                src="/lovable-uploads/8d3d3f18-123f-4364-b2c1-8dcbaeb69032.png" 
                alt="ENSTA Logo" 
                className="h-16" 
              />
              <img 
                src="/lovable-uploads/ccd632fd-7ce1-40ad-92ba-c6e326cad98a.png" 
                alt="DFI Logo" 
                className="h-12" 
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">PrepaNova</span>
              <span className="block text-3xl md:text-4xl mt-2 text-ensta-yellow font-medium">1st Edition</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
              Discover innovative projects from the "formation de base en informatique" program
              at the École Nationale des Technologies Avancées.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-ensta-blue hover:bg-ensta-darkblue text-white">
                <Link to="/projects">
                  Explore Projects
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/dfi">Learn about DFI</Link>
              </Button>
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>Event date: <span className="font-semibold">04 May 2025</span></p>
              <p>Supervised by: <span className="font-semibold">El Hadi Khoumeri</span></p>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <img 
              src="/lovable-uploads/bd61939b-cde0-48a0-9dd7-fce621260b8a.png" 
              alt="PrepaNova Poster" 
              className="max-h-[500px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative shapes */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-ensta-yellow/10 dark:bg-ensta-yellow/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-ensta-blue/10 dark:bg-ensta-blue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
