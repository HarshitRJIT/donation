import React from 'react';
import Footer from './Footer';
import Header from './Header';


function Home() {
    return (<>
        <Header />
        <div style={{
            backgroundImage: "url('./src/assets/Home2.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            width: "100%"
        }}>
        </div>

        <div className="container my-4">
            <div className="head d-flex justify-content-center align-items-center p-3 border2 rounded bg-warning">
                <span className="px-3 text-light fw-bold">OUR STORY</span> |
                <span className="px-3"><span >VISION</span></span> |
                <span className="px-3"><span >MISSION</span></span> |
                <span className="px-3"><span >PHILOSOPHY</span> OF CHANGE</span> |
                <span className="px-3"><span >THE</span> LIFECYCLE APPROACH</span> |
                <span className="px-3"><span >HOW</span> WE WORK</span> |
                <span className="px-3"><span >WHY</span> TRUST US?</span>
            </div>
        </div>


        {/* Description Section */}
        <div className="container">
            <div className="card p-3 shadow">
                <p className="lead fs-8 fw-semibold text-justify">
                    भारतीय समाज कल्याण संगठन was initiated in 2025 when a group of friends came together with the intention of giving back to society.
                    They were inspired by the thought and philosophy of Peter Senge, the founder of the Society for Organizational Learning,
                    who has propagated that “sustainability, social equality, and the environment are now business problems…”,
                    and corporate leaders can’t expect governments to solve them alone.
                    What triggered these thoughts was the liberalization of the Indian economy in the 1990s, which brought immense opportunities.
                    Business revived, and India became not just a market but also an investment prospect for the developed world.
                    Disposable incomes and early settlements became a living reality for the working middle class.
                    For the first time in India, professionals could think beyond making a living and contribute towards society.

                </p>

            </div>
        </div>

        {/* second Discription */}
        <div className="container my-4">
            <div className="head d-flex justify-content-center align-items-center p-3 border2 rounded bg-warning">
                <span className="px-3 "><span >OUR</span> STORY</span> |
                <span className="px-3 text-light fw-bold"><span >VISION</span></span> |
                <span className="px-3"><span >MISSION</span></span> |
                <span className="px-3"><span >PHILOSOPHY</span> OF CHANGE</span> |
                <span className="px-3"><span >THE</span> LIFECYCLE APPROACH</span> |
                <span className="px-3"><span >HOW</span> WE WORK</span> |
                <span className="px-3"><span >WHY</span> TRUST US?</span>
            </div>
        </div>
        <div className="container my-5">
            <div className="row text-center">
                <div className="col-md-4">

                    <p className="text-muted">
                        Work as a catalyst in bringing sustainable change in the lives of lesser privileged children and families
                        with a life-cycle approach of development.
                    </p>
                </div>
                <div className="col-md-4">

                    <p className="text-muted">
                        Enable the civil society across the world to engage proactively in the change process through the philosophy
                        of civic-driven change.
                    </p>
                </div>
                <div className="col-md-4">

                    <p className="text-muted">
                        Adopt highest standards of governance to emerge as a leading knowledge and technology-driven,
                        innovative, and scalable development institution.
                    </p>
                </div>
            </div>
        </div>

        {/* Third Discription */}
        <div className="container my-4">
            <div className="head d-flex justify-content-center align-items-center p-3 border2 rounded bg-warning">
                <span className="px-3 "><span >OUR</span> STORY</span> |
                <span className="px-3"><span >VISION</span></span> |
                <span className="px-3 text-light fw-bold"><span >MISSION</span></span> |
                <span className="px-3"><span >PHILOSOPHY</span> OF CHANGE</span> |
                <span className="px-3"><span >THE</span> LIFECYCLE APPROACH</span> |
                <span className="px-3"><span >HOW</span> WE WORK</span> |
                <span className="px-3"><span >WHY</span> TRUST US?</span>
            </div>
        </div>

        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h3 className="fw-bold text-warning">Our Mission</h3>
                    <p className="text-muted fs-5">
                        भारतीय समाज कल्याण संगठन aims to empower underprivileged children, youth, and women through
                        relevant education, innovative healthcare, and market-focused livelihood programs.
                    </p>
                    <p className="text-muted fs-5">
                        We strive to deploy the best possible methodologies and technology to achieve an ideal
                        <strong> Social Return on Investment (SROI)</strong>. Our commitment is to practice and promote good governance.
                    </p>
                    <p className="text-muted fs-5">
                        We bridge corporate business competitiveness with social development initiatives while also
                        sensitizing privileged children, youth, and citizens in general to promote
                        <strong> Civic-Driven Change</strong>.
                    </p>
                </div>
            </div>
        </div>

        {/* 4th Discription */}
        <div className="container my-4">
            <div className="head d-flex justify-content-center align-items-center p-3 border2 rounded bg-warning">
                <span className="px-3 "><span >OUR</span> STORY</span> |
                <span className="px-3"><span >VISION</span></span> |
                <span className="px-3"><span >MISSION</span></span> |
                <span className="px-3 text-light fw-bold"><span >PHILOSOPHY</span> OF CHANGE</span> |
                <span className="px-3"><span >THE</span> LIFECYCLE APPROACH</span> |
                <span className="px-3"><span >HOW</span> WE WORK</span> |
                <span className="px-3"><span >WHY</span> TRUST US?</span>
            </div>
        </div>

        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <h3 className="fw-bold text-warning">Our Approach</h3>
                    <p className="text-muted fs-5">
                        While our focus as a development organization has been, first and foremost, to work on the ground
                        to bring positive change in the lives of less privileged children and families,
                        we also strive to sustain this change by <strong>sensitizing and engaging the privileged masses</strong>
                        towards their social responsibility.
                    </p>
                    <p className="text-muted fs-5">
                        Not limiting our efforts to just the community, and with a vision of achieving
                        <strong> sustainable development</strong> in a broader social context,
                        <span className="text-warning fw-semibold">भारतीय समाज कल्याण संगठन</span> has adopted the principle of
                        <strong> Civic-Driven Change</strong>, making civil society an active partner in all its welfare initiatives.
                    </p>
                </div>
            </div>
        </div>


        {/* 5th Discription */}
        <div className="container my-4">
            <div className="head d-flex justify-content-center align-items-center p-3 border2 rounded bg-warning">
                <span className="px-3 text-light fw-bold"><span >OUR</span> STORY</span> |
                <span className="px-3"><span >VISION</span></span> |
                <span className="px-3"><span >MISSION</span></span> |
                <span className="px-3"><span >PHILOSOPHY</span> OF CHANGE</span> |
                <span className="px-3 text-light fw-bold"><span >THE</span> LIFECYCLE APPROACH</span> |
                <span className="px-3"><span >HOW</span> WE WORK</span> |
                <span className="px-3"><span >WHY</span> TRUST US?</span>
            </div>
        </div>


        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <h3 className="fw-bold text-success text-center">Education: The Key to Change</h3>
                    <p className="text-muted fs-5">
                        We believe that <strong>education</strong> is both the means as well as the end to a better life: 
                        <strong> the means</strong> because it empowers an individual to earn a livelihood, and 
                        <strong> the end</strong> because it increases one’s awareness on various issues – from healthcare 
                        to appropriate social behavior to understanding one’s rights – helping them evolve as responsible citizens.
                    </p>
                    <p className="text-muted fs-5">
                        Education is the most effective tool that helps children build a strong foundation, 
                        enabling them to break free from the vicious cycle of ignorance, poverty, and disease.
                    </p>

                    {/* Key Pillars */}
                    <div className="row text-center mt-4">
                        <div className="col-md-4">
                            <div className="p-3 border rounded shadow-sm bg-light">
                                <h5 className="text-success fw-bold">Education</h5>
                                <p className="text-muted">The foundation for a better future.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 border rounded shadow-sm bg-light">
                                <h5 className="text-success fw-bold">A Better Livelihood</h5>
                                <p className="text-muted">Empowering individuals through skills.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 border rounded shadow-sm bg-light">
                                <h5 className="text-success fw-bold">Appropriate Social Behaviour</h5>
                                <p className="text-muted">Building responsible citizens.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row text-center mt-4">
                        <div className="col-md-6">
                            <div className="p-3 border rounded shadow-sm bg-light">
                                <h5 className="text-success fw-bold">Better Understanding Of Rights</h5>
                                <p className="text-muted">Awareness for a just society.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-3 border rounded shadow-sm bg-light">
                                <h5 className="text-success fw-bold">An Empowered And Aware Citizen</h5>
                                <p className="text-muted">Education leads to empowerment.</p>
                            </div>
                        </div>
                    </div>

                    {/* Holistic Approach */}
                    <h4 className="fw-bold text-success mt-5">A Holistic Approach</h4>
                    <p className="text-muted fs-5">
                        While working on the ground, we realized that child education cannot be achieved in isolation 
                        without ensuring the welfare of the entire family. <strong>Health is also a part of education.</strong> 
                        A sick child will not attend school, and if a child’s parents are unwell, 
                        he might drop out to earn a livelihood. <strong>Unless the mother is healthy and empowered, 
                        the child cannot be either.</strong> It is all interlinked.
                    </p>
                    <p className="text-muted fs-5">
                        Our other programs evolved as a logical extension of our education initiative – 
                        focusing on <strong>livelihood, health, and women empowerment.</strong> 
                        Today, children and education continue to remain at the core of our mission, 
                        but through the <span className="fw-bold text-success">Lifecycle Approach</span>, 
                        we also address the needs of children’s families and communities.
                    </p>
                </div>
            </div>
        </div>





        {/* 6th Discription */}
        <div className="container my-4">
            <div className="head d-flex justify-content-center align-items-center p-3 border2 rounded bg-warning">
                <span className="px-3 "><span >OUR</span> STORY</span> |
                <span className="px-3"><span >VISION</span></span> |
                <span className="px-3"><span >MISSION</span></span> |
                <span className="px-3"><span >PHILOSOPHY</span> OF CHANGE</span> |
                <span className="px-3"><span >THE</span> LIFECYCLE APPROACH</span> |
                <span className="px-3 text-light fw-bold"><span >HOW</span> WE WORK</span> |
                <span className="px-3"><span >WHY</span> TRUST US?</span>
            </div>
        </div>

        <div className="container my-5">
    <div className="row justify-content-center">
        <div className="col-lg-10">
            {/* Social Venture Philanthropy */}
            <h3 className="fw-bold text-success text-center">Social Venture Philanthropy</h3>
            <p className="text-muted fs-5">
                <strong>Social Venture Philanthropy (SVP)</strong> is an innovative model inspired by the business concept of venture capital. 
                Under SVP, <span className="fw-bold">Smile Foundation</span> identifies and implements development projects through 
                credible community-based organizations. 
            </p>
            <p className="text-muted fs-5">
                We also handhold and build capacities of these organizations, focusing on achieving 
                <strong> scalability and sustainability</strong>, creating a culture of leadership and excellence, 
                and inculcating a deep sense of accountability among them.
            </p>

            {/* Outreach */}
            <h3 className="fw-bold text-success text-center mt-5">Outreach</h3>
            <p className="text-muted fs-5">
                <strong>Outreach</strong> is a model where Smile Foundation directly implements development interventions 
                requiring <strong>intensive and professional engagement</strong> for a wider and sustained outcome. 
            </p>
            <p className="text-muted fs-5">
                While working in remote rural areas, we realized that <strong>an intensive on-ground intervention</strong> 
                is needed, which might be beyond the capacity of community-based organizations. 
                Hence, we directly implement such projects, working closely with local community stakeholders 
                to ensure a better <span className="fw-bold text-success">Social Return on Investment (SROI).</span>
            </p>
        </div>
    </div>
</div>



        {/* 7th Discription */}
        <div className="container my-4">
            <div className="head d-flex justify-content-center align-items-center p-3 border2 rounded bg-warning">
                <span className="px-3 "><span >OUR</span> STORY</span> |
                <span className="px-3"><span >VISION</span></span> |
                <span className="px-3"><span >MISSION</span></span> |
                <span className="px-3"><span >PHILOSOPHY</span> OF CHANGE</span> |
                <span className="px-3"><span >THE</span> LIFECYCLE APPROACH</span> |
                <span className="px-3"><span >HOW</span> WE WORK</span> |
                <span className="px-3 text-light fw-bold"><span >WHY</span> TRUST US?</span>
            </div>
        </div>

        <div className="container my-5">
    <div className="row justify-content-center">
        <div className="col-lg-10">

            {/* Credibility & Accountability */}
            <h3 className="fw-bold text-success text-center">Credibility & Accountability</h3>
            <p className="text-muted fs-5">
                <strong>Credibility and accountability</strong> have always been the benchmark for 
                <span className="fw-bold"> Smile Foundation</span>. We achieve these through the promotion of 
                <strong> principles of good governance</strong> in all our processes and practices.
            </p>
            <p className="text-muted fs-5">
                Our commitment to transparency is reinforced through a 
                <strong> four-tier audit and evaluation mechanism</strong>, ensuring 
                the impact of investment and complete accountability in the 
                <span className="fw-bold text-success"> utilization of funds.</span>
            </p>
        </div>
    </div>
</div>





        <Footer />
    </>);
}
export default Home;