import React, { useState } from 'react';

const VehicleShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const vehicles = [
    { id: 1, name: 'Mercedes G63', category: 'luxury', price: 'AED 850,000', image: '/assets/images/g63.jpg' },
    { id: 2, name: 'Range Rover SV', category: 'suv', price: 'AED 720,000', image: '/assets/images/rangerover.jpg' },
    { id: 3, name: 'Porsche 911', category: 'sports', price: 'AED 650,000', image: '/assets/images/porsche.jpg' },
  ];

  const filteredVehicles = activeFilter === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.category === activeFilter);

  return (
    <section id="vehicles" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">OUR VEHICLE COLLECTION</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
          Explore our premium selection of protected vehicles
        </p>
        
        <div className="flex justify-center mb-12 space-x-4">
          {['all', 'luxury', 'suv', 'sports'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full uppercase text-sm font-medium ${activeFilter === filter ? 'bg-gold-500 text-black' : 'bg-gray-800 text-white'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                <p className="text-gold-500 font-bold mb-4">{vehicle.price}</p>
                <button className="w-full bg-green-600text-white py-2 rounded hover:bg-gray-800 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;