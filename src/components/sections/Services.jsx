import React from 'react';
import { Dumbbell, Heart, Users, PersonStanding } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Dumbbell className="h-12 w-12 text-red-600" />,
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive weight training programs.'
    },
    {
      icon: <Heart className="h-12 w-12 text-red-600" />,
      title: 'Cardio Classes',
      description: 'Improve your cardiovascular health with our high-energy cardio sessions.'
    },
    {
      icon: <PersonStanding className="h-12 w-12 text-red-600" />,
      title: 'Yoga & Flexibility',
      description: 'Enhance flexibility and find inner peace with our yoga and stretching classes.'
    },
    {
      icon: <Users className="h-12 w-12 text-red-600" />,
      title: 'Personal Training',
      description: 'Get personalized attention and faster results with our expert trainers.'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of fitness programs designed to help you reach your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;