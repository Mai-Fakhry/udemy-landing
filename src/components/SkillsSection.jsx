import { useState, useRef, useEffect } from "react";
import { cards } from "../data/cards.js";

export default function SkillsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const totalSlides = Math.ceil(cards.length / 3);
  const maxIndex = totalSlides - 1;

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0].offsetWidth + 24;
    scrollRef.current.scrollTo({
      left: index * cardWidth * 3, behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const goPrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    scrollToIndex(newIndex);
  };

  const goNext = () => {
    const newIndex = currentIndex < maxIndex ? currentIndex + 1 : maxIndex;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const cardWidth = scrollRef.current.children[0].offsetWidth + 24;
      const scrollLeft = scrollRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth * 3));
      setCurrentIndex(Math.min(newIndex, maxIndex));
    };

    const el = scrollRef.current;
    el?.addEventListener("scroll", handleScroll);
    return () => el?.removeEventListener("scroll", handleScroll);
  }, [maxIndex]);

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Learn essential career and life skills</h2>
          <p>
            Udemy helps you build in-demand skills fast and advance your career in a changing job market.
          </p>
        </div>
        <div className="carousel-container">
          <div ref={scrollRef} className="carousel-scroll" aria-live="polite">
            {cards.map((card, i) => (
              <div key={i} className="card-item">
                <a className="skill-card" href={card.url} style={{ backgroundImage: `url('${card.img}')` }}>
                  <div className="skill-info">
                    <div className="skill-users">
                      <span>{card.enroll}</span>
                    </div>
                    <div className="skill-title-row">
                      <h4>{card.title}</h4>
                      <span className="arrow-icon">›</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="pager">
            <button type="button" className={`arrow-btn prev ${currentIndex === 0 ? "disabled" : ""}`} onClick={goPrev} disabled={currentIndex === 0}> ‹ </button>
            <div className="dots">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <div key={i} className={`dot ${i === currentIndex ? "active" : ""}`}/>))} </div>
            <button type="button" className={`arrow-btn next ${currentIndex === maxIndex ? "disabled" : ""}`} onClick={goNext} disabled={currentIndex === maxIndex}> ›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
