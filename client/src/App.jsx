import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';
import RecipePost from './components/RecipePost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/recipes' element={<Home />} />
        <Route path='/recipes/:id' element={<RecipeDetail />} />
        <Route path='/recipe/post' element={<RecipePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;