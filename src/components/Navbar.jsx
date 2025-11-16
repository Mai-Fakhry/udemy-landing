export default function Navbar() {
  return (
    <>
      {/* Top Banner */}
      <div className="top-banner">
        <span>
          <strong>New-learner offer</strong> | Courses from <strong>E£259.99</strong>. Click button to see savings.
        </span>
        <div>
          <span className="countdown">Ends in 5h 56m 33s.</span>
          <button className="redeem-btn">Click to redeem</button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-nav">
        <div className="nav-content">

          {/* Logo */}
          <img src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" width="91" height="34" loading="lazy"></img>

          {/* Search */}
          <div className="search-box">
            <svg className="search-icon" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <input type="text" placeholder="Search for anything" />
          </div>

          {/* Links */}
          <a href="#" className="nav-link">Plans & Pricing</a>
          <a href="#" className="nav-link">Udemy Business</a>
          <a href="#" className="nav-link">Teach on Udemy</a>

          {/* Cart */}
          <a href="#" className="cart-icon">
            <svg viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1" fill="currentColor"/>
              <circle cx="20" cy="21" r="1" fill="currentColor"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </a>

          {/* Buttons */}
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Sign up</button>

          {/* Globe */}
          <a href="#" className="globe-icon">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </a>

        </div>
      </nav>
    </>
  );
}
