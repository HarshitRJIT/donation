import Header from "../Header";
import Footer from "../Footer";

const Livelihood = () => {
  return (
    <>
      <Header />
      <div className="container my-5 p-4 border-0 shadow-sm card">
        <h2 className="text-center fw-bold text-success">WHY SKILLING?</h2>
        <p className="text-muted fs-5 text-center">
          The youth comprises over one-third of the Indian population, which in
          turn constitutes a major part of the labour force of the country.
        </p>
        <p className="text-muted fs-5 text-center">
          A country like India, with a huge young population, can reap better
          benefits from the demographic dividend if its youth are
          <strong> better skilled and employable</strong>.
        </p>
        <p className="text-muted fs-5 text-center">
          It is crucial for the energy of underprivileged youth to be{" "}
          <strong>channelized properly</strong> with the right direction to aid
          <strong> economic growth and nation-building</strong>.
        </p>
      </div>

      <div className="container my-5 p-4 border-0 shadow-sm card" style={{ backgroundColor: "light-yellow" }}>
  <h2 className="text-center fw-bold text-success">WHAT WE DO</h2>
  <p className="text-muted fs-5 text-center">
    भारतीय समाज कल्याण संगठन, through its <strong>Livelihood Programme</strong>, connects unemployed or underemployed youth from 
    disadvantaged groups and communities with sectors that have large growth potential in terms of revenue generation and employability.
  </p>
  <p className="text-muted fs-5 text-center">
    The staggering youth population underutilized in the job market due to a lack of requisite qualifications and training are 
    <strong> upskilled, uplifted, and mainstreamed</strong> to become a part of the country’s growth story.
  </p>
  <p className="text-muted fs-5 text-center">
    This livelihood programme aims to complement the government’s vision and efforts under the <strong>Skill India Mission</strong> and is 
    aligned with <strong>Sustainable Development Goals 4 and 8</strong>.
  </p>
</div>

      <Footer />
    </>
  );
};
export default Livelihood;
