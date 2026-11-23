// Address of the backend server.
// Keep it empty while using mock data. When the backend is ready, set it to 'http://localhost:5000'
const SERVER_URL = '';

// Returns a usable image address.
// - no path -> empty string
// - full web link (https://...) -> used as it is
// - anything else (/hotel1.jpg or /uploads/1.jpg) -> SERVER_URL is added in front
export function imageUrl(path) {
  if (!path) {
    return '';
  }
  if (path.startsWith('http') || path.startsWith('blob:')) {
    return path;
  }
  return SERVER_URL + path;
}
// 4500 -> ₹4,500
export function formatPrice(value) {
  return '₹' + Number(value).toLocaleString('en-IN');
}

// cut long text and add ...
export function truncate(text, max = 110) {
  if (!text) {
    return '';
  }
  if (text.length > max) {
    return text.slice(0, max) + '...';
  }
  return text;
}