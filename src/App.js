// modules
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import PostList from "./components/ui/PostList/PostList";

function App() {
  return <div className="App">
    <p className="notice">для работы приложения требуется паралельный активный роутер <strong>запусти в терминале "cd /backend/ && npm start"</strong></p>
    <Router>
      <div className="page">
        <Routes>
          <Route path="/" element={<PostList posts={null} /> } />
          <Route path="/posts/new" element={<div>new</div>} />
          <Route path="/posts/:id" element={<div>post</div>} />
          <Route path="/pists/edit/:id" element={<div>edit post</div>} />
        </Routes>
      </div>
    </Router>
  </div>;
}

export default App;
