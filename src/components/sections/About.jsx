import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: 'Clear Goals',
      description: 'We help you set and achieve your fitness goals with personalized plans.'
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: 'Expert Trainers',
      description: 'Our certified trainers provide professional guidance and support.'
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: 'Proven Results',
      description: 'Join thousands of satisfied members who achieved their fitness goals.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About FitZone</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're more than just a gym. We're a community dedicated to helping you achieve your fitness goals and live a healthier life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;