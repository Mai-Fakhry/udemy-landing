export default function PersonalPlanSection() {
  return (
    <section className="personal-plan">
      <div className="container">
        <div className="plan-banner">
          <div className="banner-content">
            <div className="content-section">
              <div className="text-content">
                <h3 className="title">Reimagine your career in the AI era</h3>
                <p className="description">Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.</p>
              </div>
              <ul className="features-grid">
                <li className="feature-item">
                  <div className="feature-icon purple">
                    <SparklesIcon />
                  </div>
                  <span><strong>Learn</strong> AI and more</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon green">
                    <TrophyIcon />
                  </div>
                  <span><strong>Prep</strong> for a certification</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon orange">
                    <QuestionAnswerIcon />
                  </div>
                  <span><strong>Practice</strong> with AI coaching</span>
                </li>
                <li className="feature-item">
                  <div className="feature-icon teal">
                    <LightbulbIcon />
                  </div>
                  <span><strong>Advance</strong> your career</span>
                </li>
              </ul>
              <div className="cta-section">
                <a href="/personal-plan/" className="cta-button"> Learn more</a>
                <div className="price-text">
                  Starting at E£204.00/month
                </div>
              </div>
            </div>
            <div className="image-section">
              <img src="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@1x.webp" alt="Role play interface showing AI conversation practice" loading="eager"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SparklesIcon = () => <svg><use xlinkHref="#icon-sparkles" /></svg>;
const TrophyIcon = () => <svg><use xlinkHref="#icon-trophy" /></svg>;
const QuestionAnswerIcon = () => <svg><use xlinkHref="#icon-question-answer-outline" /></svg>;
const LightbulbIcon = () => <svg><use xlinkHref="#icon-lightbulb" /></svg>;
