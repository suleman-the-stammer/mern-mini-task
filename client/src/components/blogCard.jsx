
import "../components/blogCard.css";

function BlogCard({ blog }) {
  return (
    <div className="outer">
      <div className="card">
        <div className="upper">
          <div className="dp"> </div>
          <div className="cardTitle">
            <h4>{blog.title}</h4>
            <p>{new Date(blog.createdAt).toLocaleString()}</p>
          </div>
        </div>

        <div className="photo">
          <img src={blog.image} alt={blog.title} />
        </div>

        <div className="details">{blog.description}</div>
        <div className="username">Posted by: {blog.user?.username}</div>
      </div>
    </div>
  );
}

export default BlogCard;