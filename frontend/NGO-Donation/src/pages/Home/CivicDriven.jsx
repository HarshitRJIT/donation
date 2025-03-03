import Header from '../Header';
import Footer from '../Footer';

const CivicDriven = () => {
    return (
        <>
            <Header />

            {/* Hero Section with Background Image */}
            <div 
                style={{
                    backgroundImage: "url('./src/assets/civic.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px",
                    width: "100%",
                    position: "relative",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingBottom: "40px"
                }}
            >
                <p 
                    className="fw-bold text-light text-center" 
                    style={{
                        fontSize: "45px",
                        background: "rgba(222, 222, 222, 0.5)",
                        padding: "15px 30px",
                        borderRadius: "10px"
                    }}
                >
                    People for People: Inspiring Civic Driven Change.
                </p>
            </div>

            {/* Civic Driven Change Content */}
            <div className="container my-5">
                <h2 className="fw-bold text-success text-center">Civic Driven Change</h2>

                <p className="text-muted fs-5">
                    While our focus as a development organisation has been first and foremost to work on the ground for bringing 
                    positive change in the lives of the less privileged children and families, we have been making equal efforts 
                    to sustain this change by sensitising and engaging the privileged masses towards their social responsibility.
                </p>

                <p className="text-muted fs-5">
                    <strong>भारतीय समाज कल्याण संगठन</strong> has always looked upon its role as that of a catalyst—a means of 
                    setting in motion and accelerating the process of development. But the true potential for bringing real, 
                    long-lasting change lies with civil society. Not remaining restricted to the community, and with the aim of 
                    achieving sustainable development in a wider social context, भारतीय समाज कल्याण संगठन has adopted the 
                    principle of Civic Driven Change, making civil society an active partner in all its welfare initiatives.
                </p>

                <p className="text-muted fs-5">
                    As a step towards this, भारतीय समाज कल्याण संगठन takes a multi-stakeholder approach, partnering with 
                    indigenous community-based organisations, international development organisations, local government and civic 
                    bodies, corporate entities, institutions, schools, media, communities, and individuals. This collaborative 
                    effort helps in exchanging knowledge, combining resources, and promoting the ideal of shared growth.
                </p>

                <p className="text-muted fs-5">
                    We encourage eminent public figures and celebrities to take up their social responsibility and uphold good 
                    causes and values, as well-known personalities serve as role models in society. We have also produced short 
                    films and documentaries that highlight vital social issues and have disseminated them through mass media such 
                    as television, cinema, and social media platforms. In addition to this, mass sensitisation and awareness 
                    campaigns, as well as several other initiatives, are regularly undertaken to engage different sections of 
                    civil society.
                </p>
            </div>

            <Footer />
        </>
    );
}

export default CivicDriven;
