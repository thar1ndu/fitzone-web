import React from 'react'




function SingleBlog() {
  const blogPost = {
    title: "10 Essential Exercises for Building Muscle",
    author: "John Smith",
    date: "March 15, 2024",
    category: "Workout Tips",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
    content: [
      {
        type: "paragraph",
        text: "Building muscle effectively requires a combination of proper exercise selection, nutrition, and consistency. In this comprehensive guide, we'll explore the most essential exercises that should be part of your muscle-building routine."
      },
      {
        type: "subheading",
        text: "1. Compound Exercises: The Foundation"
      },
      {
        type: "paragraph",
        text: "Compound exercises are multi-joint movements that work multiple muscle groups simultaneously. These exercises should form the core of your strength training program as they stimulate the most muscle growth and hormonal response."
      },
      {
        type: "list",
        items: [
          "Squats: The king of leg exercises",
          "Deadlifts: For overall strength and back development",
          "Bench Press: Essential for chest and triceps",
          "Pull-ups: Supreme back and bicep builder",
        ]
      },
    ],
    tags: ["Strength Training", "Muscle Building", "Workout Tips", "Fitness"]
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-8">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-8"
        />
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <span>{blogPost.date}</span>
          <span>•</span>
          <span className="text-red-600">{blogPost.category}</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt={blogPost.author}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold">{blogPost.author}</p>
            <p className="text-gray-600">Fitness Coach</p>
          </div>
        </div>
      </div>

      <div className="prose max-w-none">
        {blogPost.content.map((section, index) => {
          switch (section.type) {
            case 'paragraph':
              return <p key={index} className="text-gray-700 mb-6 leading-relaxed">{section.text}</p>;
            case 'subheading':
              return <h2 key={index} className="text-2xl font-bold mb-4">{section.text}</h2>;
            case 'list':
              return (
                <ul key={index} className="list-disc pl-6 mb-6">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-gray-700 mb-2">{item}</li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {blogPost.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default SingleBlog