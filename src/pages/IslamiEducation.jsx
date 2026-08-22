import React from "react";
import { Link } from "react-router-dom";
import "./islamicEducation.css";

const IslamicEducation = () => {
  return (
    <div className="islamic-page">
      {/* ================= HERO ================= */}
      <section className="islamic-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="islamic-badge">
                🕌 Islamic Education Program
              </span>

              <h1>
                Learn Islam,
                <span> Live Islam</span>
              </h1>

              <p>
                Build a strong foundation in Islamic knowledge through engaging
                lessons about Aqeedah, Seerah, Hadith, Fiqh, Islamic manners,
                Duas and daily Muslim life.
              </p>

              <div className="islamic-buttons">
                <Link to="/login" className="btn btn-success btn-lg me-2">
                  Start Learning
                </Link>

                <Link to="/contact" className="btn btn-outline-success btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="islamic-hero-box text-center">
                <div className="islamic-icon">🕌</div>

                <h2>التَّعْلِيمُ الإِسْلَامِيُّ</h2>

                <p>Islamic Knowledge for Everyday Life</p>

                <div className="islamic-arabic">رَبِّ زِدْنِي عِلْمًا</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="islamic-intro py-5">
        <div className="container">
          <div className="islamic-section-title text-center">
            <span>ISLAMIC STUDIES</span>

            <h2>Build a Strong Islamic Foundation</h2>

            <p>
              Our Islamic Education Program is designed to help students
              understand the basic teachings of Islam and apply them in their
              everyday lives.
            </p>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="islamic-card">
                <div className="islamic-card-icon">📖</div>

                <h4>Quran & Sunnah</h4>

                <p>
                  Learn essential Islamic teachings through the Quran and
                  authentic Sunnah.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="islamic-card">
                <div className="islamic-card-icon">🕌</div>

                <h4>Islamic Practices</h4>

                <p>
                  Learn Salah, fasting, daily Duas and other important practices
                  of a Muslim's daily life.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="islamic-card">
                <div className="islamic-card-icon">❤️</div>

                <h4>Islamic Character</h4>

                <p>
                  Develop good manners, honesty, kindness, patience and other
                  beautiful Islamic qualities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT YOU WILL LEARN ================= */}
      <section className="islamic-learning py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="islamic-small-title">WHAT YOU WILL LEARN</span>

              <h2>Explore the Teachings of Islam</h2>

              <p>
                Students learn essential Islamic knowledge in a simple,
                organized and age-appropriate way.
              </p>

              <ul className="islamic-list">
                <li>✔ Basic Islamic beliefs and Aqeedah</li>

                <li>✔ Five Pillars of Islam</li>

                <li>✔ Salah and basic Islamic practices</li>

                <li>✔ Seerah of Prophet Muhammad ﷺ</li>

                <li>✔ Selected Hadith and their lessons</li>

                <li>✔ Islamic manners and good character</li>

                <li>✔ Daily Duas and Azkar</li>

                <li>✔ Stories of the Prophets</li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="islamic-learning-box">
                <div className="learning-icon">🕌</div>

                <h3>رَبِّ زِدْنِي عِلْمًا</h3>

                <p>“My Lord, increase me in knowledge.”</p>

                <div className="knowledge-box">
                  <strong>Learn • Understand • Practice</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSE TOPICS ================= */}
      <section className="islamic-topics py-5">
        <div className="container">
          <div className="islamic-section-title text-center">
            <span>COURSE TOPICS</span>

            <h2>What We Teach</h2>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6 col-lg-4">
              <div className="topic-box">
                <div className="topic-icon">☝️</div>

                <h4>Aqeedah</h4>

                <p>Learn the basic beliefs and foundations of Islamic faith.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="topic-box">
                <div className="topic-icon">🕋</div>

                <h4>Five Pillars</h4>

                <p>Understand Shahadah, Salah, Zakat, Sawm and Hajj.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="topic-box">
                <div className="topic-icon">🌙</div>

                <h4>Seerah</h4>

                <p>
                  Learn important lessons from the life of Prophet Muhammad ﷺ.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="topic-box">
                <div className="topic-icon">📜</div>

                <h4>Hadith</h4>

                <p>
                  Study selected Hadith and understand their practical lessons.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="topic-box">
                <div className="topic-icon">🤲</div>

                <h4>Duas & Azkar</h4>

                <p>Memorize important daily Duas and learn their meanings.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="topic-box">
                <div className="topic-icon">❤️</div>

                <h4>Islamic Manners</h4>

                <p>
                  Learn kindness, respect, honesty and beautiful Islamic
                  character.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOR EVERYONE ================= */}
      <section className="islamic-students py-5">
        <div className="container">
          <div className="islamic-section-title text-center">
            <span>FOR EVERYONE</span>

            <h2>Islamic Education for Every Age</h2>

            <p>
              Lessons can be adapted according to the student's age, knowledge
              and learning level.
            </p>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="student-box">
                <div className="student-icon">👧</div>

                <h4>For Kids</h4>

                <p>
                  Fun and easy lessons about Islamic manners, stories, Duas,
                  Salah and basic Islamic knowledge.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="student-box">
                <div className="student-icon">🧑</div>

                <h4>For Teens</h4>

                <p>
                  Build a stronger understanding of faith, Islamic values and
                  everyday Muslim responsibilities.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="student-box">
                <div className="student-icon">👨</div>

                <h4>For Adults</h4>

                <p>
                  Refresh your Islamic knowledge and learn practical teachings
                  at your own pace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="islamic-features py-5">
        <div className="container">
          <div className="islamic-section-title text-center">
            <span>WHY CHOOSE US?</span>

            <h2>Islamic Education Program Features</h2>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6 col-lg-3">
              <div className="islamic-feature-box">
                <span>👨‍🏫</span>

                <h5>Experienced Teachers</h5>

                <p>Learn from dedicated Islamic education teachers.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="islamic-feature-box">
                <span>💻</span>

                <h5>Online Classes</h5>

                <p>Learn Islamic studies from the comfort of your home.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="islamic-feature-box">
                <span>👤</span>

                <h5>Personalized Learning</h5>

                <p>
                  Lessons can be adjusted according to each student's level.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="islamic-feature-box">
                <span>⏰</span>

                <h5>Flexible Timing</h5>

                <p>Choose class times that fit your daily routine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="islamic-cta">
        <div className="container text-center">
          <h2>Start Your Islamic Learning Journey</h2>

          <p>
            Learn the beautiful teachings of Islam and bring Islamic knowledge
            into your everyday life.
          </p>

          <Link to="/login" className="btn btn-light btn-lg px-4">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IslamicEducation;
