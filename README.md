# StayFinder

StayFinder is a full stack hotel/property booking platform where users can browse, search, book, and post properties. The project demonstrates modern web development practices using React.js, Node.js, Express, and MongoDB.

---

## Features

- **User Authentication:** Register and login with JWT-based authentication.
- **Property Listings:** Browse and view details of various hotel properties.
- **Search:** Search for properties by name using the search bar in the header.
- **Booking:** Book a property (only for logged-in users).
- **Post Property:** Authenticated users can post new properties with image uploads.
- **Dashboard:** Protected dashboard for managing bookings and properties.
- **Google Maps Integration:** View property locations on a map.
- **Responsive UI:** Clean, modern, and mobile-friendly interface.

---

## Tech Stack

- **Frontend:** React.js, React Router, Context API, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT (jsonwebtoken), bcryptjs
- **File Uploads:** multer
- **Other:** dotenv, cors, express-validator

---

## Project Structure

```
src/
  App.jsx
  main.jsx
  index.css
  assets/
    Card.jsx
    Header.jsx
    Footer.jsx
    Search.jsx
    [images...]
  components/
    DashboardHeader.jsx
    ProtectedRoute.jsx
  pages/
    Home.jsx
    Dashboard.jsx
    login.jsx
    register.jsx
    PostProperty.jsx
  Properties/
    Hotel_1.jsx ... Hotel_5.jsx
  server/
    server.js
    .env
    models/
      User.js
      Booking.js
    routes/
      auth.js
      bookings.js
      properties.js
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shanub11/stayfinder.git
cd stayfinder
```

### 2. Install dependencies

#### For frontend:
```bash
npm install
```

#### For backend (inside `src/server`):
```bash
cd src/server
npm install
```

### 3. Set up environment variables

Create a `.env` file in `src/server` with the following:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Run the backend server

```bash
cd src/server
node server.js
```

### 5. Run the frontend

```bash
npm start
```

---

## Usage

- Register a new account or login.
- Use the search bar in the header to find properties by name.
- Click on a property card to view details and book (if logged in).
- Post a new property from the dashboard (if logged in).
- View your bookings and posted properties in the dashboard.

---

## Key Concepts & Learning

- **React Hooks & Context:** For state management and global search.
- **Protected Routes:** Only allow access to certain pages if authenticated.
- **Express Middleware:** For authentication, validation, and file uploads.
- **MongoDB Modeling:** Using Mongoose schemas for users, bookings, and properties.
- **Security:** Password hashing, JWT, and environment variables.
- **RESTful API Design:** Clean separation of concerns between frontend and backend.


## Author

- Shantanu Bhardwaj (mail to : shanub2003@gmail.com)
