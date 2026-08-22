import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* ================= HERO ================= */}

      <section className="contact-hero">
        <div className="contact-hero-content">
          <span>QURAN ACADEMY</span>

          <h1>
            Let's <strong>Connect</strong>
          </h1>

          <p>
            Have a question about our Quran classes, teachers or learning
            programs? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="contact-section">
        <div className="contact-container">
          {/* Heading */}

          <div className="contact-heading">
            <span>GET IN TOUCH</span>

            <h2>
              We're Here to <strong>Help You</strong>
            </h2>

            <p>
              Whether you are looking for Quran classes for yourself, your
              children or your family, our team is ready to guide you through
              the learning process.
            </p>
          </div>

          {/* Contact Layout */}

          <div className="contact-grid">
            {/* ================= LEFT ================= */}

            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <i className="bi bi-envelope"></i>
                </div>

                <div>
                  <h3>Email Us</h3>

                  <p>info@quranacademy.com</p>

                  <small>Send us your questions anytime.</small>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <i className="bi bi-telephone"></i>
                </div>

                <div>
                  <h3>Call Us</h3>

                  <p>+1 (123) 456-5678</p>

                  <small>Our team is available to assist you.</small>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <i className="bi bi-clock"></i>
                </div>

                <div>
                  <h3>Support Hours</h3>

                  <p>Monday – Saturday</p>

                  <small>9:00 AM – 8:00 PM</small>
                </div>
              </div>

              <div className="contact-note">
                <span>START LEARNING</span>

                <h3>Begin Your Quran Journey</h3>

                <p>
                  Not sure which course is right for you? Contact our team and
                  we'll help you choose a suitable learning plan.
                </p>
              </div>
            </div>

            {/* ================= FORM ================= */}

            <div className="contact-form-box">
              <div className="form-heading">
                <span>SEND A MESSAGE</span>

                <h3>
                  How Can We <strong>Assist You?</strong>
                </h3>

                <p>
                  Fill out the form below and our team will get back to you as
                  soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone"
                    />
                  </div>

                  <div className="form-group">
                    <label>Subject</label>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>

                      <option value="Quran Classes">Quran Classes</option>

                      <option value="Kids Quran">Kids Quran Classes</option>

                      <option value="Tajweed">Tajweed Classes</option>

                      <option value="Hifz">Quran Memorization</option>

                      <option value="Fees">Fees & Packages</option>

                      <option value="Other">Other Question</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Message</label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit">
                  Send Message
                  <i className="bi bi-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="contact-cta">
        <div>
          <span>READY TO BEGIN?</span>

          <h2>
            Start Learning the Quran <strong>Today</strong>
          </h2>

          <p>
            Take the first step toward a meaningful Quran learning experience
            with our dedicated teachers.
          </p>

          <a href="/courses">
            Explore Our Courses
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
