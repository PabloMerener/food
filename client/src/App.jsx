import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';
import RecipePost from './components/RecipePost';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/recipes' element={<Home />} />
          <Route path='/recipes/:id' element={<RecipeDetail />} />
          <Route path='/recipes/create' element={<RecipePost />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
