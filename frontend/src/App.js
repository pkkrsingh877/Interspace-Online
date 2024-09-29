import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import Post from './components/Post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/new" element={<CreatePost />} />
        <Route path="/post/{id}" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
