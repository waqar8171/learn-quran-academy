import React from "react";
import { Link } from "react-router-dom";
import "./hifzQuran.css";

const HifzQuran = () => {
  return (
    <div className="hifz-page">
      {/* ================= HERO ================= */}
      <section className="hifz-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="hifz-badge">📖 Quran Memorization Program</span>

              <h1>
                Memorize the
                <span> Holy Quran</span>
                With Confidence
              </h1>

              <p>
                Start your beautiful journey of memorizing the Holy Quran with
                experienced teachers, personalized lessons and a structured Hifz
                program.
              </p>

              <div className="hifz-buttons">
                <Link to="/login" className="btn btn-success btn-lg me-2">
                  Start Hifz Journey
                </Link>

                <Link to="/contact" className="btn btn-outline-success btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hifz-quran-box text-center">
                <div className="hifz-icon">📖</div>

                <h2>حِفْظُ الْقُرْآنِ</h2>

                <p>Quran Memorization</p>

                <div className="hifz-arabic">
                  وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="hifz-intro py-5">
        <div className="container">
          <div className="hifz-section-title text-center">
            <span>QURAN MEMORIZATION</span>

            <h2>Begin Your Hifz Journey</h2>

            <p>
              Our Quran memorization program helps students memorize the Quran
              step-by-step while improving their recitation, pronunciation and
              understanding.
            </p>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="hifz-card">
                <div className="hifz-card-icon">👨‍🏫</div>

                <h4>Expert Quran Teachers</h4>

                <p>
                  Learn from experienced and dedicated Quran teachers who guide
                  students throughout their memorization journey.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="hifz-card">
                <div className="hifz-card-icon">📚</div>

                <h4>Structured Hifz Plan</h4>

                <p>
                  Students follow a personalized memorization schedule according
                  to their age, level and available time.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="hifz-card">
                <div className="hifz-card-icon">🎧</div>

                <h4>Daily Revision</h4>

                <p>
                  Regular revision helps students retain previously memorized
                  Surahs and improve their fluency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="hifz-process py-5">
        <div className="container">
          <div className="hifz-section-title text-center">
            <span>OUR METHOD</span>

            <h2>How Our Hifz Program Works</h2>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6 col-lg-3">
              <div className="process-box">
                <div className="process-number">01</div>

                <h4>Assessment</h4>

                <p>
                  We assess the student's Quran reading and memorization level
                  before starting.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="process-box">
                <div className="process-number">02</div>

                <h4>Daily Lesson</h4>

                <p>
                  Students memorize a manageable portion of Quran during each
                  lesson.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="process-box">
                <div className="process-number">03</div>

                <h4>Revision</h4>

                <p>
                  Previously memorized portions are regularly revised to
                  strengthen memory.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="process-box">
                <div className="process-number">04</div>

                <h4>Progress Tracking</h4>

                <p>
                  Teachers monitor progress and provide feedback to help
                  students improve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT STUDENTS LEARN ================= */}
      <section className="hifz-learning py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="hifz-small-title">WHAT YOU WILL LEARN</span>

              <h2>More Than Just Memorization</h2>

              <p>
                Our program focuses on accurate recitation and strong
                memorization habits.
              </p>

              <ul className="hifz-list">
                <li>✔ Memorization of Quranic Surahs</li>
                <li>✔ Correct Quran pronunciation</li>
                <li>✔ Tajweed during recitation</li>
                <li>✔ Daily revision techniques</li>
                <li>✔ Fluency in Quran recitation</li>
                <li>✔ Regular teacher assessment</li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="hifz-progress-box">
                <div className="progress-icon">📖</div>

                <h3>Your Quran</h3>

                <h2>Your Journey</h2>

                <p>
                  Every memorized verse is a step closer to completing the
                  beautiful journey of Hifz.
                </p>

                <div className="progress-line">
                  <span></span>
                </div>

                <small>Learn • Memorize • Revise • Perfect</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="hifz-features py-5">
        <div className="container">
          <div className="hifz-section-title text-center">
            <span>WHY CHOOSE US?</span>

            <h2>Hifz Program Features</h2>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6 col-lg-3">
              <div className="hifz-feature-box">
                <span>💻</span>
                <h5>Online Classes</h5>
                <p>Learn Quran from the comfort of your home.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="hifz-feature-box">
                <span>👤</span>
                <h5>One-to-One</h5>
                <p>Personalized attention for every student.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="hifz-feature-box">
                <span>⏰</span>
                <h5>Flexible Schedule</h5>
                <p>Choose class times that fit your routine.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="hifz-feature-box">
                <span>📊</span>
                <h5>Progress Tracking</h5>
                <p>Monitor your memorization and revision progress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="hifz-cta">
        <div className="container text-center">
          <h2>Start Memorizing the Quran Today</h2>

          <p>
            Take the first step toward completing your Quran memorization
            journey with our dedicated teachers.
          </p>

          <Link to="/login" className="btn btn-light btn-lg px-4">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HifzQuran;
