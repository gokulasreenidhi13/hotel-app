import { useState } from 'react';
import { imageUrl } from '../utils/config';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// text must contain at least one letter (any language)
function hasLetter(text) {
  return /\p{L}/u.test(text);
}

// One form for both Add and Edit.
// props: initial (undefined = Add mode, hotel object = Edit mode), onSave(data), onCancel
function HotelForm(props) {
  const initial = props.initial;

  const [title, setTitle] = useState(initial ? initial.title : '');
  const [description, setDescription] = useState(initial ? initial.description : '');
  const [latitude, setLatitude] = useState(initial ? String(initial.latitude) : '');
  const [longitude, setLongitude] = useState(initial ? String(initial.longitude) : '');
  const [price, setPrice] = useState(initial ? String(initial.price) : '');
  const [preview, setPreview] = useState(initial ? initial.image : '');
  const [errors, setErrors] = useState({});

  // check every field and return an object of error messages
  function validate() {
    const e = {};

    const t = title.trim();
if (t.length < 3) {
  e.title = 'Title must be at least 3 characters';
} else if (t.length > 60) {
  e.title = 'Title must be 60 characters or fewer';
} else if (!hasLetter(t)) {
  e.title = 'Title must contain letters, not only numbers or symbols';
}


   const d = description.trim();
if (d.length < 10) {
  e.description = 'Description must be at least 10 characters';
} else if (d.length > 300) {
  e.description = 'Description must be 300 characters or fewer';
} else if (!hasLetter(d)) {
  e.description = 'Description must contain letters, not only numbers or symbols';
}

    if (latitude === '' || Number.isNaN(Number(latitude)) || Number(latitude) < -90 || Number(latitude) > 90) {
      e.latitude = 'Latitude must be a number between -90 and 90';
    }

    if (longitude === '' || Number.isNaN(Number(longitude)) || Number(longitude) < -180 || Number(longitude) > 180) {
      e.longitude = 'Longitude must be a number between -180 and 180';
    }

    if (price === '' || Number.isNaN(Number(price)) || Number(price) <= 0) {
      e.price = 'Price must be greater than 0';
    }

    if (!preview) {
      e.image = 'Please choose an image';
    }

    return e;
  }

  function handleFile(ev) {
    const file = ev.target.files[0];
    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      setErrors({ ...errors, image: 'Only image files are allowed' });
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrors({ ...errors, image: 'Image must be 2 MB or smaller' });
      return;
    }

    setPreview(URL.createObjectURL(file));
    setErrors({ ...errors, image: '' });
  }

  function handleSubmit(ev) {
    ev.preventDefault(); // stops the page from reloading

    const e = validate();
    setErrors(e);

    // no error messages means the form is valid
    if (Object.keys(e).length === 0) {
      props.onSave({
        title: title.trim(),
        description: description.trim(),
        latitude: Number(latitude),
        longitude: Number(longitude),
        price: Number(price),
        image: preview,
      });
    }
  }

  return (
    <form className="card form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="image">Hotel image</label>
        <div className="image-upload">
          <div className="image-preview">
            {preview ? <img src={imageUrl(preview)} alt="Preview of the hotel" /> : <span>No image selected</span>}
          </div>
          <input id="image" type="file" accept="image/*" onChange={handleFile} />
        </div>
        {errors.image && <p className="error-text">{errors.image}</p>}
      </div>

      <div className="field">
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={(ev) => setTitle(ev.target.value)} />
        {errors.title && <p className="error-text">{errors.title}</p>}
      </div>

      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows="5"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        {errors.description && <p className="error-text">{errors.description}</p>}
      </div>

      <div className="row-2">
        <div className="field">
          <label htmlFor="latitude">Latitude</label>
          <input id="latitude" type="number" step="any" value={latitude} onChange={(ev) => setLatitude(ev.target.value)} />
          {errors.latitude && <p className="error-text">{errors.latitude}</p>}
        </div>

        <div className="field">
          <label htmlFor="longitude">Longitude</label>
          <input id="longitude" type="number" step="any" value={longitude} onChange={(ev) => setLongitude(ev.target.value)} />
          {errors.longitude && <p className="error-text">{errors.longitude}</p>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="price">Price per night (₹)</label>
        <input id="price" type="number" value={price} onChange={(ev) => setPrice(ev.target.value)} />
        {errors.price && <p className="error-text">{errors.price}</p>}
      </div>

      <div className="form-actions">
        <button type="button" className="btn btn-outline" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {initial ? 'Update hotel' : 'Add hotel'}
        </button>
      </div>
    </form>
  );
}

export default HotelForm;