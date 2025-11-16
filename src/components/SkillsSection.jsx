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
      left: index * cardWidth * 3,
      behavior: "smooth",
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
    <section className="ud-full-viewport-container">
      <div className="ud-container">
        <div className="enriched-skills_layout-12-column-container">
          {/* Header */}
          <div className="enriched-skills_placeholder-3-column">
            <h3 className="enriched-skills_heading ud-heading-xxl">
              Learn essential career and life skills
            </h3>
            <p className="enriched-skills_description ud-text-md">
              Udemy helps you build in-demand skills fast and advance your career in a changing job market.
            </p>
          </div>

          {/* Carousel */}
          <div className="enriched-skills_carousel-9-column-container">
            <section aria-label="Carousel" className="carousel_container">
              <div ref={scrollRef} className="enriched-skills_carousel-9-column carousel_scroll-port"
                data-purpose="scroll-port"
                data-testid="carousel"
                id="scroll-port--37"
                aria-live="polite"
              >
                {cards.map((card, i) => (
                  <div key={i} data-index={i} className="carousel_scroll-item">
                    <a className="topic-card_topic-card" href={card.url} style={{ backgroundImage: `url('${card.img}')` }}>
                      <div className="topic-card_info">
                        <div className="tag_tag">
                          <PeopleIcon />
                          <div data-testid="num-enrollments">{card.enroll}</div>
                        </div>
                        <div className="topic-card_title-container">
                          <h4 className="topic-card_title ud-text-lg">{card.title}</h4>
                          <div className="topic-card_icon-container">
                            <RightArrowIcon />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Pager */}
              <div className="enriched-skills_pager-buttons-wrapper">
                <button type="button"
                  className={`ud-btn ud-carousel-pager-button ud-carousel-pager-button-prev ${currentIndex === 0 ? "ud-btn-disabled" : ""}`}
                  onClick={goPrev} disabled={currentIndex === 0}>
                  <PrevIcon />
                </button>

                <div className="slide-indicator_wrapper">
                  {Array.from({ length: totalSlides }).map((_, i) => (
                    <div key={i} className={`slide-indicator_dot ${i === currentIndex ? "slide-indicator_active" : ""}`}/>
                  ))}
                </div>

                <button
                  type="button"
                  className={`ud-btn ud-carousel-pager-button ud-carousel-pager-button-next ${currentIndex === maxIndex ? "ud-btn-disabled" : ""}`}
                  onClick={goNext}
                  disabled={currentIndex === maxIndex}
                >
                  <NextIcon />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

// SVG Icons
const PeopleIcon = () => (
  <svg>
    <use xlinkHref="#icon-people" />
  </svg>
);

const RightArrowIcon = () => (
  <svg>
    <use xlinkHref="#icon-arrow-right" />
  </svg>
);

const PrevIcon = () => (
  <svg>
    <use xlinkHref="#icon-previous" />
  </svg>
);

const NextIcon = () => (
  <svg>
    <use xlinkHref="#icon-next" />
  </svg>
);
