import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:5000/join");
        if (!response.ok) {
          throw new Error("Failed to fetch members");
        }
        const data = await response.json();
        setMembers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <>
      <Header />
      <div className="container my-5">
        <h2 className="text-center text-primary fw-bold">Our Members</h2>
        <p className="text-center text-muted">Meet the wonderful people who joined us</p>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-danger text-center">{error}</p>}
        <div className="row">
          {members.map((member) => (
            <div key={member.id} className="col-md-4">
              <div className="card shadow-lg p-3 mb-4">
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text"><strong>Email:</strong> {member.email}</p>
                  <p className="card-text"><strong>Phone:</strong> {member.phone}</p>
                  <p className="card-text"><strong>Address:</strong> {member.address}</p>
                  {member.message && (
                    <p className="card-text"><strong>Message:</strong> {member.message}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Members;
