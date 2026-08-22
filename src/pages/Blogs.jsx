import React, { useState } from "react";
import "./blogs.css";
import Footer from "../components/Footer";

const blogs = [
  {
    id: 1,
    category: "Quran Learning",
    title: "Building a Daily Connection With the Quran",
    description:
      "A simple guide to making Quran reading a meaningful part of your everyday routine, even when your schedule is busy.",
    image: "/images/blog-1.jpg",
  },

  {
    id: 2,
    category: "Tajweed",
    title: "Small Tajweed Steps That Can Improve Your Recitation",
    description:
      "Learn practical ways to improve your pronunciation and recitation by focusing on a few important Tajweed rules at a time.",
    image: "/images/blog-2.jpg",
  },

  {
    id: 3,
    category: "Kids Quran",
    title: "Making Quran Time Enjoyable for Young Learners",
    description:
      "Explore simple activities and routines that can help children develop a positive and lasting relationship with Quran learning.",
    image: "/images/blog-3.jpg",
  },

  {
    id: 4,
    category: "Noorani Qaida",
    title: "A Beginner's First Step Toward Reading the Quran",
    description:
      "Understand how Noorani Qaida can help beginners recognize Arabic letters, sounds and basic reading patterns.",
    image: "/images/blog-4.jpg",
  },

  {
    id: 5,
    category: "Hifz Quran",
    title: "Creating a Consistent Quran Memorization Routine",
    description:
      "Discover practical habits for revision, repetition and daily practice that can make memorization more manageable.",
    image: "/images/blog-5.jpg",
  },

  {
    id: 6,
    category: "Islamic Studies",
    title: "Learning Islam Beyond the Classroom",
    description:
      "See how Islamic learning can become part of everyday life through good manners, reflection and meaningful family discussions.",
    image: "/images/blog-6.jpg",
  },

  {
    id: 7,
    category: "Quran Translation",
    title: "From Reading Words to Understanding Their Message",
    description:
      "Explore why learning the meaning of Quranic verses can add depth to your reading and personal reflection.",
    image: "/images/blog-7.jpg",
  },

  {
    id: 8,
    category: "Quran Learning",
    title: "Choosing the Right Online Quran Learning Routine",
    description:
      "A practical look at lesson timing, teacher interaction and regular practice when learning Quran from home.",
    image: "/images/blog-8.jpg",
  },

  {
    id: 9,
    category: "Kids Quran",
    title: "Helping Children Develop a Love for Quran",
    description:
      "Simple ideas for parents to create a calm and encouraging environment where children can enjoy learning and practicing Quran.",
    image: "/images/blog-9.jpg",
  },
];

const categories = [
  "All",
  "Quran Learning",
  "Tajweed",
  "Kids Quran",
  "Noorani Qaida",
  "Hifz Quran",
  "Islamic Studies",
  "Quran Translation",
];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <div className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <span>LEARN • REFLECT • GROW</span>

          <h1>
            Explore Our <strong>Quran Journal</strong>
          </h1>

          <p>
            Helpful ideas, learning resources and thoughtful guidance to support
            you and your family on your Quran journey.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="blog-section">
        <div className="blog-heading">
          <span>FROM OUR ACADEMY</span>

          <h2>
            Ideas for Your <strong>Quran Journey</strong>
          </h2>

          <p>
            Find practical guidance and inspiring resources for students,
            parents and anyone who wants to learn and understand the Quran.
          </p>
        </div>
        <div className="blog-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {filteredBlogs.map((blog) => (
            <article className="blog-card" key={blog.id}>
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />

                <span>{blog.category}</span>
              </div>

              <div className="blog-content">
                <small>Quran Academy</small>

                <h3>{blog.title}</h3>

                <p>{blog.description}</p>

                <button className="read-more">
                  Read More
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="blog-cta">
        <div>
          <span>YOUR QURAN JOURNEY STARTS HERE</span>

          <h2>
            Take the Next Step With <strong>Quran Learning</strong>
          </h2>

          <p>
            Learn at your own pace with guidance from dedicated Quran teachers
            and a learning routine designed around your needs.
          </p>

          <button>
            Start Learning Today
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
