import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'




function SingleBlog() {
  const [ post, setPost ] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(`/api/blog/view.php?id=${id}`);
        const data = await response.json();
        if (data.status === 'success') {
          setPost(data.data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.log(error);
        console.error('Error fetching blog post');
      }
    };
    getPost();
  }, []);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-8"
        />
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          {/* <span>{blogPost.date}</span>
          <span>•</span>
          <span className="text-red-600">{blogPost.category}</span> */}
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt={post.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold">{post.name}</p>
            <p className="text-gray-600">Fitness Coach</p>
          </div>
        </div>
      </div>

      <div className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}

export default SingleBlog