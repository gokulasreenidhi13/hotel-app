import { imageUrl, formatPrice, truncate } from '../utils/config';

function HotelCard(props) {
  // let Enter open the card too (only when the card itself is focused)
  function handleKey(e) {
    if (e.key === 'Enter' && e.target === e.currentTarget) {
      props.onOpen(props.hotel);
    }
  }
return (
    <div
      className="hotel-card"
      tabIndex={0}
      onClick={() => props.onOpen(props.hotel)}
      onKeyDown={handleKey}
    >
      <div className="hotel-card__img">
        <img src={imageUrl(props.hotel.image)} alt={props.hotel.title} />
      </div>

      <div className="hotel-card__body">
        <h3>{props.hotel.title}</h3>
        <p>{truncate(props.hotel.description)}</p>
      
      </div>

      <div className="hotel-card__side">
        <div className="price">{formatPrice(props.hotel.price)}</div>

        <div className="actions">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              props.onEdit(props.hotel);
            }}
          >
            Edit
          </button>

          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              props.onDelete(props.hotel);
            }}
          >
           
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;