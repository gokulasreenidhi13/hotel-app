import { Routes, Route, Link } from 'react-router-dom';
import HotelList from './pages/HotelList';
import HotelDetail from './pages/HotelDetail';
import HotelFormPage from './pages/HotelFormPage';

function App() {
  return (
    <div>
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand">
            Stay<span>Finder</span>
          </Link>
          <Link to="/hotels/add" className="btn btn-light btn-sm">
            + Add Hotel
          </Link>
        </div>
      </header>

      <div className="content">
        <Routes>
          <Route path="/" element={<HotelList />} />
          <Route path="/hotels/add" element={<HotelFormPage />} />
          <Route path="/hotels/edit/:id" element={<HotelFormPage />} />
          <Route path="/hotels/:id" element={<HotelDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;