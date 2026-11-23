import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HotelCard from '../components/HotelCard';
import Pagination from '../components/Pagination';
import SuccessPopup from '../components/SuccessPopup';
import { deleteHotel } from '../store/hotelsSlice';
import { Helmet } from 'react-helmet-async';
const PAGE_SIZE = 5;

function HotelList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels);

  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [page, setPage] = useState(1);
  const [notice, setNotice] = useState('');

  const filtered = hotels.filter((hotel) => {
    const matchesTitle = hotel.title.toLowerCase().includes(search.toLowerCase());
    const aboveMin = minPrice === '' || hotel.price >= Number(minPrice);
    const belowMax = maxPrice === '' || hotel.price <= Number(maxPrice);
    return matchesTitle && aboveMin && belowMax;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const safePage = Math.min(page, Math.max(totalPages, 1));
  const start = (safePage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  function handleSearch(e) {
    setSearch(e.target.value);
    setPage(1);
  }

  function handleMin(e) {
    setMinPrice(e.target.value);
    setPage(1);
  }

  function handleMax(e) {
    setMaxPrice(e.target.value);
    setPage(1);
  }

  function handleDelete(hotel) {
    const sure = window.confirm('Delete ' + hotel.title + '?');
    if (!sure) {
      return;
    }
    dispatch(deleteHotel(hotel.id));
    setNotice('Hotel deleted successfully');
  }

  return (
    <div className="page">
        <Helmet>
        <title>Hotels | StayFinder</title>
        <meta name="description" content="Browse hotels. Search by title and filter by price." />
      </Helmet>
      
      <aside className="filters">
        <h3>Filters</h3>

        <label htmlFor="search">Search</label>
        <input id="search" type="search" placeholder="Hotel title" value={search} onChange={handleSearch} />

        <label htmlFor="min">Min price</label>
        <input id="min" type="number" placeholder="0" value={minPrice} onChange={handleMin} />

        <label htmlFor="max">Max price</label>
        <input id="max" type="number" placeholder="10000" value={maxPrice} onChange={handleMax} />
      </aside>

      <main>
                <h2>Hotels ({filtered.length})</h2>

        {filtered.length === 0 && <p>No hotels found</p>}

        {pageItems.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            onOpen={() => navigate('/hotels/' + hotel.id)}
            onEdit={() => navigate('/hotels/edit/' + hotel.id)}
            onDelete={() => handleDelete(hotel)}
          />
        ))}

        <Pagination page={safePage} totalPages={totalPages} onChange={setPage} />
      </main>

      <SuccessPopup message={notice} onClose={() => setNotice('')} />
    </div>
  );
}

export default HotelList;