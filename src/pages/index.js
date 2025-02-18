import React from "react";
import { Link } from "gatsby";
import "./Style.css";

// Feature Component
const Feature = ({ imgSrc, title, text }) => (
  <div className="feature">
    <img src={imgSrc} alt={title} />
    <div className="content">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </div>
);

// Q&A Component
const QnAItem = ({ question, answer }) => (
  <div className="qna-item">
    <h3>{question}</h3>
    <p>{answer}</p>
  </div>
);

const IndexPage = () => {
  return (
    <div>
      {/* Top Bar */} 
      <header className="top-bar">
        <div className="brand">FitMunity</div>
        <button className="cta-button" id="cta-top">Join the Waitlist</button>
      </header>

      <nav className="navbar" id="navbar">
    <button data-target="review-section">Intro</button>
    <button data-target="features-section">Features</button>
    <button data-target="cta-section">Learn More</button>
    <button data-target="qna-section">Q&A</button>
</nav>




      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="content">
            <h1>
              Reach your fitness goals
              <br />
              with <span className="highlight">AI companions</span>
            </h1>
            <p>Nutrition and workout advice from experts, support from friends, all in one!</p>
            <button className="cta-button" id="cta-hero">Join Us!</button>
          </div>
          <img src="/HeroSession.png" alt="Fitness App Preview" />
        </div>
      </section>

      {/* Review Section */}
      <section id="review-section" className="review-section">
        <div className="stars">_________________</div>
        <h2>We Build an AI Fitness Community only for You</h2>

        <h2>"Say goodbye to the pressure of social media and hello to a judgment-free zone. 
          Let's move to a community where everyone shares your dream."
        </h2>
      </section>

      {/* Features Section */}
      <section id="features-section" className="features-section">
        <h2>Moving into a new neighborhood that cares about you</h2>
        <Feature
          imgSrc="/Feature_PersonalFriends.png"
          title="Meet Your Personal Health Team and Friends"
          text="Nutritionists, work-out buddies, yoga coaches—build your 24/7 support system in a click!"
        />
        <Feature
          imgSrc="/Feature_TrackProcess.png"
          title="Track Your Progress"
          text="Easily log meals, track workouts, and share your journey, just like Instagram."
        />
        <Feature
          imgSrc="/Feature_ShareComments.png"
          title="Receive Feedback and Love"
          text="Tracking your calorie, giving you personalized advice, cheering you up when you are down…"
        />
      </section>

      {/* Call-to-Action Section */}
      <section id="cta-section" className="cta-section">
        <div className="container">
          <div className="text">
            <h2>Start Your Journey and Sign Up for the Waitlist Today →</h2>
            <p>Because YOU deserve it.</p>
            <form
  action="https://app.us17.list-manage.com/subscribe/post?u=22a9b305d222e24e838122b53&amp;id=715ea73430"
  method="post"
  id="mc-embedded-subscribe-form"
  name="mc-embedded-subscribe-form"
  target="_blank"
>
  <div id="input-wrapper">
    <input type="email" id="user-input" name="EMAIL" placeholder="Enter your email to join Us!" required />
    <button id="join-btn" type="submit">Join the Waitlist →</button>
  </div>
</form>

          </div>
          <img src="/CTA.png" alt="Personalized Plan Preview" />
        </div>
      </section>

      {/* Emotional Appeal Section */}
      <section className="appeal-section">
        <img src="/Appeal.png" alt="Emotional Support" />
        <div className="text">
          <h2>You Deserve to Be Celebrated Every Step of the Way</h2>
          <p>Every meal you log, every workout you complete, every story you share becomes part of a bigger picture—a picture of your transformation. Your AI-powered community is here to ensure you feel supported, valued, and cared for in every moment.</p>
          <p>This isn’t just about reaching your goals. It’s about building a life where you feel seen, celebrated, and truly cared for.</p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
          <h2>Stay Updated with Our Blog</h2>
          <a href="https://www.fitmunity.com/blog" className="cta-button">Read Our Blog</a>
      </section>
{/* Q&A Section */}
<section id="qna-section" className="qna-section">
  <h2>Q&A</h2>

  <div className="qna-item">
    <div className="qna-title">
      <span>Is there a benefit for signing up for the waitlist?</span>
      <div className="arrow-container">
        <span className="arrow"></span>
      </div>
    </div>
    <div className="qna-content">
      <p>Every user on the waitlist receives 99% off their first-month subscription and is automatically entered into our lucky draw for an exciting prize!</p>
    </div>
  </div>

  <div className="qna-item">
    <div className="qna-title">
      <span>I love your concept and have already signed up. When can I start using it?</span>
      <div className="arrow-container">
        <span className="arrow"></span>
      </div>
    </div>
    <div className="qna-content">
      <p>We plan to launch the product in 3 months. If you're eager, you can help us test the product during the beta phase!</p>
    </div>
  </div>

  <div className="qna-item">
    <div className="qna-title">
      <span>How will you use our data?</span>
      <div className="arrow-container">
        <span className="arrow"></span>
      </div>
    </div>
    <div className="qna-content">
      <p>We are deeply committed to protecting our users' privacy. Your data will not be used for fine-tuning models but solely to provide a personalized experience tailored to your goals and preferences.</p>
    </div>
  </div>

  <div className="qna-item">
    <div className="qna-title">
      <span>Who is building this app, and how did you come up with the idea?</span>
      <div className="arrow-container">
        <span className="arrow"></span>
      </div>
    </div>
    <div className="qna-content">
      <p>FitMunity was founded by two USC students still in school. Tired of toxic social media and the exploitative use of AI, we decided to create an app that empowers individuals.</p>
    </div>
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
