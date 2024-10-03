import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import CreatePost from './components/posts/CreatePost';
import PostList from './components/posts/PostList';
import Post from './components/posts/Post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/new" element={<CreatePost />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
