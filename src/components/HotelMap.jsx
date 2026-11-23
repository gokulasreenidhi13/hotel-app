import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

// fix for the broken default marker icon in Vite (runs once)
L.Marker.prototype.options.icon = L.icon({
  iconUrl: icon,
  shadowUrl: shadow,
  iconAnchor: [12, 41],
});

// text floating above the visitor's pin (change it to anything you like)
const MY_LABEL = 'You are here';

// Moves the map when "position" changes. It draws nothing.
// It must be placed INSIDE <MapContainer> because useMap() needs the map.
function FlyTo({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 14); // [lat, lng], zoom level
    }
  }, [position, map]);

  return null;
}

// props: lat, lng, name
function HotelMap(props) {
  const hotelPosition = [Number(props.lat), Number(props.lng)];

  // the visitor's own position (null until they click the button)
  const [myPos, setMyPos] = useState(null);

  // Geolocation API built into the browser
  function findMe() {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setMyPos([pos.coords.latitude, pos.coords.longitude]),
      () => alert('Could not get your location')
    );
  }

    return (
    <div>
      <div className="map-box">
        <MapContainer center={hotelPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {/* hotel pin with a label that stays visible */}
          <Marker position={hotelPosition}>
            <Tooltip permanent direction="top" offset={[0, -30]} className="pin-label">
              {props.name}
            </Tooltip>
            <Popup>{props.name}</Popup>
          </Marker>

          {/* visitor pin, only after the button is clicked */}
          {myPos && (
            <Marker position={myPos}>
              <Tooltip permanent direction="top" offset={[0, -30]} className="pin-label pin-label-me">
                {MY_LABEL}
              </Tooltip>
            </Marker>
          )}

          <FlyTo position={myPos} />
        </MapContainer>
      </div>

      <button type="button" className="btn btn-primary btn-sm map-button" onClick={findMe}>
        Show my location
      </button>
    </div>
  );
}

export default HotelMap;