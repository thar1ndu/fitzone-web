import React from 'react';
import { Check } from 'lucide-react';

const Membership = () => {
  const plans = [
    {
      name: 'Basic',
      price: '5000',
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic fitness assessment',
        'Access during off-peak hours'
      ]
    },
    {
      name: 'Premium',
      price: '9500',
      features: [
        'All Basic features',
        'Full access 24/7',
        'Group fitness classes',
        'Nutrition consultation',
        'Personal training session (1x/month)'
      ],
      popular: true
    },
    {
      name: 'Elite',
      price: '14000',
      features: [
        'All Premium features',
        'Unlimited group classes',
        'Weekly personal training',
        'Massage therapy (1x/month)',
        'Premium locker service'
      ]
    }
  ];

  return (
    <section id="membership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Membership Plans</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan that fits your fitness goals and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden ${
                plan.popular ? 'ring-2 ring-red-600 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-red-600 text-white text-center py-2">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
                <div className="text-center mb-8">
                  <span className="text-3xl font-bold">LKR{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-red-600 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-8 px-4 py-2 rounded-lg font-semibold transition duration-300 ${
                  plan.popular
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;