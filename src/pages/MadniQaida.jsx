import React from "react";
import { Link } from "react-router-dom";
import "./madniQaida.css";

const MadniQaida = () => {
  return (
    <div className="madni-page">
      {/* ================= HERO ================= */}
      <section className="madni-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="madni-badge">
                📖 Madni Qaida & Tajweed Course
              </span>

              <h1>
                Learn Madni Qaida
                <span> With Tajweed</span>
              </h1>

              <p>
                Start your Quran learning journey with Madni Qaida and learn the
                correct pronunciation, Arabic letters, Makharij and basic
                Tajweed rules before reading the Holy Quran.
              </p>

              <div className="madni-buttons">
                <Link to="/login" className="btn btn-success btn-lg me-2">
                  Start Learning
                </Link>

                <Link to="/contact" className="btn btn-outline-success btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="madni-hero-box text-center">
                <div className="madni-book">📖</div>

                <h2>مَدَنِي قَاعِدَہ</h2>

                <p>Madni Qaida with Basic Tajweed</p>

                <div className="madni-arabic">
                  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="madni-intro py-5">
        <div className="container">
          <div className="madni-section-title text-center">
            <span>MADNI QAIDA COURSE</span>

            <h2>Build a Strong Quran Reading Foundation</h2>

            <p>
              Madni Qaida is an excellent starting point for students who want
              to learn Arabic letters, correct pronunciation and the basic rules
              needed for Quran reading.
            </p>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="madni-card">
                <div className="madni-card-icon">🔤</div>

                <h4>Arabic Letters</h4>

                <p>
                  Learn Arabic letters and recognize their correct shapes and
                  sounds.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="madni-card">
                <div className="madni-card-icon">👄</div>

                <h4>Correct Pronunciation</h4>

                <p>
                  Learn how to pronounce Quranic letters correctly using proper
                  articulation points.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="madni-card">
                <div className="madni-card-icon">📖</div>

                <h4>Quran Reading</h4>

                <p>
                  Build the skills needed to move from Qaida lessons to reading
                  the Holy Quran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MADNI QAIDA + TAJWEED ================= */}
      <section className="madni-learning py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="madni-small-title">MADNI QAIDA + TAJWEED</span>

              <h2>Learn Qaida With Tajweed</h2>

              <p>
                Our course does not only focus on reading the Qaida. Students
                also learn the basic Tajweed rules needed for accurate Quran
                recitation.
              </p>

              <ul className="madni-list">
                <li>✔ Arabic alphabet recognition</li>

                <li>✔ Harakat: Fatha, Kasra and Damma</li>

                <li>✔ Tanween and Sukoon</li>

                <li>✔ Madd and basic stretching rules</li>

                <li>✔ Qalqalah</li>

                <li>✔ Noon Sakinah and Tanween</li>

                <li>✔ Meem Sakinah</li>

                <li>✔ Basic Makharij</li>

                <li>✔ Correct pronunciation practice</li>

                <li>✔ Practical Quran reading</li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="madni-tajweed-box">
                <div className="tajweed-icon">📖</div>

                <h3>مَخَارِجُ الْحُرُوفِ</h3>

                <p>
                  Learn the correct places of articulation of Arabic letters.
                </p>

                <div className="arabic-letters">أ ب ت ث ج ح خ</div>

                <div className="arabic-letters">د ذ ر ز س ش ص ض</div>

                <div className="arabic-letters">ط ظ ع غ ف ق ك</div>

                <div className="arabic-letters">ل م ن هـ و ي</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSE LEVELS ================= */}
      <section className="madni-levels py-5">
        <div className="container">
          <div className="madni-section-title text-center">
            <span>LEARNING STEPS</span>

            <h2>From Madni Qaida to Quran Reading</h2>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6 col-lg-3">
              <div className="madni-step">
                <div className="step-number">01</div>

                <h4>Letters</h4>

                <p>Learn Arabic letters and their sounds.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="madni-step">
                <div className="step-number">02</div>

                <h4>Harakat</h4>

                <p>Practice Fatha, Kasra, Damma and other basic signs.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="madni-step">
                <div className="step-number">03</div>

                <h4>Tajweed</h4>

                <p>Learn basic Tajweed and pronunciation rules.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="madni-step">
                <div className="step-number">04</div>

                <h4>Quran Reading</h4>

                <p>Apply your skills while reading the Holy Quran.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TAJWEED RULES ================= */}
      <section className="madni-rules py-5">
        <div className="container">
          <div className="madni-section-title text-center">
            <span>BASIC TAJWEED</span>

            <h2>Tajweed Rules We Introduce</h2>

            <p>
              Students gradually learn essential rules according to their
              learning level.
            </p>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6 col-lg-4">
              <div className="rule-box">
                <div className="rule-icon">🔤</div>

                <h4>Makharij</h4>

                <p>Learn the correct articulation points of Arabic letters.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="rule-box">
                <div className="rule-icon">🔊</div>

                <h4>Qalqalah</h4>

                <p>Practice the correct pronunciation of Qalqalah letters.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="rule-box">
                <div className="rule-icon">➡️</div>

                <h4>Madd</h4>

                <p>
                  Understand basic elongation rules used during Quran reading.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="rule-box">
                <div className="rule-icon">🌙</div>

                <h4>Noon Sakinah</h4>

                <p>Learn the introductory rules of Noon Sakinah and Tanween.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="rule-box">
                <div className="rule-icon">📖</div>

                <h4>Meem Sakinah</h4>

                <p>Learn the basic rules of Meem Sakinah.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="rule-box">
                <div className="rule-icon">👄</div>

                <h4>Pronunciation</h4>

                <p>Practice clear and accurate Quranic pronunciation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO IS IT FOR ================= */}
      <section className="madni-students py-5">
        <div className="container">
          <div className="madni-section-title text-center">
            <span>WHO CAN JOIN?</span>

            <h2>Madni Qaida for Every Beginner</h2>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="student-box">
                <div className="student-icon">👧</div>

                <h4>Kids</h4>

                <p>
                  Fun and easy Qaida lessons for children starting their Quran
                  learning journey.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="student-box">
                <div className="student-icon">🧑</div>

                <h4>Beginners</h4>

                <p>
                  Perfect for anyone who wants to learn Quran reading from the
                  beginning.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="student-box">
                <div className="student-icon">👨</div>

                <h4>Adults</h4>

                <p>
                  Flexible lessons for adults who want to improve their Quran
                  reading and pronunciation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="madni-features py-5">
        <div className="container">
          <div className="madni-section-title text-center">
            <span>WHY CHOOSE US?</span>

            <h2>Madni Qaida Course Features</h2>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6 col-lg-3">
              <div className="madni-feature-box">
                <span>👨‍🏫</span>

                <h5>Experienced Teachers</h5>

                <p>Learn with dedicated Quran teachers.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="madni-feature-box">
                <span>💻</span>

                <h5>Online Classes</h5>

                <p>Learn Madni Qaida from anywhere.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="madni-feature-box">
                <span>👤</span>

                <h5>One-to-One Learning</h5>

                <p>Get personal attention from your teacher.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="madni-feature-box">
                <span>⏰</span>

                <h5>Flexible Timing</h5>

                <p>Choose a schedule that works for you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="madni-cta">
        <div className="container text-center">
          <h2>Start Your Quran Learning Journey</h2>

          <p>
            Begin with Madni Qaida, learn Tajweed and move confidently toward
            reading the Holy Quran.
          </p>

          <Link to="/login" className="btn btn-light btn-lg px-4">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MadniQaida;
