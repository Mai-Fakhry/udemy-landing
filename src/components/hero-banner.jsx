
export default function Hero() {
  return (
    <section className="udemy-hero-banner">
      <div className="banner-container">
        <div className="banner-card">
          <img src="https://img-c.udemycdn.com/notices/home_carousel_slide/image/4ea0e369-e5a2-4a86-b616-2fc2312a8efd.png" alt="New learner offer: Courses from E£259.99"className="banner-image" loading="eager"/>
          <div className="card-content">
            <h1 className="banner-title">Jump into learning — for <span className="highlight">less</span></h1>
            <p className="banner-subtitle"> If you're new to Udemy, we've got good news: For a limited time, courses start at just <strong>E£259.99</strong> for new learners!</p>
            <button className="signup-btn">Sign up now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
