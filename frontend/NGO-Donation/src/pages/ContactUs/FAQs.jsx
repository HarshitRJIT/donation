import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const FAQs = () => {
    const querys = [
        { question: "What is the belief behind भारतीय समाज कल्याण संगठन?", answer: "The belief behind भारतीय समाज कल्याण संगठन is that every individual has the right to lead a healthy, happy and fulfilling life. The organization believes that society can develop only when the underprivileged are empowered and the marginalized are taken care of." },
        { question: "Does भारतीय समाज कल्याण संगठन work in India or other countries too?", answer: "भारतीय समाज कल्याण संगठन works in India only." },
        { question: "What is the scenario in India, presently?", answer: "India is a developing country with a population of over 1.3 billion. The country is facing various social issues like poverty, illiteracy, unemployment." },
        { question: "How old is भारतीय समाज कल्याण संगठन?", answer: "भारतीय समाज कल्याण संगठन was founded on 03-01-2025." },
        { question: "What is the mission of भारतीय समाज कल्याण संगठन?", answer: "The mission of भारतीय समाज कल्याण संगठन is to empower the underprivileged and marginalized sections of society." },
        { question: "Who are the people behind भारतीय समाज कल्याण संगठन?", answer: "भारतीय समाज कल्याण संगठन was founded by Mr. Jagmag Keshari." },
        { question: "What areas does भारतीय समाज कल्याण संगठन work in?", answer: "भारतीय समाज कल्याण संगठन works in the areas of education, healthcare, and community development." },
        { question: "Why do you stress on education, when there are other equally pressing issues in the country?", answer: "Education is the most powerful tool to bring about social change. It empowers individuals to improve their lives and society at large." },
        { question: "What is the source of funding for the organization?", answer: "The source of funding for the organization is through donations and grants." },
        { question: "How can I donate to भारतीय समाज कल्याण संगठन?", answer: "You can donate to भारतीय समाज कल्याण संगठन by filling up the donation form available on the website." }
    ];

    const donorQueries = [
        { question: "What information is sent to the donors?", answer: "The donor gets an instant acknowledgement mail along with an SMS. On receiving the reconciliation statement from the bank, a receipt is sent via e-mail immediately, followed by a hard copy by post (within India). The receipt is accompanied by a ‘welcome pack’ which is also a token of appreciation. The donor receives a birthday wish, wishes on important festivals, programme updates and an annual impact report during a year’s time." },
        { question: "What will भारतीय समाज कल्याण संगठन do with my donation?", answer: "भारतीय समाज कल्याण संगठन ensures that all donations go towards the intended cause, such as child welfare, education, and healthcare." },
        { question: "How does भारतीय समाज कल्याण संगठन ensure that the donor's contribution is being utilized in the intended way?", answer: "The organization maintains transparency and provides periodic impact reports to donors." },
        { question: "Does भारतीय समाज कल्याण संगठन accept donations in USD or Pounds?", answer: "Yes, भारतीय समाज कल्याण संगठन accepts donations in multiple currencies including USD and Pounds." },
        { question: "How much should I donate?", answer: "You can choose any amount, but we provide a breakdown of monthly expenses to help donors make informed decisions." },
        { question: "Is the website safe to make online payments?", answer: "Yes, भारतीय समाज कल्याण संगठन uses secure payment gateways to protect donors' financial information." },
        { question: "What is the process of keeping the donor’s information safe?", answer: "We follow strict data privacy policies to ensure donors' personal information is not shared or misused." },
        { question: "What are the Tax benefits that a donor will get?", answer: "Donors can avail tax benefits under applicable sections of the Income Tax Act." },
        { question: "Do you issue Tax receipts? How soon will the receipts arrive?", answer: "Yes, tax receipts are issued immediately via email and followed up with a hard copy if required." },
        { question: "What happens if the tax receipt is lost?", answer: "You can request a duplicate tax receipt via our website or customer support." },
        { question: "Can one donate in kind (old clothes, books, stationery, etc.)?", answer: "Yes, we accept in-kind donations. Please contact our team for details." },
        { question: "Is it possible for a consistent supporter to meet the beneficiary personally?", answer: "Yes, long-term supporters can meet beneficiaries by scheduling a visit through our organization." }
    ];

    return (
        <>
            <Header />
            <div className="faqs-container py-5 d-flex justify-content-center" style={{ backgroundColor: "#FFF9E6" }}>
                <div className="container w-50">
                    <h2 className="text-start text-dark mb-4">Frequently Asked Questions</h2>
                    
                    {/* General FAQs */}
                    <div className="faq-box bg-white p-4 rounded shadow-sm">
                        {querys.map((faq, index) => (
                            <div key={index} className="faq-item mb-3 p-3 border-bottom">
                                <p className="question fs-5 fw-bold text-dark">{faq.question}</p>
                                <p className="answer text-muted">{faq.answer}</p>
                            </div>
                        ))}
                    </div>

                    {/* Donor FAQs */}
                    <h3 className="text-start text-dark mt-5">FAQ's For Individual Donors</h3>
                    <div className="faq-box bg-white p-4 rounded shadow-sm">
                        {donorQueries.map((faq, index) => (
                            <div key={index} className="faq-item mb-3 p-3 border-bottom">
                                <p className="question fs-5 fw-bold text-dark">{faq.question}</p>
                                <p className="answer text-muted">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FAQs;
