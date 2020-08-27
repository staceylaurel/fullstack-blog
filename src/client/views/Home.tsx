import * as React from "react";
import api from "../utils/api-service";
import BlogCard from "../components/BlogCard";
import type { IBlog } from "../utils/Types";

const Home: React.FC<HomeProps> = (props) => {
  const [blogs, setBlogs] = React.useState<IBlog[]>([]);

  React.useEffect(() => {
    api("/api/blogs").then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <div>
      <h1 className="d-flex justify-content-center">Welcome to my Blog</h1>
      <main className="container">
        <section className="row justify-content-center mt-3">
          {blogs.map((blog) => {
            return <BlogCard blog={blog} key={blog.id} />;
          })}
        </section>
      </main>
    </div>
  );
};

interface HomeProps {}

export default Home;
