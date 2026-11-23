import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HotelMap from '../components/HotelMap';
import { imageUrl, formatPrice } from '../utils/config';
import { Helmet } from 'react-helmet-async';
function HotelDetail() {
  const { id } = useParams();
  const hotels = useSelector((state) => state.hotels);
  const hotel = hotels.find((h) => h.id === Number(id));

  // this check must come before using hotel.title etc.
  if (!hotel) {
    return (
      <div>
        <h2>Hotel not found</h2>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
         <Helmet>
        <title>{hotel.title} | StayFinder</title>
        <meta name="description" content={hotel.description.slice(0, 150)} />
      </Helmet>
      <Link to="/">Back to list</Link>

      <h2>{hotel.title}</h2>
      <img src={imageUrl(hotel.image)} alt={hotel.title} width="400" />
      <h3>{formatPrice(hotel.price)} / per night</h3>
      <p>{hotel.description}</p>
      <p>
        Location: {hotel.latitude}, {hotel.longitude}
      </p>

      <HotelMap key={hotel.id} lat={hotel.latitude} lng={hotel.longitude} name={hotel.title} />
    </div>
  );
}

export default HotelDetail;