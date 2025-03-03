import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Getintouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
    
            const data = await response.json();
            if (data.success) {
                alert("Your Query has been submitted successfully!");
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                alert("Error: " + data.message);
            }
        } catch (error) {
            alert("Network error. Please try again later.");
        }
    };
    

    return (
        <>
            <Header />
            <div className="container py-5">
                <div className="text-center mb-4">
                    <h2 className="text-black">Frequently Asked Questions</h2>
                    <p className="text-secondary">Feel free to reach out to us with your queries.</p>
                </div>
                
                <div className="card p-4 shadow-sm mb-4 bg-light">
                    <h3 className="text-orange">For Corporate Partnerships</h3>
                    <p>Contact Jagmag Keshari Trustee at <strong>+91 9335338714</strong> or email us at <a href="mailto:jagmagkeshari@gmail.com">jagmagkeshari@gmail.com</a></p>
                </div>
                
                <div className="card p-4 shadow-sm mb-4 bg-light">
                    <h3 className="text-orange">For General Queries</h3>
                    <p>Email us at <a href="mailto:jagmagkeshari@gmail.com">jagmagkeshari@gmail.com</a></p>
                </div>
                
                <div className="card p-4 shadow-sm bg-light">
                    <h3 className="text-orange">Helpdesk</h3>
                    <p>For grievances, suggestions, or queries, kindly write to us below.</p>
                    <form onSubmit={handleSubmit} className="mt-3">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" id="name" name="name" className="form-control" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" name="email" className="form-control" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="tel" id="phone" name="phone" className="form-control" placeholder="Enter Your Contact No" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea id="message" name="message" className="form-control" placeholder="Enter Your Message" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-dark w-100">Submit</button>
                    </form>
                </div>
                
                <div className="mt-5 text-center">
                    <h3 className="text-black">Visit Us Here</h3>
                    <h4 className="text-orange">Head Office</h4>
                    <p className='mb-3 rounded 50%'>Baba Bhole Nagar, Lohta, Varanasi 221107 , Uttar Pradesh</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Getintouch;
