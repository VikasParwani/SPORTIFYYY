import React from 'react';
import { Calendar } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
            {post.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {formattedDate}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            By {post.author}
          </span>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            Read More →
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;