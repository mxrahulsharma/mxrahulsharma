import React from 'react';
import { Camera } from 'lucide-react';

const Photography = () => {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      category: 'Landscape'
    },
    {
      url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad',
      category: 'Nature'
    },
    {
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      category: 'Landscape'
    },
    {
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      category: 'Nature'
    }
  ];

  return (
    <section id="photography" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-16">
          <Camera size={32} className="text-blue-600" />
          <h2 className="text-3xl font-bold text-center">Photography</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={photo.url} 
                alt={`Photography ${index + 1}`}
                className="w-full h-64 object-cover transform transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-medium">{photo.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;