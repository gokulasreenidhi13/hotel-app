import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HotelForm from '../components/HotelForm';
import SuccessPopup from '../components/SuccessPopup';
import { addHotel, updateHotel } from '../store/hotelsSlice';
import { Helmet } from 'react-helmet-async';

function HotelFormPage() {
  const { id } = useParams(); // undefined on /hotels/add
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels);

  // all hooks must come before any early return
  const [notice, setNotice] = useState('');

  // Escape: close the success popup if it is showing, otherwise leave the page
  useEffect(() => {
    function handleKey(ev) {
      if (ev.key === 'Escape') {
        setNotice('');
        navigate('/');
      }
    }

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [navigate]);

  // Edit mode: find the hotel, Add mode: stays undefined
  const initial = id ? hotels.find((h) => h.id === Number(id)) : undefined;

  if (id && !initial) {
    return (
      <div>
        <h2>Hotel not found</h2>
        <Link to="/">Back to hotels</Link>
      </div>
    );
  }

  function handleSave(data) {
    if (initial) {
      // keep the old hotel, overwrite the changed fields (id stays the same)
      dispatch(updateHotel({ ...initial, ...data }));
      setNotice('Hotel updated successfully');
    } else {
      dispatch(addHotel({ ...data, id: Date.now() }));
      setNotice('Hotel added successfully');
    }
    // no navigate here: we go back to the list when the popup closes
  }

  function handleClose() {
    setNotice('');
    navigate('/');
  }

  return (
    <div>
      <Helmet>
        <title>{initial ? 'Edit Hotel' : 'Add Hotel'} | StayFinder</title>
      </Helmet>

      <h2>{initial ? 'Edit hotel' : 'Add new hotel'}</h2>

      <HotelForm
        key={id}
        initial={initial}
        onSave={handleSave}
        onCancel={() => navigate('/')}
      />

      <SuccessPopup message={notice} onClose={handleClose} />
    </div>
  );
}

export default HotelFormPage;