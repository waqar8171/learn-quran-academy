import React from "react";
import { Link } from "react-router-dom";
import "./kidsQuran.css";

function KidsQuran() {
  return (
    <div className="kids-page">
      {/* HERO */}
      <section className="kids-hero">
        <div className="kids-hero-overlay"></div>

        <div className="kids-hero-content">
          <span>QURAN LEARNING FOR CHILDREN</span>

          <h1>
            Help Your Child Build a
            <strong> Beautiful Connection With the Quran</strong>
          </h1>

          <p>
            Friendly online Quran lessons designed to help children learn Arabic
            reading, Tajweed, memorization and Islamic values in a comfortable
            learning environment.
          </p>

          <div className="kids-hero-buttons">
            <Link to="/contact" className="kids-btn primary">
              Book a Free Trial
              <i className="bi bi-arrow-right"></i>
            </Link>

            <Link to="/courses" className="kids-btn secondary">
              Explore Classes
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="kids-intro">
        <div className="kids-container">
          <div className="kids-section-heading">
            <span>WHY CHOOSE OUR KIDS PROGRAM?</span>

            <h2>
              A Comfortable Way for Children to
              <strong> Learn Quran Online</strong>
            </h2>

            <p>
              We understand that every child learns differently. Our online
              Quran program combines patient teachers, structured lessons and
              regular practice to make Quran learning simple and enjoyable.
            </p>
          </div>

          <div className="kids-features">
            <div className="kids-feature">
              <div className="feature-icon">
                <i className="bi bi-person-heart"></i>
              </div>

              <h3>Patient Teachers</h3>

              <p>
                Children learn with teachers who understand how to communicate
                with young students in a friendly way.
              </p>
            </div>

            <div className="kids-feature">
              <div className="feature-icon">
                <i className="bi bi-clock"></i>
              </div>

              <h3>Flexible Lessons</h3>

              <p>
                Choose lesson times that fit your family's daily routine and
                your child's school schedule.
              </p>
            </div>

            <div className="kids-feature">
              <div className="feature-icon">
                <i className="bi bi-laptop"></i>
              </div>

              <h3>Learn From Home</h3>

              <p>
                Your child can attend lessons from home without travelling to a
                physical classroom.
              </p>
            </div>

            <div className="kids-feature">
              <div className="feature-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>

              <h3>Regular Progress</h3>

              <p>
                Consistent lessons and practice help students develop their
                Quran reading skills step by step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="kids-courses">
        <div className="kids-container">
          <div className="kids-section-heading">
            <span>OUR CHILDREN'S PROGRAMS</span>

            <h2>
              Quran Classes Designed for
              <strong> Young Learners</strong>
            </h2>

            <p>
              From the very first Arabic letters to advanced Quran reading and
              memorization, children can follow a learning path according to
              their age and ability.
            </p>
          </div>

          <div className="kids-course-grid">
            <div className="kids-course-card">
              <div className="course-number">01</div>

              <i className="bi bi-book"></i>

              <h3>Noorani Qaida</h3>

              <p>
                Build a strong foundation by learning Arabic letters, sounds and
                basic Quran reading rules.
              </p>

              <Link to="/courses">
                Learn More
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="kids-course-card">
              <div className="course-number">02</div>

              <i className="bi bi-book-half"></i>

              <h3>Quran Reading</h3>

              <p>
                Help your child become more confident in reading the Quran with
                correct pronunciation and fluency.
              </p>

              <Link to="/courses">
                Learn More
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="kids-course-card">
              <div className="course-number">03</div>

              <i className="bi bi-stars"></i>

              <h3>Tajweed</h3>

              <p>
                Introduce important Tajweed principles so children can improve
                the accuracy of their recitation.
              </p>

              <Link to="/courses">
                Learn More
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="kids-course-card">
              <div className="course-number">04</div>

              <i className="bi bi-lightbulb"></i>

              <h3>Quran Memorization</h3>

              <p>
                Develop a manageable memorization routine with revision,
                repetition and regular teacher guidance.
              </p>

              <Link to="/courses">
                Learn More
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="kids-course-card">
              <div className="course-number">05</div>

              <i className="bi bi-translate"></i>

              <h3>Quran Understanding</h3>

              <p>
                Help children discover the meanings and lessons behind selected
                Quranic verses.
              </p>

              <Link to="/courses">
                Learn More
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="kids-course-card">
              <div className="course-number">06</div>

              <i className="bi bi-moon-stars"></i>

              <h3>Islamic Studies</h3>

              <p>
                Introduce children to Islamic manners, basic beliefs, duas and
                important lessons from Islamic history.
              </p>

              <Link to="/courses">
                Learn More
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="kids-process">
        <div className="kids-container">
          <div className="kids-section-heading">
            <span>HOW IT WORKS</span>

            <h2>
              Getting Started Is
              <strong> Simple</strong>
            </h2>
          </div>

          <div className="process-grid">
            <div className="process-item">
              <div className="process-number">1</div>

              <h3>Contact Us</h3>

              <p>
                Tell us about your child and the type of Quran learning you are
                looking for.
              </p>
            </div>

            <div className="process-line"></div>

            <div className="process-item">
              <div className="process-number">2</div>

              <h3>Choose a Schedule</h3>

              <p>
                Select a convenient lesson time that works well for your child
                and family.
              </p>
            </div>

            <div className="process-line"></div>

            <div className="process-item">
              <div className="process-number">3</div>

              <h3>Start Learning</h3>

              <p>
                Your child begins regular online Quran lessons with guidance
                from a dedicated teacher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARENTS */}
      <section className="parents-section">
        <div className="kids-container">
          <div className="parents-grid">
            <div className="parents-content">
              <span>FOR PARENTS</span>

              <h2>
                Supporting Your Child's
                <strong> Quran Journey</strong>
              </h2>

              <p>
                Parents play an important role in helping children develop
                consistent learning habits. A calm routine, positive
                encouragement and regular revision can make a meaningful
                difference.
              </p>

              <ul>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Encourage regular lesson attendance
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Create a quiet learning space at home
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Celebrate progress and small achievements
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Encourage daily Quran practice
                </li>
              </ul>
            </div>

            <div className="parents-box">
              <i className="bi bi-quote"></i>

              <p>
                "The goal is not simply to complete lessons. It is to help
                children develop a lasting love and respect for the Quran."
              </p>

              <span>Quran Academy</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="kids-cta">
        <div>
          <span>START YOUR CHILD'S JOURNEY</span>

          <h2>
            Give Your Child the Gift of
            <strong> Quran Learning</strong>
          </h2>

          <p>
            Contact us today and discover a learning plan that fits your child's
            age, level and schedule.
          </p>

          <Link to="/contact">
            Get Started Today
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default KidsQuran;
