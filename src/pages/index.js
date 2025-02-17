import React, { useEffect } from "react";
import { Link } from "gatsby";
import "./Style.css";

const IndexPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-50EN2ZCDYK");

      // Load external script dynamically
      const script = document.createElement("script");
      script.src = "/scripts.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <header className="top-bar">
        <div className="brand">FitMunity</div>
        <button className="cta-button" id="cta-top">
          Join the Waitlist
        </button>
      </header>

      {/* Navbar */}
      <div className="navbar" id="navbar">
        <button data-target="review-section">Intro</button>
        <button data-target="features-section">Features</button>
        <button data-target="cta-section">Learn More</button>
        <button data-target="qna-section">Q&A</button>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="content">
            <h1>
              Reach your fitness goals
              <br />
              with <span className="highlight">AI companions</span>
            </h1>
            <p>
              Nutrition and workout advice from experts, support from friends,
              all in one!
            </p>
            <button className="cta-button" id="cta-hero">
              Join US!
            </button>
          </div>
          <img src="/HeroSession.png" alt="Fitness App Preview" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Moving into a new neighborhood that cares about you</h2>
        <div className="feature">
          <img src="/Feature_PersonalFriends.png" alt="Feature 1" />
          <div className="content">
            <span>1</span>
            <h3>Meet Your Personal Health Team and Friends</h3>
            <p>
              Nutritionists, work-out buddy, yoga coach, friend Emily… Build
              your 24/7 support system in a click!
            </p>
          </div>
        </div>
        <div className="feature">
          <img src="/Feature_TrackProcess.png" alt="Feature 2" />
          <div className="content">
            <span>2</span>
            <h3>Track Your Progress</h3>
            <p>Easily log meals, track workouts, and share your journey, just like Instagram.</p>
          </div>
        </div>
        <div className="feature">
          <img src="/Feature_TrackProcess.png" alt="Feature 3" />
          <div className="content">
            <span>3</span>
            <h3>Receive Feedback and Love</h3>
            <p>Tracking your calorie, giving you personalized advice, cheering you up when you are down…</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="text">
            <h2>Start Your Journey and Sign Up for the Waitlist Today →</h2>
            <p>Because YOU deserve it.</p>
            <form
              action="https://app.us17.list-manage.com/subscribe/post?u=22a9b305d222e24e838122b53&amp;id=715ea73430"
              method="post"
              target="_blank"
            >
              <div id="input-wrapper">
                <input
                  type="email"
                  id="user-input"
                  name="EMAIL"
                  placeholder="Enter your email to join Us!"
                  required
                  className="required email"
                />
                <button id="join-btn" type="submit">
                  Join the Waitlist →
                </button>
              </div>
            </form>
          </div>
          <img src="/CTA.png" alt="Personalized Plan Preview" />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 FitMunity. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default IndexPage;
