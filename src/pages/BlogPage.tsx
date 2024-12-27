import React, { useState } from 'react';
import BlogCard from '../components/blog/BlogCard';
import blogData from '../data/blog-posts.json';

const categories = ['All', 'Football', 'Basketball', 'Tennis'];

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogData.posts.filter(post => 
    selectedCategory === 'All' ? true : post.category === selectedCategory
  );

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Sports News
          </h1>
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;