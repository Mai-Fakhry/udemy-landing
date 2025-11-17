import { useRef } from "react";
import { courses } from "../data/courses";
import { categories } from "../data/categories";

export default function Courses() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.querySelector(".course-card");
    const cardWidth = card ? card.offsetWidth + 24 : 304;
    const amount = cardWidth * (direction === "left" ? -1 : 1);
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="courses-section">
      <div className="container">
        <h2 className="section-title">Skills to transform your career and life </h2>
        <p className="section-subtitle">From critical skills to technical topics, Udemy supports your professional development.</p>
        <div className="category-tabs">
          {categories.map((cat, i) => (
            <button key={cat} className={`tab ${i === 0 ? "active" : ""}`} onClick={(e) => {
                document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
                e.target.classList.add("active");
              }}> {cat} </button>
          ))}
        </div>

        <div className="carousel-wrapper">
          <button className="nav-arrow left" onClick={() => scroll("left")} aria-label="Scroll to previous courses">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="nav-arrow right" onClick={() => scroll("right")} aria-label="Scroll to next courses">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div ref={scrollRef} className="carousel">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <img src={course.image} alt={course.title} className="course-img" loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/400x160/cbd5e1/475569?text=Course+Image";
                  }}/>
                <div className="card-content">
                  <h3 className="card-title">{course.title}</h3>
                  <p className="card-author">{course.author}</p>
                  <div className="rating-line">
                    {course.badge && <Badge {...course.badge} />}
                    <span className="rating">{course.rating}</span>
                    <StarIcon />
                    <span className="students">({course.students.toLocaleString()})</span>
                  </div>
                  <p className="price">{course.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="show-all">
          <a href="#" className="show-all-link">Show all Artificial Intelligence (AI) courses →</a>
        </div>
      </div>
    </section>
  );
}

const StarIcon = () => (
  <svg className="star" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.963c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.34 9.39c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.963z" />
  </svg>
);

const Badge = ({ type, color }) => (
  <span className="badge" style={{ backgroundColor: color }}>
    {type}
  </span>
);
