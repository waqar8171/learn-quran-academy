import React from "react";
import { Link } from "react-router-dom";
import "./quranReading.css";

function QuranReading() {
  return (
    <div className="reading-page">
      {/* ================= HERO ================= */}

      <section className="reading-hero">
        <div className="reading-hero-overlay"></div>

        <div className="reading-hero-content">
          <span>QURAN READING PROGRAM</span>

          <h1>
            Learn to Read the Quran
            <strong> With Confidence</strong>
          </h1>

          <p>
            Build your Quran reading skills step by step with guided lessons
            focused on Arabic letters, pronunciation, fluency and correct
            recitation.
          </p>

          <div className="reading-hero-buttons">
            <Link to="/contact" className="reading-btn primary">
              Start Learning
              <i className="bi bi-arrow-right"></i>
            </Link>

            <Link to="/courses" className="reading-btn secondary">
              View Courses
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="reading-intro">
        <div className="reading-container">
          <div className="reading-heading">
            <span>LEARN STEP BY STEP</span>

            <h2>
              A Simple Path to
              <strong> Better Quran Reading</strong>
            </h2>

            <p>
              Whether you are starting from the beginning or want to improve
              your existing reading skills, our structured lessons help you
              progress at a comfortable pace.
            </p>
          </div>

          <div className="reading-benefits">
            <div className="reading-benefit">
              <div className="reading-icon">
                <i className="bi bi-alphabet-uppercase"></i>
              </div>

              <h3>Arabic Letters</h3>

              <p>
                Become familiar with Arabic letters and learn how each letter is
                pronounced correctly.
              </p>
            </div>

            <div className="reading-benefit">
              <div className="reading-icon">
                <i className="bi bi-volume-up"></i>
              </div>

              <h3>Correct Pronunciation</h3>

              <p>
                Practice the sounds of Arabic words with guidance from an
                experienced Quran teacher.
              </p>
            </div>

            <div className="reading-benefit">
              <div className="reading-icon">
                <i className="bi bi-book"></i>
              </div>

              <h3>Quran Reading</h3>

              <p>
                Gradually move from basic reading exercises toward reading
                Quranic verses more comfortably.
              </p>
            </div>

            <div className="reading-benefit">
              <div className="reading-icon">
                <i className="bi bi-stars"></i>
              </div>

              <h3>Better Recitation</h3>

              <p>
                Improve fluency and develop habits that support clearer and more
                confident recitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEARNING LEVELS ================= */}

      <section className="reading-levels">
        <div className="reading-container">
          <div className="reading-heading">
            <span>OUR LEARNING APPROACH</span>

            <h2>
              From First Letters to
              <strong> Fluent Reading</strong>
            </h2>

            <p>
              Our lessons can be adapted according to your current reading level
              and learning goals.
            </p>
          </div>

          <div className="level-grid">
            <div className="level-card">
              <div className="level-number">01</div>

              <i className="bi bi-grid-3x3-gap"></i>

              <h3>Beginner</h3>

              <p>
                Start with Arabic letters, their shapes, sounds and basic
                joining patterns.
              </p>
            </div>

            <div className="level-card">
              <div className="level-number">02</div>

              <i className="bi bi-pencil-square"></i>

              <h3>Developing</h3>

              <p>
                Practice words, short phrases and basic Quranic reading patterns
                with teacher support.
              </p>
            </div>

            <div className="level-card">
              <div className="level-number">03</div>

              <i className="bi bi-book-half"></i>

              <h3>Quran Reader</h3>

              <p>
                Read Quranic verses regularly while working on pronunciation,
                fluency and confidence.
              </p>
            </div>

            <div className="level-card">
              <div className="level-number">04</div>

              <i className="bi bi-award"></i>

              <h3>Improving Recitation</h3>

              <p>
                Continue refining your reading and apply important recitation
                principles during Quran practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY ONLINE ================= */}

      <section className="reading-online">
        <div className="reading-container">
          <div className="online-grid">
            <div className="online-content">
              <span>LEARN FROM HOME</span>

              <h2>
                Quran Reading Lessons
                <strong> Around Your Schedule</strong>
              </h2>

              <p>
                Online learning makes it easier to maintain a regular Quran
                routine without travelling to a classroom. Students can learn
                from the comfort of home while receiving personal guidance from
                their teacher.
              </p>

              <ul>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  One-to-one teacher guidance
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Flexible lesson scheduling
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Lessons from the comfort of home
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Learning pace suited to the student
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Regular reading practice
                </li>
              </ul>

              <Link to="/contact" className="reading-small-btn">
                Talk to Us
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="online-card">
              <div className="online-card-icon">
                <i className="bi bi-book-open"></i>
              </div>

              <h3>
                Your Quran
                <br />
                Reading Journey
              </h3>

              <p>
                Learn consistently, practice regularly and build confidence one
                lesson at a time.
              </p>

              <div className="online-decoration"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO CAN JOIN ================= */}

      <section className="reading-students">
        <div className="reading-container">
          <div className="reading-heading">
            <span>WHO CAN LEARN?</span>

            <h2>
              Quran Reading for
              <strong> Every Learner</strong>
            </h2>
          </div>

          <div className="student-grid">
            <div className="student-card">
              <i className="bi bi-emoji-smile"></i>

              <h3>Children</h3>

              <p>
                Friendly lessons that help young students develop their reading
                foundation and confidence.
              </p>
            </div>

            <div className="student-card">
              <i className="bi bi-person"></i>

              <h3>Teenagers</h3>

              <p>
                Structured practice for students who want to improve Quran
                reading alongside their studies.
              </p>
            </div>

            <div className="student-card">
              <i className="bi bi-person-heart"></i>

              <h3>Adults</h3>

              <p>
                Start learning from the beginning or improve your current
                reading skills at your own pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="reading-cta">
        <div>
          <span>YOUR JOURNEY CAN START TODAY</span>

          <h2>
            Ready to Improve Your
            <strong> Quran Reading?</strong>
          </h2>

          <p>
            Get in touch with our academy and find a learning routine that fits
            your goals and schedule.
          </p>

          <Link to="/contact">
            Begin Your Quran Journey
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default QuranReading;

// import React from "react";

// const QuranReading = () => {
//   return (
//     <div style={{ paddingTop: "100px", textAlign: "center" }}>
//       <h1>Quran Reading Page</h1>
//       <p>Page successfully opened!</p>
//     </div>
//   );
// };

// export default QuranReading;
