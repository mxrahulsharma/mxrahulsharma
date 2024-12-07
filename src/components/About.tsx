import React from 'react';
import { Code, Brain, Camera, Plane, Book } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I'm a passionate web developer and problem solver with a keen eye for design, photography and personality Development. 
              My journey in technology has led me to create innovative solutions and meaningful experiences.
            </p>
            <p className="text-lg text-gray-600">
              As the founder of Airbee, I'm dedicated to making travel accessible to everyone by helping 
              people explore the world on a budget.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Code, title: 'Web Development', desc: 'Creating beautiful, functional websites' },
              { icon: Brain, title: 'Problem Solver', desc: 'Finding innovative solutions' },
              { icon: Camera, title: 'Photography', desc: 'Capturing moments that matter' },
              { icon: Plane, title: 'Airbee Founder', desc: 'Making travel accessible' },
              { icon: Book, title: 'Content Creator', desc: 'Create Productive Content' },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg text-center">
                <item.icon className="mx-auto mb-4 text-blue-600" size={32} />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;