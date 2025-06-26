import { useState } from "react";
import DashboardHeader from "../components/dashboardHeader";

function PostProperty() {
  const [form, setForm] = useState({
    propertyName: "",
    propertyType: "",
    location: "",
    price: "",
    propertyImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "propertyImage") {
      setForm({ ...form, propertyImage: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const { propertyName, propertyType, location, price, propertyImage } = form;
  const formData = new FormData();
  formData.append("propertyName", propertyName);
  formData.append("propertyType", propertyType);
  formData.append("location", location);
  formData.append("price", price); // Don't convert to Number here
  formData.append("propertyImage", propertyImage);

  try {
    const response = await fetch("http://localhost:5000/api/properties", {
      method: "POST",
      body: formData,
      // Do NOT set Content-Type header when using FormData!
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to post property");
    }
    alert("Property posted successfully!");
    setForm({
      propertyName: "",
      propertyType: "",
      location: "",
      price: "",
      propertyImage: null,
    });
  } catch (err) {
    alert("Error: " + err.message);
  }
};
  return (
    <>
      <DashboardHeader />
      <div className="post-property-container">
        <div className="post-property-header">
          <h1>Post Your Property</h1>
          <p>Share your property details with us to get started.</p>
          <div className="post-property-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="propertyName">Property Name</label>
                <input
                  type="text"
                  id="propertyName"
                  name="propertyName"
                  value={form.propertyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="propertyType">Property Type</label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={form.propertyType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="villa">Villa</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price per Night</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="propertyImage">Property Image</label>
                <input
                  type="file"
                  id="propertyImage"
                  name="propertyImage"
                  accept="image/*"
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Post Property</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostProperty;