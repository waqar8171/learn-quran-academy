import React from "react";
import "./termsOfUse.css";

function TermsOfUse() {
  return (
    <div className="terms-page">
      {/* Hero */}
      <section className="terms-hero">
        <div className="terms-hero-content">
          <span>QURAN ACADEMY</span>

          <h1>
            Terms of <strong>Use</strong>
          </h1>

          <p>
            Please read these terms carefully before using our website or
            enrolling in our Quran learning programs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="terms-section">
        <div className="terms-container">
          {/* Introduction */}
          <div className="terms-intro">
            <span>PLEASE READ CAREFULLY</span>

            <h2>
              Our Terms & <strong>Guidelines</strong>
            </h2>

            <p>
              Welcome to Quran Academy. By accessing or using our website and
              services, you agree to follow the terms described below. These
              guidelines help us provide a safe, respectful and reliable
              learning environment for all students and families.
            </p>

            <div className="terms-updated">Last Updated: August 2026</div>
          </div>

          {/* 01 */}
          <div className="terms-card">
            <div className="terms-number">01</div>

            <div className="terms-content">
              <h3>Acceptance of Terms</h3>

              <p>
                By visiting our website, registering for a course or using any
                of our services, you acknowledge that you have read and accepted
                these Terms of Use. If you do not agree with these terms, please
                do not use our website or services.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="terms-card">
            <div className="terms-number">02</div>

            <div className="terms-content">
              <h3>Our Quran Learning Services</h3>

              <p>
                Quran Academy provides online Quran education and Islamic
                learning programs. Course availability, lesson schedules,
                teachers and learning arrangements may vary depending on the
                selected program and student's requirements.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="terms-card">
            <div className="terms-number">03</div>

            <div className="terms-content">
              <h3>Student Registration</h3>

              <p>
                Students or their parents and guardians are expected to provide
                accurate information during registration. Please keep your
                contact information up to date so that we can communicate
                important information about classes and services.
              </p>
            </div>
          </div>

          {/* 04 */}
          <div className="terms-card">
            <div className="terms-number">04</div>

            <div className="terms-content">
              <h3>Class Attendance & Scheduling</h3>

              <p>
                Students are encouraged to attend their scheduled lessons on
                time. If a student needs to miss a class, advance communication
                with the academy is recommended. Class schedules may be adjusted
                when reasonably necessary.
              </p>
            </div>
          </div>

          {/* 05 */}
          <div className="terms-card">
            <div className="terms-number">05</div>

            <div className="terms-content">
              <h3>Respectful Learning Environment</h3>

              <p>
                Students, parents, teachers and academy staff are expected to
                communicate respectfully. Any behavior that disrupts lessons,
                threatens others or creates an inappropriate learning
                environment may result in appropriate action.
              </p>
            </div>
          </div>

          {/* 06 */}
          <div className="terms-card">
            <div className="terms-number">06</div>

            <div className="terms-content">
              <h3>Website Content</h3>

              <p>
                The content available on this website is provided for
                educational and informational purposes. Text, images, graphics,
                branding and other website materials should not be copied,
                reproduced or distributed without appropriate permission.
              </p>
            </div>
          </div>

          {/* 07 */}
          <div className="terms-card">
            <div className="terms-number">07</div>

            <div className="terms-content">
              <h3>Payments & Course Fees</h3>

              <p>
                Course fees and payment arrangements may differ depending on the
                selected program. Before making a payment, students or parents
                should review the applicable course details and payment
                conditions.
              </p>
            </div>
          </div>

          {/* 08 */}
          <div className="terms-card">
            <div className="terms-number">08</div>

            <div className="terms-content">
              <h3>Changes to Our Services</h3>

              <p>
                Quran Academy may update, modify or discontinue certain website
                features, courses or services when necessary. We may also update
                these Terms of Use from time to time to reflect changes in our
                services.
              </p>
            </div>
          </div>

          {/* 09 */}
          <div className="terms-card">
            <div className="terms-number">09</div>

            <div className="terms-content">
              <h3>Account & Service Termination</h3>

              <p>
                We reserve the right to restrict or discontinue access to our
                services when there is a serious violation of these terms,
                misuse of our website or conduct that negatively affects our
                students, teachers or academy.
              </p>
            </div>
          </div>

          {/* 10 */}
          <div className="terms-card">
            <div className="terms-number">10</div>

            <div className="terms-content">
              <h3>Updates to These Terms</h3>

              <p>
                These Terms of Use may be revised when needed. Any updated
                version will be published on this page. Continued use of our
                website after an update means that you accept the revised terms.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="terms-contact">
            <div className="terms-contact-content">
              <span>NEED HELP?</span>

              <h2>Have Questions About Our Terms?</h2>

              <p>
                If you have any questions about our courses, policies or these
                Terms of Use, our academy team will be happy to help.
              </p>

              <a href="/contact">
                Contact Our Team
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsOfUse;
