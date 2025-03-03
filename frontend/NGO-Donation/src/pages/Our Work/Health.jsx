import Header from "../Header";
import Footer from "../Footer";

const Health = () => {
  return (
    <>
      <Header />
      {/* picture Discription */}
      <div style={{
            backgroundImage: "url('./src/assets/healthcare1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            width: "100%"
        }}>
        </div>

      {/* text discription */}
      <div className="container my-5 p-4 border-0 shadow-sm card">
        <h2 className="text-center fw-bold text-danger">WHY HEALTHCARE</h2>
        <p className="text-muted fs-5 text-center">
          With a population of more than <strong>1.4 Billion</strong>, last-mile
          delivery of healthcare in our country is a big challenge. The
          geospatial diversity of the country further aggravates the issues of
          accessibility and availability of healthcare in difficult terrains.
        </p>
        <p className="text-muted fs-5 text-center">
          With more than <strong>65% of the population</strong> residing in
          rural areas with a smaller share of the overall healthcare
          infrastructure, and the urban slum dwellers prioritizing everyday
          survival over healthcare, uneven distribution and lack of awareness
          also limit the uptake of existing healthcare services.
        </p>
        <p className="text-muted fs-5 text-center">
          It is crucial to address these gaps to meet the goals of{" "}
          <strong>Universal Health Coverage</strong> and support the
          <strong>Govt. of India's vision of Ayushman Bharat.</strong>
        </p>

        <div className="text-center my-4">
          <button className="btn btn-primary fw-bold px-4 py-2">
            Support Healthcare Initiatives
          </button>
        </div>

        <h3 className="text-center fw-bold text-dark mt-4">OUR INITIATIVES</h3>
        <div className="row text-center">
          <div className="col-md-4 col-sm-6 p-3">
            <div className="border rounded p-3 bg-light">
              🏥 Mobile Health Camps
            </div>
          </div>
          <div className="col-md-4 col-sm-6 p-3">
            <div className="border rounded p-3 bg-light">
              💉 Vaccination & Immunization
            </div>
          </div>
          <div className="col-md-4 col-sm-6 p-3">
            <div className="border rounded p-3 bg-light">
               Telemedicine
            </div>
          </div>
          <div className="col-md-4 col-sm-6 p-3">
            <div className="border rounded p-3 bg-light">
              🩺 Awareness & Preventive Care
            </div>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="container my-5 p-4 border-0 shadow-sm card" style={{
            backgroundImage: "url('./src/assets/healthcare.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            width: "100%"
        }}>
        </div>
      <div className="container my-5 p-4 border-0 shadow-sm card">
        <h2 className="text-center fw-bold text-primary">WHAT WE DO</h2>
        <p className="text-muted fs-5 text-center">
          <strong>भारतीय समाज कल्याण संगठन</strong> comprehensive and
          community-centric health programme takes primary healthcare services
          to the doorsteps of underserved communities in both rural and urban
          India.
        </p>
        <p className="text-muted fs-5 text-center">
          Following a <strong>two-pronged approach</strong>, the programme
          provides <strong>curative</strong> as well as
          <strong> preventive services</strong>, addressing the gaps in
          availability, accessibility, and affordability of healthcare.
        </p>
      </div>

      <Footer />
    </>
  );
};
export default Health;
