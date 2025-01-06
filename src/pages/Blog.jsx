import React from 'react';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Exercises for Building Muscle',
      category: 'Workout Tips',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e',
      excerpt: 'Learn the fundamental exercises that will help you build muscle effectively and achieve your fitness goals.',
      author: 'John Smith'
    },
    {
      id: 2,
      title: 'Nutrition Guide for Fitness Enthusiasts',
      category: 'Nutrition',
      date: 'March 12, 2024',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554',
      excerpt: 'Discover the best foods and meal timing strategies to support your workout routine and recovery.',
      author: 'Sarah Johnson'
    },
    {
      id: 3,
      title: 'Benefits of Morning Workouts',
      category: 'Lifestyle',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5',
      excerpt: 'Find out why morning workouts could be the key to achieving your fitness goals and improving your daily routine.',
      author: 'Mike Wilson'
    },
    {
      id: 4,
      title: 'The Ultimate Guide to HIIT Training',
      category: 'Workout Tips',
      date: 'March 8, 2024',
      image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3',
      excerpt: 'Everything you need to know about High-Intensity Interval Training and its benefits for fat loss.',
      author: 'Emma Davis'
    },
    {
      id: 5,
      title: 'Recovery Techniques for Athletes',
      category: 'Recovery',
      date: 'March 6, 2024',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
      excerpt: 'Effective methods to speed up recovery and prevent injuries during intense training periods.',
      author: 'Tom Brown'
    },
    {
      id: 6,
      title: 'Plant-Based Protein Sources',
      category: 'Nutrition',
      date: 'March 4, 2024',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      excerpt: 'Complete guide to getting enough protein on a plant-based diet for muscle growth and recovery.',
      author: 'Lisa Green'
    },
    {
      id: 7,
      title: 'Mindfulness and Exercise',
      category: 'Mental Health',
      date: 'March 2, 2024',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
      excerpt: 'How combining mindfulness with exercise can enhance your overall well-being and performance.',
      author: 'David Chen'
    },
    {
      id: 8,
      title: 'Home Workout Essentials',
      category: 'Equipment',
      date: 'February 28, 2024',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
      excerpt: 'Must-have equipment and setup tips for creating an effective home gym on any budget.',
      author: 'Rachel White'
    },
    {
      id: 9,
      title: 'The Science of Weight Loss',
      category: 'Weight Management',
      date: 'February 26, 2024',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
      excerpt: 'Understanding the science behind sustainable weight loss and how to achieve your goals.',
      author: 'Dr. James Miller'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Fitness Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-red-600 text-sm font-semibold">{post.category}</span>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold mb-2 hover:text-red-600 transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By {post.author}</span>
                <button className="text-red-600 hover:text-red-700 font-semibold">
                  Read More →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;