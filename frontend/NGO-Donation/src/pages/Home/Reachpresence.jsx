import Header from "../Header";
import Footer from "../Footer";

const ReachAndImpact = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <h2 className="fw-bold text-success text-center">Our Reach & Impact</h2>
        <p className="text-muted text-center fs-5">
          भारतीय समाज कल्याण संगठन reaches out to over <strong>15,00,000</strong> underprivileged children, youth & women
          through various development projects across India.
        </p>

        <div className="row text-center mt-4">
          <div className="col-md-3">
            <div className="p-3 border rounded shadow-sm bg-light">
              <h3 className="text-success fw-bold">10 LAC+</h3>
              <p className="text-muted">Children & families impacted yearly</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border rounded shadow-sm bg-light">
              <h3 className="text-success fw-bold">200+</h3>
              <p className="text-muted">Projects focused on education, healthcare, & women empowerment</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border rounded shadow-sm bg-light">
              <h3 className="text-success fw-bold">500+</h3>
              <p className="text-muted">Villages & slums reached across India</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 border rounded shadow-sm bg-light">
              <h3 className="text-success fw-bold">1</h3>
              <p className="text-muted">States covered: <strong>Varanasi, Uttar Pradesh</strong></p>
            </div>
          </div>
        </div>

        {/* Map and Varanasi text side by side */}
        <div className="row align-items-center mt-5">
          <div className="col-md-6 text-center">
            <h4 className="text-success fw-bold">Presence Across Varanasi</h4>
            <p className="text-muted fs-5">Our NGO operates actively in <strong>Varanasi</strong>, reaching communities with education, healthcare, and skill development.</p>
          </div>
          <div className="col-md-6 text-center">
            <img src="./src/assets/map.webp" alt="NGO Reach Map" className="img-fluid rounded shadow-lg" style={{ maxWidth: "80%" }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReachAndImpact;
