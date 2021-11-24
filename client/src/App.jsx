import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/recipes' element={<Home />} />
          <Route path='/recipes/:id' element={<RecipeDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
