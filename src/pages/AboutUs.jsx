import React from "react";
import "./aboutUs.css";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About IqraHub Quran Academy</h1>
          <p>
            Learn the Holy Quran online with qualified teachers from the comfort
            of your home.
          </p>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="about-content container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src="https://images.pexels.com/photos/9127593/pexels-photo-9127593.jpeg?_gl=1*yhb1wn*_ga*MTYwNTY5NTQ3NS4xNzgyMDEwOTAy*_ga_8JE65Q40S6*czE3ODM5ODMyOTAkbzIkZzEkdDE3ODM5ODMzMjEkajI5JGwwJGgw"
              alt="About IqraHub"
              hight="500"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-lg-6">
            <h2>Who We Are</h2>
            <p>
              IqraHub Quran Academy is an online Quran learning platform
              dedicated to providing high-quality Islamic education for children
              and adults around the world.
            </p>

            <p>
              Our experienced male and female Quran teachers offer one-on-one
              live classes with flexible schedules to help students learn Quran
              reading, Tajweed, memorization, and Islamic studies.
            </p>

            <p>
              Our mission is to make Quran education simple, accessible, and
              effective for every Muslim family.
            </p>
          </div>
        </div>
      </section> */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Image */}
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src="https://images.pexels.com/photos/9127593/pexels-photo-9127593.jpeg"
                  alt="About IqraHub"
                  className="img-fluid"
                />

                <div className="experience-box">
                  <h3>10+</h3>
                  <span>Years of Experience</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6">
              <span className="section-tag">ABOUT US</span>

              <h2>
                Learn Quran Online With <span>Qualified Teachers</span>
              </h2>

              <p>
                IqraHub Quran Academy is dedicated to providing high-quality
                online Quran education for children and adults around the world.
                We make Quran learning simple, interactive, and accessible from
                home.
              </p>

              <p>
                Our experienced male and female teachers provide one-to-one live
                classes in Quran Reading, Tajweed, Memorization (Hifz),
                Translation, and Islamic Studies.
              </p>

              <div className="row mt-4">
                <div className="col-6">
                  <div className="about-list">✓ Certified Quran Teachers</div>
                </div>

                <div className="col-6">
                  <div className="about-list">✓ One-to-One Classes</div>
                </div>

                <div className="col-6 mt-3">
                  <div className="about-list">✓ Flexible Schedule</div>
                </div>

                <div className="col-6 mt-3">
                  <div className="about-list">✓ Free Trial Class</div>
                </div>
              </div>

              <button className="btn about-btn mt-4">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container text-center">
          <h2>Our Mission</h2>
          <p>
            To provide affordable, high-quality online Quran education that
            helps students build a strong connection with the Holy Quran.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-5">
        <h2 className="text-center mb-5">Why Choose IqraHub?</h2>

        <div className="row">
          <div className="col-md-4">
            <div className="feature-box">
              <h4>Qualified Teachers</h4>
              <p>Experienced male and female Quran tutors.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-box">
              <h4>One-to-One Classes</h4>
              <p>Personalized live sessions for every student.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-box">
              <h4>Flexible Schedule</h4>
              <p>Choose class timings according to your routine.</p>
            </div>
          </div>

          <div className="col-md-4 mt-4">
            <div className="feature-box">
              <h4>Free Trial Class</h4>
              <p>Start with a free trial before enrollment.</p>
            </div>
          </div>

          <div className="col-md-4 mt-4">
            <div className="feature-box">
              <h4>Affordable Fees</h4>
              <p>Quality education at reasonable monthly fees.</p>
            </div>
          </div>

          <div className="col-md-4 mt-4">
            <div className="feature-box">
              <h4>Worldwide Access</h4>
              <p>Available for students in USA, UK, Canada & Australia.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
