import React from "react";
import { Link } from "react-router-dom";
import "./quranTranslation.css";

const QuranTranslation = () => {
  return (
    <div className="translation-page">
      {/* ================= HERO ================= */}
      <section className="translation-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="translation-badge">
                📖 Understand the Holy Quran
              </span>

              <h1>
                Learn Quran
                <span> Translation</span>
                Online
              </h1>

              <p>
                Discover the meaning and message of the Holy Quran through
                easy-to-understand translation and explanation with experienced
                Quran teachers.
              </p>

              <div className="translation-buttons">
                <Link to="/login" className="btn btn-success btn-lg me-2">
                  Start Learning
                </Link>

                <Link to="/contact" className="btn btn-outline-success btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="translation-quran-box text-center">
                <div className="translation-icon">📖</div>

                <h2>تَرْجَمَةُ الْقُرْآنِ</h2>

                <p>Understand the Message of the Quran</p>

                <div className="translation-arabic">
                  أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="translation-intro py-5">
        <div className="container">
          <div className="translation-section-title text-center">
            <span>QURAN TRANSLATION COURSE</span>

            <h2>Understand What You Recite</h2>

            <p>
              Our Quran Translation course helps students understand the
              meanings, messages and lessons contained in the Holy Quran.
            </p>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="translation-card">
                <div className="translation-card-icon">📚</div>

                <h4>Easy Translation</h4>

                <p>
                  Learn the meanings of Quranic verses in simple and
                  understandable language.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="translation-card">
                <div className="translation-card-icon">🕌</div>

                <h4>Understand the Message</h4>

                <p>
                  Discover the guidance, lessons and beautiful messages
                  contained in the Holy Quran.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="translation-card">
                <div className="translation-card-icon">👨‍🏫</div>

                <h4>Expert Teachers</h4>

                <p>
                  Study with knowledgeable teachers who explain Quranic meanings
                  clearly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT YOU WILL LEARN ================= */}
      <section className="translation-learning py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="translation-small-title">
                WHAT YOU WILL LEARN
              </span>

              <h2>Explore the Meaning of the Quran</h2>

              <p>
                Our course is designed to help students understand Quranic
                verses and apply their lessons in everyday life.
              </p>

              <ul className="translation-list">
                <li>✔ Meaning of Quranic verses</li>

                <li>✔ Basic Arabic vocabulary</li>

                <li>✔ Word-by-word understanding</li>

                <li>✔ Explanation of important verses</li>

                <li>✔ Lessons and guidance from the Quran</li>

                <li>✔ Understanding Surahs and their messages</li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="translation-arabic-box">
                <div className="big-quran-icon">📖</div>

                <h3>وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا</h3>

                <p>
                  Learn to read, understand and reflect upon the beautiful
                  message of the Holy Quran.
                </p>

                <div className="meaning-box">
                  <strong>Quran • Translation • Understanding</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSE LEVELS ================= */}
      <section className="translation-levels py-5">
        <div className="container">
          <div className="translation-section-title text-center">
            <span>COURSE LEVELS</span>

            <h2>Learning According to Your Level</h2>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="level-box">
                <div className="level-number">01</div>

                <h4>Beginner</h4>

                <p>
                  Learn basic Quranic vocabulary and simple meanings of commonly
                  recited Surahs.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="level-box">
                <div className="level-number">02</div>

                <h4>Intermediate</h4>

                <p>
                  Develop deeper understanding of verses and important Quranic
                  concepts.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="level-box">
                <div className="level-number">03</div>

                <h4>Advanced</h4>

                <p>
                  Explore detailed meanings, themes and lessons from different
                  Surahs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="translation-features py-5">
        <div className="container">
          <div className="translation-section-title text-center">
            <span>WHY CHOOSE US?</span>

            <h2>Quran Translation Course Features</h2>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6 col-lg-3">
              <div className="translation-feature-box">
                <span>👨‍🏫</span>

                <h5>Qualified Teachers</h5>

                <p>Learn from experienced Quran teachers.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="translation-feature-box">
                <span>💻</span>

                <h5>Online Classes</h5>

                <p>Learn Quran translation from anywhere.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="translation-feature-box">
                <span>👤</span>

                <h5>One-to-One</h5>

                <p>Receive personalized attention from your teacher.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="translation-feature-box">
                <span>⏰</span>

                <h5>Flexible Timing</h5>

                <p>Select class timings according to your schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="translation-cta">
        <div className="container text-center">
          <h2>Start Understanding the Quran Today</h2>

          <p>
            Take the first step toward understanding the beautiful message and
            guidance of the Holy Quran.
          </p>

          <Link to="/login" className="btn btn-light btn-lg px-4">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default QuranTranslation;
