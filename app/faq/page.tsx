export default function FAQ() {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="h3 text-center fw-bold mb-4">Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
              {/* 1. General Product Information */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    1. General Product Information
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <strong>Q: What products do you offer?</strong>
                    <br />
                    A: We provide both open-source and premium software solutions, including
                    business automation tools and e-commerce applications.
                    <br />
                    <br />
                    <strong>Q: Where can I find product documentation?</strong>
                    <br />
                    A: You can find documentation on our official website under the &quot;Docs&quot;
                    section.
                  </div>
                </div>
              </div>

              {/* 2. Purchasing & Payment */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    2. Donations & Purchasing
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <strong>Q: What payment methods do you accept?</strong>
                    <br />
                    A: Right now we only accept payment through Github Sponsors Payment.
                    <br />
                    <br />
                    <strong>Q: How can I pay via subscription?</strong>
                    <br />
                    A: Yes, you can pay monthly subscription via our sponsored Github Page
                  </div>
                </div>
              </div>

              {/* 3. Licensing & Subscription */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    3. Licensing & Subscription
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <strong>Q: How does licensing work?</strong>
                    <br />
                    A: Open-source products follow their respective licenses, while premium
                    products come with individual or enterprise licenses.
                    <br />
                    <br />
                    <strong>Q: Can I cancel my subscription?</strong>
                    <br />
                    A: Yes, you can cancel at any time through your account settings.
                  </div>
                </div>
              </div>

              {/* 4. Installation & Setup */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    4. Installation & Setup
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <strong>Q: How do I install the software?</strong>
                    <br />
                    A: Installation guides are available in the product&apos;s documentation
                    section of our website and also via Github
                    <br />
                    <br />
                    <strong>Q: What are the system requirements?</strong>
                    <br />
                    A: System requirements vary by product and are listed on the product pages.
                  </div>
                </div>
              </div>

              {/* 5. Product Features & Usage */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    5. Product Features & Usage
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <strong>Q: What are the key features of your software?</strong>
                    <br />
                    A: Each product has unique features, which are detailed on our website.
                    <br />
                    <br />
                    <strong>Q: Can I customize the software?</strong>
                    <br />
                    A: Yes, most of our software supports customization.
                  </div>
                </div>
              </div>

              {/* 6. Updates & Maintenance */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    6. Updates & Maintenance
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <strong>Q: How often do you release updates?</strong>
                    <br />
                    A: Updates are released regularly based on feature additions and security
                    improvements.
                    <br />
                    <br />
                    <strong>Q: Do I need to pay for updates?</strong>
                    <br />
                    A: Open-source updates are free. Premium product updates may require an active
                    subscription.
                  </div>
                </div>
              </div>

              {/* 7. Security & Privacy */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    7. Security & Privacy
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <strong>Q: Is my data secure?</strong>
                    <br />
                    A: Yes, we follow strict security protocols to protect user data.
                    <br />
                    <br />
                    <strong>Q: Do you collect personal data?</strong>
                    <br />
                    A: We only collect essential data as per our privacy policy.
                  </div>
                </div>
              </div>

              {/* 8. Customer Support */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    8. Customer Support
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingEight"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <strong>Q: How can I contact support?</strong>
                    <br />
                    A: You can contact us via email or live chat.
                    <br />
                    <br />
                    <strong>Q: What are your support hours?</strong>
                    <br />
                    A: Our support is available 24/7 to help you out to resolve any issues.
                  </div>
                </div>
              </div>

              {/* 9. Refunds & Returns */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingNine">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    9. Refunds & Returns
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingNine"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <strong>Q: How do I request a refund?</strong>
                    <br />
                    A: Submit a refund request through our support page.
                    <br />
                    <br />
                    <strong>Q: Are all purchases refundable?</strong>
                    <br />
                    A: Refund eligibility depends on the product type.
                  </div>
                </div>
              </div>

              {/* 10. Troubleshooting */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTen">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                  >
                    10. Troubleshooting
                  </button>
                </h2>
                <div
                  id="collapseTen"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTen"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <strong>Q: What should I do if I encounter an error?</strong>
                    <br />
                    A: Check our knowledge base or contact support.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

