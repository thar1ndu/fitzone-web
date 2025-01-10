import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import MainLayout from './components/layout/MainLayout'
import Blog from './pages/Blog';
import Home from './pages/Home';
import SingleBlog from './pages/SingleBlog';

function App() {

  return (
    <Router>
        <MainLayout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
        </MainLayout>
    </Router>
  )
}

export default App
