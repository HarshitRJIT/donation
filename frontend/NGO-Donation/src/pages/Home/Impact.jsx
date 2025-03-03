import Header from "../Header";
import Footer from "../Footer"

const impact = () => {
    return(
    <>
    <Header />
    {/* Image section */}
    <div 
    className="d-flex align-items-center justify-content-center text-light fw-bold" 
    style={{
        backgroundImage: "url('./src/assets/impact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        width: "100%"
    }}
>
    <p className="fs-1 text-center">SMALL STEPS BIG IMPACT</p>
</div>

{/* Impact Section */}
<div className="container my-5">
    <h3 className="fw-bold text-success text-center">Our Approach</h3>
    <p className="text-muted fs-5 text-center">
        Following a <strong>lifecycle approach</strong>, भारतीय समाज कल्याण संगठन works intensively through 
        focused welfare projects in four major areas:
    </p>

    <div className="row text-center mt-4">
        <div className="col-md-6 col-lg-3">
            <div className="p-3 border rounded shadow-sm bg-light">
                <h5 className="text-success fw-bold">Child Education</h5>
                <p className="text-muted">Providing quality education to underprivileged children.</p>
            </div>
        </div>
        <div className="col-md-6 col-lg-3">
            <div className="p-3 border rounded shadow-sm bg-light">
                <h5 className="text-success fw-bold">Healthcare for Families</h5>
                <p className="text-muted">Ensuring access to essential healthcare services.</p>
            </div>
        </div>
        <div className="col-md-6 col-lg-3">
            <div className="p-3 border rounded shadow-sm bg-light">
                <h5 className="text-success fw-bold">Skills Training & Livelihood</h5>
                <p className="text-muted">Empowering youth with skill-based training for better job opportunities.</p>
            </div>
        </div>
        <div className="col-md-6 col-lg-3">
            <div className="p-3 border rounded shadow-sm bg-light">
                <h5 className="text-success fw-bold">Women Empowerment</h5>
                <p className="text-muted">Encouraging active community participation and leadership.</p>
            </div>
        </div>
    </div>
</div>


{/* Data Analysing section */}
<div className="container my-5"  style={{backgroundColor: "#f9f9f9"}}>
    <div className="row text-center">
        <div className="col-md-4">
            <h2 className="text-success fw-bold">300,000+</h2>
            <p className="text-muted">Children provided education so far</p>
        </div>
        <div className="col-md-4">
            <h2 className="text-success fw-bold">2,000,000+</h2>
            <p className="text-muted">People provided healthcare so far</p>
        </div>
        <div className="col-md-4">
            <h2 className="text-success fw-bold">65,000+</h2>
            <p className="text-muted">Youth trained and</p>
            <h2 className="text-success fw-bold">45,000+</h2>
            <p className="text-muted">Placed so far</p>
        </div>
    </div>

    <div className="row text-center mt-4">
        <div className="col-md-4">
            <h2 className="text-success fw-bold">700,000+</h2>
            <p className="text-muted">Women and girl children benefitted so far</p>
        </div>
        <div className="col-md-4">
            <h2 className="text-success fw-bold">5,000+</h2>
            <p className="text-muted">Grassroots organizations trained & empowered</p>
        </div>
    </div>

    <h3 className="fw-bold text-success text-center mt-5">Our Initiatives</h3>

    <div className="row mt-4">
        <div className="col-md-6">
            <div className="p-3 border rounded shadow-sm bg-light">
                <h5 className="text-success fw-bold">Mission Education</h5>
                <p className="text-muted">
                    Mission Education began in 2002 as a response to the received need for a quality education programme 
                    to educate disadvantaged and out-of-school children in India.
                </p>
            </div>
        </div>
        <div className="col-md-6">
            <div className="p-3 border rounded shadow-sm bg-light">
                <h5 className="text-success fw-bold">Smile on Wheels</h5>
                <p className="text-muted">
                    A mobile healthcare programme that takes preventive, curative, and promotive healthcare to the 
                    doorsteps of less privileged children and families in the remotest villages and underserved slums of India.
                </p>
            </div>
        </div>
    </div>

    <div className="row mt-4">
        <div className="col-md-6">
            <div className="p-3 border rounded shadow-sm bg-light">
                <h5 className="text-success fw-bold">Smile Twin e-Learning Programme (STeP)</h5>
                <p className="text-muted">
                    Works for marginalized youth, helping them attain gainful employment by providing vocational education and training.
                </p>
            </div>
        </div>
        <div className="col-md-6">
            <div className="p-3 border rounded shadow-sm bg-light">
                <h5 className="text-success fw-bold">Swabhiman</h5>
                <p className="text-muted">
                    Meaning 'self-respect' in English, this initiative aims to empower less-privileged women and girl children 
                    through interventions in education, healthcare, livelihood awareness, and life skills.
                </p>
            </div>
        </div>
    </div>

    <div className="row mt-4">
        <div className="col-md-12">
            <div className="p-3 border rounded shadow-sm bg-light">
                <h5 className="text-success fw-bold">Empowering Grassroots</h5>
                <p className="text-muted">
                    A national capacity-building initiative aimed at training and enabling community-based organizations (CBOs) 
                    to maximize their impact on the ground.
                </p>
            </div>
        </div>
    </div>
</div>    
        <Footer/>
    </>
    );
}

export default impact;