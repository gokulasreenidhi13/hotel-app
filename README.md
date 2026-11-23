StayFinder - Hotel List App

StayFinder is a responsive hotel listing app. Users can add, edit and delete hotels, search and filter the list, and open a detail page that shows the hotel on a map.

Tech Stack

React
Redux Toolkit
React Router
React Helmet (react-helmet-async)
Leaflet / react-leaflet
Plain HTML and CSS

How to Run

Open a terminal in the project folder: cd hotel-app
Install packages: npm install
Start the app: npm run dev
Open the link it prints (usually http://localhost:5173)

Features

Add / Edit form: One reusable form component is used for both adding and editing. Fields are image, title, description, latitude, longitude and price. It checks that all fields are filled, latitude is between -90 and 90, longitude is between -180 and 180, and price is a positive number. Error messages show under each field.

Image upload: After choosing a file, a preview appears right away in the form. When editing, the current image is shown as the preview.

Hotel list: Each card shows the hotel image, title, price and a short description snippet, with Edit and Delete buttons.

Search and filter: Search by title, and filter by minimum and maximum price.
Pagination: Results are split into pages using a reusable pagination component (6 hotels per page).

Delete: Clicking Delete asks for confirmation first. After deleting, a success popup is shown.

Detail page: Clicking a card opens a page with the full hotel details and a map showing its location.

SEO: React Helmet sets the page title and meta description for each page (the detail page uses the hotel name). All images have alt text.

Single Page Application: React Router handles the routes, so pages change without a full reload.

Map and Geolocation API

The detail page uses Leaflet to show a map. The map is centred on the hotel's saved latitude and longitude, and a pin marks the hotel. The "Show my location" button uses the browser's Geolocation API (navigator.geolocation.getCurrentPosition). The browser asks for permission first. If the user allows it, a second marker appears at their current position. If they refuse, or the browser does not support it, an error message is shown and the map keeps showing only the hotel.

Backend

Backend skipped as permitted by the task email; hotels are stored in Redux, seeded with mock data.

Known Limitations
Data resets when the page is refreshed, because it is only kept in Redux (in memory) and not saved in a database.
Uploaded image previews are temporary, so images added in the form are lost on refresh.


Demo Video Link-https://drive.google.com/drive/folders/1J5zLBr2KAHfdv3O-DX4_IKNnT7hkkVUX?usp=sharing