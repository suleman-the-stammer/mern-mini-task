import  { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get('/api/v1/blog/all-blog');
      if (data?.success) {
        setBlogs(data?.blogs || []);
        console.log("Data fetched successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      {blogs.length > 0 ? (
       
          <BlogCard  blog={blogs} />
        
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
}

export default Blog;