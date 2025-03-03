import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Join = () => {
  const [joinData, setJoinData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setJoinData({ ...joinData, [e.target.name]: e.target.value });
  };

  // Validate & Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!joinData.name.trim()) validationErrors.name = "Name is required";
    if (!joinData.email.trim()) validationErrors.email = "Email is required";
    if (!joinData.phone.trim()) validationErrors.phone = "Phone is required";
    if (!joinData.address.trim()) validationErrors.address = "Address is required";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const response = await fetch("http://localhost:5000/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(joinData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Show success message
      setSuccessMessage("🎉 Your form has been submitted successfully!");

      // Reset the form fields
      setJoinData({ name: "", email: "", phone: "", address: "" });

      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="card shadow-lg p-4">
          <h2 className="text-center text-primary fw-bold">Join as a Member</h2>
          <p className="text-center text-muted">Fill in your details to become a member</p>

          {/* Success message */}
          {successMessage && (
            <div className="alert alert-success text-center" role="alert">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Full Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                name="name"
                value={joinData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                name="email"
                value={joinData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Phone Number</label>
              <input
                type="text"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                name="phone"
                value={joinData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Address</label>
              <textarea
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                name="address"
                value={joinData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="3"
              ></textarea>
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>

            <button type="submit" className="btn btn-success w-100 fw-bold">
              Join Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Join;
