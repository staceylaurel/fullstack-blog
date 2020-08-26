import * as React from "react";
import type { IBlog } from "../utils/Types";
import { Link } from "react-router-dom";
import { json } from "../utils/API"
import BlogCard from "../components/BlogCard";

const Home: React.FC<HomeProps> = (props) => {
  const [blogs, setBlogs] = React.useState<IBlog[]>([]);

  React.useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((blogs) => setBlogs(blogs));
  }, []);

  // async componentDidMount () {
  //   try {
  //     let blogs = await json('/api/blogs');
  //   }catch (e) {
  //     console.log(e);
  //   }
  // }

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
