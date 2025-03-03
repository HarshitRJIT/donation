import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Education = () => {
  return (
    // <div className="" style={{backgroundImage: "url('./src/assets/Home2.jpeg')",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     height: "400px",
    //     width: "100%"}}>
    // <div id="educationSlider" className="carousel slide"  data-bs-ride="carousel">
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img src="./src/assets/education1.jpg" className="d-block " alt="Education 1" />
    //     </div>
    //     <div className="carousel-item">
    //       <img src="./src/assets/education2.jpg" className="d-block " alt="Education 2" />
    //     </div>
    //     <div className="carousel-item">
    //       <img src="./src/assets/education3.jpg" className="d-block " alt="Education 3" />
    //     </div>
    //   </div>
    // </div>
    // </div>

    <>
      <Header />
      <div style={{
            backgroundImage: "url('./src/assets/education3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
            width: "100%"
        }}>
        </div>

      <div className="container my-5 p-4 border-0 shadow-sm card">
        <h2 className="text-center fw-bold text-primary">WHY Education</h2>
        <p className="text-muted fs-5 text-center">
          If we need to address healthcare, poverty, population control,
          unemployment, and human rights, there's no better way to start than
          providing education to children in need. Education not only empowers
          children to have a secure future but also helps them grow up as
          responsible national and global citizens.
        </p>
        <p className="text-muted fs-5 text-center">
          The Right to Education (RTE) Act, which came into force in 2010, made
          education free and compulsory for all children in the age group of
          6-14 years. But even a decade later, the learning curve has not been
          steady for many children in the country. The socio-economic conditions
          of parents and lack of proper learning in schools are hindrances that
          prevent many children from having an education.
        </p>
      </div>
      <div className="container my-5 p-4 border-0 shadow-sm card">
  <h2 className="text-center fw-bold text-primary">WHAT WE DO</h2>
  <p className="text-muted fs-5 text-center">
    भारतीय समाज कल्याण संगठन flagship programme <strong>Mission Education</strong> works with the objective of 
    empowering underprivileged children by providing education, nutrition, and wellness support. 
    The programme is well aligned with the <strong>New Education Policy (2020)</strong> and the 
    <strong> SDG Goal 4</strong> (Ensure inclusive and equitable quality education and promote lifelong 
    learning opportunities for all).
  </p>
  <p className="text-muted fs-5 text-center">
    Mission Education supports children (3-18 years) living in difficult circumstances, children from 
    poor families, differently-abled children, disaster-struck children, abandoned and street children, 
    and those living in tribal belts, remote villages, and hard-to-reach areas.
  </p>

  <div className="text-center my-4">
    <button className="btn btn-success fw-bold px-4 py-2">Donate for Education in India</button>
  </div>

  <h3 className="text-center fw-bold text-dark mt-4">4-PRONGED APPROACH</h3>
  <div className="row text-center">
    <div className="col-md-3 col-sm-6 p-3">
      <div className="border rounded p-3 bg-light">📚 Improving Learning Outcomes</div>
    </div>
    <div className="col-md-3 col-sm-6 p-3">
      <div className="border rounded p-3 bg-light">🏫 Creating Enabling Learning Environment</div>
    </div>
    <div className="col-md-3 col-sm-6 p-3">
      <div className="border rounded p-3 bg-light">👩‍🏫 Capacity Building of Teachers</div>
    </div>
    <div className="col-md-3 col-sm-6 p-3">
      <div className="border rounded p-3 bg-light">🤝 Community Engagement</div>
    </div>
  </div>
</div>


      <Footer />
    </>
  );
};

export default Education;
