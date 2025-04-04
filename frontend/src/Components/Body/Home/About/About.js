import { Container } from "react-bootstrap";
import "./About.css";

export const About = () => {
  const features = [
    {
      icon: "🎓",  // Graduation cap emoji
      title: "Educational Excellence",
      description: "Personalized learning paths and AI-driven educational guidance for optimal academic success"
    },
    {
      icon: "🤖",  // Robot emoji for AI
      title: "AI Integration",
      description: "Cutting-edge AI tools and technologies to enhance learning and career development"
    },
    {
      icon: "📈",  // Chart increasing emoji
      title: "Career Growth",
      description: "Data-driven career guidance and skill development for future-ready professionals"
    },
    {
      icon: "👥",  // People emoji
      title: "Student Success",
      description: "Comprehensive support system ensuring students achieve their academic and career goals"
    }
  ];

  return (
    <div className="about-section">
      <Container>
        <div className="about-header">
          <h1 className="about-title">
            Empowering Future Leaders
            <span className="title-highlight">Through AI-Enhanced Education</span>
          </h1>
          <p className="about-description">
            We're revolutionizing education by combining traditional excellence with cutting-edge AI technology
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="about-content">
          <div className="ab-mission">
            <h2>Our Mission</h2>
            <p>
              Educating, enabling, and empowering students to achieve their dreams in the AI-driven world. We combine 
              traditional educational excellence with innovative AI technologies to create future-ready professionals.
            </p>
          </div>
        </div> */}
      </Container>
    </div>
  );
};
