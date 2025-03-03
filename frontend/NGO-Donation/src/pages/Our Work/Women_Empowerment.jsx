import Header from "../Header";
import Footer from "../Footer";

const WomenEmpowerment = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('./src/assets/education2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
            borderRadius: "10px",
          }}
        ></div>
        <h1 className="fw-bold position-relative">Women Empowerment</h1>
      </div>

      {/* Content Section */}
      <div className="container my-5">
        <div className="card border-0 shadow-sm p-4">
          <h2 className="text-center fw-bold text-primary">
            WHY WOMEN EMPOWERMENT?
          </h2>
          <p className="text-muted fs-5 text-center">
            Over the past decade, <strong>gender equality</strong> has been recognized as crucial not only to the health of nations but also to their social and economic development.
          </p>
          <p className="text-muted fs-5 text-center">
            The promotion of gender equality and <strong>women empowerment</strong> is a key aspect of the <strong>UNDP’s Sustainable Development Goals</strong>. It involves promoting equal rights, opportunities, and access to resources for women.
          </p>
          <p className="text-muted fs-5 text-center">
            Empowered women contribute to <strong>economic growth, social progress, and sustainable development</strong>. They play active roles in decision-making, education, healthcare, and leadership positions.
          </p>
          <p className="text-muted fs-5 text-center">
            Women empowerment fosters a more balanced and diverse society, where <strong>women's voices are heard, their talents are recognized, and their potential is fully realized</strong>.
          </p>
        </div>
      </div>

      {/* Key Aspects Section */}
      <div className="container my-5">
        <h2 className="text-center fw-bold text-success mb-4">
          Key Aspects of Women Empowerment
        </h2>
        <div className="row g-3">
          {[
            "Gender Equality",
            "Education for Women",
            "Financial Independence",
            "Leadership & Decision Making",
            "Healthcare & Nutrition",
            "Legal Rights & Awareness",
            "Employment Opportunities",
            "Self-Defense Training",
            "Social Inclusion",
            "Women in STEM",
            "Entrepreneurship",
            "Mental Health & Well-being",
          ].map((keyword, index) => (
            <div key={index} className="col-md-4">
              <div className="card text-center p-3 shadow-sm border-0">
                <h5 className="fw-bold text-dark">{keyword}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WomenEmpowerment;
