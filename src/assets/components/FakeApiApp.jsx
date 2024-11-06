import { useState, useEffect } from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";

export default function FakeApiApp() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const posts = await response.json();
      setData(posts.reverse()); 
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handlePostSubmit = (e) => {
  e.preventDefault()
    if (newPost.title && newPost.body) {
      setData([{ ...newPost, id: data.length + 1 }, ...data]);
      setNewPost({ title: "", body: "" }); 
    }
  };

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <>
        <PostForm
          title={newPost.title}
          body={newPost.body}
          onInputChange={handleInputChange}
          onFormSubmit={handlePostSubmit}
        />
        <PostsContainer posts={data} />
      </>}
    </div>
  );
}