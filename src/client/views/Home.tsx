import * as React from "react";
import type { IBlog } from "../utils/types";
import { Link } from "react-router-dom";


const Home: React.FC<HomeProps> = (props) => {
  const [blogs, setBlogs] = React.useState<IBlog[]>([]);

  React.useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <main className="container">
        <section className="row justify-content-center mt-3">
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h6 className="text-primary">{blog.title}</h6>
            <p>{blog.content}</p>
            
            <Link to= {`/${blog.id}/blogdetails`} >Go To Details</Link>
          </div>
        );
      })}
      </section>
    </main>
  );
};

interface HomeProps {}

export default Home;