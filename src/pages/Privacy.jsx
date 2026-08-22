import React from "react";
import "./privacy.css";

function Privacy() {
  return (
    <div className="privacy-page">
      {/* Hero */}
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          <span>QURAN ACADEMY</span>

          <h1>
            Privacy <strong>Policy</strong>
          </h1>

          <p>
            Your privacy matters to us. Learn how Quran Academy collects, uses
            and protects your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-intro">
            <span>YOUR PRIVACY MATTERS</span>

            <h2>
              Our Commitment to Your <strong>Privacy</strong>
            </h2>

            <p>
              At Quran Academy, we respect your privacy and are committed to
              protecting the personal information you provide when using our
              website, contacting us or registering for our Quran learning
              programs.
            </p>

            <p className="updated">Last Updated: August 2026</p>
          </div>

          {/* 01 */}
          <div className="privacy-card">
            <div className="privacy-number">01</div>

            <div>
              <h3>Information We Collect</h3>

              <p>
                When you interact with our academy, we may collect information
                that you voluntarily provide to us. This may include your name,
                email address, phone number, preferred course and other
                information needed to provide our services.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="privacy-card">
            <div className="privacy-number">02</div>

            <div>
              <h3>How We Use Your Information</h3>

              <p>
                The information we collect may be used to respond to your
                questions, arrange classes, process registrations, communicate
                with you about our services and improve your learning
                experience.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="privacy-card">
            <div className="privacy-number">03</div>

            <div>
              <h3>Information Protection</h3>

              <p>
                We take reasonable steps to protect the information shared with
                us against unauthorized access, misuse, alteration or
                disclosure. However, no method of transmitting information over
                the internet can be guaranteed to be completely secure.
              </p>
            </div>
          </div>

          {/* 04 */}
          <div className="privacy-card">
            <div className="privacy-number">04</div>

            <div>
              <h3>Cookies & Website Usage</h3>

              <p>
                Our website may use cookies or similar technologies to improve
                website functionality, understand general visitor activity and
                provide a better browsing experience.
              </p>
            </div>
          </div>

          {/* 05 */}
          <div className="privacy-card">
            <div className="privacy-number">05</div>

            <div>
              <h3>Third-Party Services</h3>

              <p>
                Some features of our website may use third-party services such
                as payment providers, communication platforms, analytics tools
                or video services. These services may have their own privacy
                policies and terms.
              </p>
            </div>
          </div>

          {/* 06 */}
          <div className="privacy-card">
            <div className="privacy-number">06</div>

            <div>
              <h3>Children's Privacy</h3>

              <p>
                Quran Academy provides educational services for children and
                families. Parents or guardians should supervise the information
                submitted by children and contact us if they have concerns about
                personal information.
              </p>
            </div>
          </div>

          {/* 07 */}
          <div className="privacy-card">
            <div className="privacy-number">07</div>

            <div>
              <h3>Information Sharing</h3>

              <p>
                We do not intend to sell your personal information. Information
                may only be shared when necessary to provide a requested
                service, operate our website, comply with legal requirements or
                protect our rights.
              </p>
            </div>
          </div>

          {/* 08 */}
          <div className="privacy-card">
            <div className="privacy-number">08</div>

            <div>
              <h3>Your Choices</h3>

              <p>
                You may contact us if you want to ask about the personal
                information we hold about you, request corrections or discuss
                your communication preferences, subject to applicable
                requirements.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="privacy-contact">
            <span>HAVE A QUESTION?</span>

            <h2>Need More Information?</h2>

            <p>
              If you have any questions about this Privacy Policy or how we
              handle information, please contact our academy team.
            </p>

            <a href="/contact">
              Contact Us
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
