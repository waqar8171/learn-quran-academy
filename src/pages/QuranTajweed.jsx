import React from "react";
import { Link } from "react-router-dom";
import "./quranTajweed.css";

const QuranTajweed = () => {
  return (
    <div className="tajweed-page">
      {/* ================= HERO ================= */}
      <section className="tajweed-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="tajweed-badge">📖 Learn Quran with Tajweed</span>

              <h1>
                Learn Quran with
                <span> Proper Tajweed</span>
              </h1>

              <p>
                Learn how to recite the Holy Quran correctly with proper
                pronunciation, rules and beautiful Tajweed from experienced
                Quran teachers.
              </p>

              <div className="tajweed-buttons">
                <Link to="/login" className="btn btn-success me-2">
                  Start Learning
                </Link>

                <Link to="/contact" className="btn btn-outline-success">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div className="tajweed-quran-box">
                <div className="quran-icon">📖</div>
                <h3>قرآن مجید</h3>
                <p>Read Quran with Correct Tajweed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="tajweed-intro py-5">
        <div className="container">
          <div className="section-title text-center">
            <span>WHY LEARN TAJWEED?</span>
            <h2>Improve Your Quran Recitation</h2>
            <p>
              Tajweed helps you pronounce every letter of the Quran correctly
              and recite the Holy Quran with confidence.
            </p>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="tajweed-card">
                <div className="card-icon">🕌</div>
                <h4>Correct Pronunciation</h4>
                <p>
                  Learn the correct pronunciation and articulation points of
                  every Arabic letter.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="tajweed-card">
                <div className="card-icon">📚</div>
                <h4>Tajweed Rules</h4>
                <p>
                  Understand important Tajweed rules including Noon Sakinah,
                  Meem Sakinah, Madd and Qalqalah.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="tajweed-card">
                <div className="card-icon">🎧</div>
                <h4>Practical Recitation</h4>
                <p>
                  Practice Quran recitation with experienced teachers and
                  receive individual corrections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT YOU WILL LEARN ================= */}
      <section className="what-learn py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2>What Will You Learn?</h2>

              <p className="lead">
                Our Tajweed course is designed for beginners and students who
                want to improve their Quran recitation.
              </p>

              <ul className="tajweed-list">
                <li>✔ Arabic letters and their articulation points</li>
                <li>✔ Makharij al-Huroof</li>
                <li>✔ Rules of Noon Sakinah and Tanween</li>
                <li>✔ Rules of Meem Sakinah</li>
                <li>✔ Qalqalah rules</li>
                <li>✔ Madd and its types</li>
                <li>✔ Waqf and Ibtida</li>
                <li>✔ Practical Quran recitation</li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="tajweed-learning-box">
                <h3>مَخَارِجُ الْحُرُوفِ</h3>
                <p>
                  Learn where each Arabic letter comes from and how it should be
                  pronounced correctly.
                </p>

                <div className="arabic-letters">أ ب ت ث ج ح خ</div>

                <div className="arabic-letters">ع غ ف ق ك ل م</div>

                <div className="arabic-letters">ن هـ و ي</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSE FEATURES ================= */}
      <section className="course-features py-5">
        <div className="container">
          <div className="section-title text-center">
            <span>OUR TAJWEED COURSE</span>
            <h2>Why Choose Our Course?</h2>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6 col-lg-3">
              <div className="feature-box">
                <span>👨‍🏫</span>
                <h5>Qualified Teachers</h5>
                <p>Learn from experienced Quran tutors.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-box">
                <span>💻</span>
                <h5>Online Classes</h5>
                <p>Attend classes from anywhere in the world.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-box">
                <span>⏰</span>
                <h5>Flexible Timing</h5>
                <p>Choose a schedule that suits your routine.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-box">
                <span>👤</span>
                <h5>One-to-One Classes</h5>
                <p>Get individual attention from your teacher.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="tajweed-cta">
        <div className="container text-center">
          <h2>Start Your Quran Tajweed Journey Today</h2>

          <p>
            Improve your Quran recitation and learn to read the Holy Quran with
            confidence.
          </p>

          <Link to="/login" className="btn btn-light btn-lg">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default QuranTajweed;
