// modules
import "./App.css";
import useRequest from "./hooks/useRequest";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import PostList from "./components/ui/PostList/PostList";

function App() {
  const [ prefs, setPrefs ] = useState({
    serverUrl: 'http://localhost:7777/',
  })
  const { data, isLoading, error } = useRequest(prefs.serverUrl, { opts: 'posts', })
  const [ posts, setPosts ] = useState(data);
  
  // todo remove logs
  console.log('App(data):', data);
  console.log('App(isLoading):', isLoading);
  console.log('App(error):', error);
  
  return (
    <div className="App">
      <p className="notice">для работы приложения требуется паралельный активный роутер <strong>запусти в терминале "cd /backend/ && npm start"</strong></p>
      <hr />
      <Router>
        <div className="page">
          <Routes>
            <Route path="/" element={<PostList posts={posts} /> } />
            <Route path="/posts/new" element={<div>new</div>} />
            <Route path="/posts/:id" element={<div>post</div>} />
            <Route path="/pists/edit/:id" element={<div>edit post</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
