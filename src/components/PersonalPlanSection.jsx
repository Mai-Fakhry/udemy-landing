export default function PersonalPlanSection() {
  return (
    <section className="ud-full-viewport-container">
      <div className="ud-container">
        <section className="personal-plan-banner">
          <div className="personal-plan-banner_banner-content">
            <div className="personal-plan-banner_content-section">
              <div className="personal-plan-banner_text-content">
                <h3 className="ud-heading-xxl personal-plan-banner_title">
                  Reimagine your career in the AI era
                </h3>
                <p className="personal-plan-banner_description">
                  Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.
                </p>
              </div>

              <ul className="personal-plan-banner_features-grid ud-unstyled-list">
                <li className="personal-plan-banner_feature-item">
                  <div className="personal-plan-banner_feature-icon purple">
                    <SparklesIcon />
                  </div>
                  <span className="ud-text-md"><strong>Learn</strong> AI and more</span>
                </li>
                <li className="personal-plan-banner_feature-item">
                  <div className="personal-plan-banner_feature-icon green">
                    <TrophyIcon />
                  </div>
                  <span className="ud-text-md"><strong>Prep</strong> for a certification</span>
                </li>
                <li className="personal-plan-banner_feature-item">
                  <div className="personal-plan-banner_feature-icon orange">
                    <QuestionAnswerIcon />
                  </div>
                  <span className="ud-text-md"><strong>Practice</strong> with AI coaching</span>
                </li>
                <li className="personal-plan-banner_feature-item">
                  <div className="personal-plan-banner_feature-icon teal">
                    <LightbulbIcon />
                  </div>
                  <span className="ud-text-md"><strong>Advance</strong> your career</span>
                </li>
              </ul>

              {/* CTA + Price */}
              <div className="personal-plan-banner_cta-section">
                <a
                  href="/personal-plan/"
                  className="ud-btn ud-btn-medium ud-btn-white-solid ud-btn-text-sm personal-plan-banner_cta-button"
                  data-testid="cta-button"
                >
                  <span className="ud-btn-label">Learn more</span>
                </a>
                <div className="personal-plan-banner_price-text">
                  <div>
                    <div className="plan-period_plan-period-one-line">
                      Starting at E£204.00/month
                    </div>
                    <div className="plan-period_cancel-anytime-one-line"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="personal-plan-banner_image-section">
              <img
                src="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@1x.webp"
                srcSet="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@1x.webp 1x, https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@2x.webp 2x"
                alt="Role play interface showing AI conversation practice"
                loading="eager"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

// SVG Icons
const SparklesIcon = () => (
  <svg>
    <use xlinkHref="#icon-sparkles" />
  </svg>
);

const TrophyIcon = () => (
  <svg>
    <use xlinkHref="#icon-trophy" />
  </svg>
);

const QuestionAnswerIcon = () => (
  <svg>
    <use xlinkHref="#icon-question-answer-outline" />
  </svg>
);

const LightbulbIcon = () => (
  <svg>
    <use xlinkHref="#icon-lightbulb" />
  </svg>
);
