import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import hotel_2 from '../assets/hotel_2.jpeg';
import hotel_3 from '../assets/hotel_3.jpeg';
import hotel_5 from '../assets/hotel_5.jpeg';

function Hotel_2() {
  const [form, setForm] = useState({
    checkin: '',
    checkout: '',
    name: '',
    persons: '',
    contact: ''
  });

  // Example coordinates (replace with your property's actual location)
  const propertyLocation = { lat: 28.6139, lng: 77.2090 }; // Delhi, India

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });
    if (!response.ok) {
      throw new Error('Failed to book property');
    }
    alert('Booking successful!');
    setForm({
      checkin: '',
      checkout: '',
      name: '',
      persons: '',
      contact: ''
    });
  } catch (err) {
    alert('Booking failed: ' + err.message);
  }
};

  return (
    <>
      <div className="property-row">
        <img src={hotel_2} alt="Main" className="property-image-main" />
        <div className="property-side-column">
          <img src={hotel_3} alt="Side 1" className="property-image-2" />
          <img src={hotel_5} alt="Side 2" className="property-image-3" />
        </div>
      </div>
      <div className="property-details">
        <div className='property-header'> 
          <h3 className='property-title'>Property Details</h3>
          <p>Location: Mumbai,India</p>
          <p>Amenities: Free Wi-Fi, Pool, Spa, Restaurant</p>
          <p>Price: $175 per night</p>
        </div>
      </div>  

      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', margin: '30px 0' }}>
        <form onSubmit={handleSubmit} className='booking-form' style={{ maxWidth: 400, flex: 1 }}>
          <h3>Book this property</h3>
          {/* ...form fields as before... */}
          <div>
            <label>Check-in Date:</label>
            <input
              type="date"
              name="checkin"
              value={form.checkin}
              onChange={handleChange}
              required
              style={{ width: '100%', marginBottom: 10 }}
            />
          </div>
          <div>
            <label>Check-out Date:</label>
            <input
              type="date"
              name="checkout"
              value={form.checkout}
              onChange={handleChange}
              required
              style={{ width: '100%', marginBottom: 10 }}
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ width: '100%', marginBottom: 10 }}
            />
          </div>
          <div>
            <label>Number of Persons:</label>
            <input
              type="number"
              name="persons"
              value={form.persons}
              onChange={handleChange}
              min="1"
              required
              style={{ width: '100%', marginBottom: 10 }}
            />
          </div>
          <div>
            <label>Contact Number:</label>
            <input
              type="tel"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              required
              style={{ width: '100%', marginBottom: 10 }}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: 8 }}>Book Now</button>
        </form>
        <div style={{ flex: 1, height: '100%' }}>
          <LoadScript googleMapsApiKey="AIzaSyBkeJLaXt_KZeyaOelVPVcU737IslVtT9E">
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%', minHeight: 400, borderRadius: 16 }}
              center={propertyLocation}
              zoom={15}
            >
              <Marker position={propertyLocation} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </>
  );
}

export default Hotel_2;