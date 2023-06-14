// modules
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import PostList from "./components/PostList/PostList";
import NewPost from "./components/NewPost/NewPost";
import getRequest from "./requests/getRequest.js";

function App() {
  const [posts, setPosts] = useState(null);
  const [isloading, setloading] = useState(false);

  useEffect(() => {
    console.log('useEffect app js');
    const newData = getRequest(process.env.REACT_APP_POSTS_URL, "posts", setloading);
    newData.then(data => setPosts(data));
  }, []
  );

  return (
    <div className="App">
      <p className="notice">
        для работы приложения требуется паралельный активный роутер{" "}
        <strong>запусти в терминале "cd /backend/ && npm start"</strong>
      </p>
      <hr />
      <Router>
        <div className="page">
          <Routes>
            <Route path="/" element={<PostList posts={posts} loading={isloading} />} />
            <Route path="/posts/new" element={<NewPost />} />
            <Route path="/posts/:id" element={<div>post</div>} />
            <Route path="/pists/edit/:id" element={<div>edit post</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
