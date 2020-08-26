import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import  { json, User } from "../utils/API"


const Admin: React.FC<AdminProps> = (props) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [tagid, setTagid] = React.useState("");

  const { id } = useParams();
  const history = useHistory();

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });
    history.push("/");
  };

  const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    history.push("/");
  };

  React.useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then((res) => res.json())
      .then((blog) => {
        setTitle(blog.title);
        setContent(blog.content);
      });
  }, []);


  // private saving: boolean = false;

  // async handleBlogSubmit(e: React.FormEvent<HTMLFormElement>){

  //   e.preventDefault();

  //   if(this.saving) return;

  //   let blog: { authorid: number, title: string, body: string} = {
  //     authorid: User.userid,
  //     title: this.state.title,
  //     body: this.state.body
  //   };

  //   try{
  //     this.saving = true;
  //     let result = await json('./api/blogs', 'POST', blog);
  //     if(result){
  //       this.setState({
  //         title: "",
  //         body: "",
  //         saveStatus: "success"
  //       });
  //     }else {
  //       this.setState({ saveStatus: 'error' })
  //     }
  //   } catch (e) {
  //     this.setState({ saveStatus: 'error'});
  //           throw e;
  //   } finally {
  //     this.saving = false;
  //   }

  // }
  // componentDidMount() {
  //   if(User || User.userid === null || User.role !== 'admi'){
  //     this.this.props.history.replace('/login');
  //   }
  // }

  // try{
  //   
// if(this.state.saveStatus === 'success'){
//   this.alert = <div className= "alert alert-success p-1 m-3" role='alert'>Blog Added</div>
// }else if(this.state.saveStaus === 'error'){
//   this.alert = <div className= "alert alert-danger p-1 m-3" role='alert'>Error Adding Blog/div>

// }

  return (
    <>
      <h1>Editing Page</h1>
      <form>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={content} onChange={(e) => setContent(e.target.value)} />
        <input value={tagid} onChange={(e) => setTagid(e.target.value)} />
        <button onClick={handleEdit}> Somebody Save Me! </button>
        <button onClick={handleDelete}> Delete </button>
      </form>
    </>
  );
  
};

interface AdminProps {
}

export default Admin;
