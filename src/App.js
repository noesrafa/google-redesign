import './App.css';
import Home from './pages/Home'
import SearchPage from './pages/SearchPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      
      {/* === ROUTER DOM === */}
      <BrowserRouter>

        <Routes>
          {/* Search Page, this is the results page */}
          <Route path='/search' element={ <SearchPage/> }></Route>
          {/* Here the Home, the one with the search on */}
          <Route path='/' element={ <Home/> }></Route>
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
