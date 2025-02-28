import React, { useEffect, useState } from "react";
import "./Banner.css";

const slides = [
  {
    type: "background",
    image: "B1.jpg",
    title: "Empowering Students to become their best version!",
    text: <p>We give wings to students’ dreams and aspirations based on their intellect, personality, and creativity. 
    <span>We handhold, and engage with students in turning their talent and curiosity into skills.</span></p>
  },
  {
    type: "side-image",
    image: "B2.jpg",
    title: "Unveiling Hidden Talents and Motivations",
    text: <p>We have built this platform for students to discover their hidden talents and motivations 
      so that they can understand themselves better and make more informed career decisions.</p>
   
,
  },
  {
    type: "three-column",
    columns: [
      {
        title: "Personalized Guidance",
        text: "We provide tailored mentorship and resources to help students navigate their academic and career paths.",
      },
      {
        title: "Skill Development",
        text: "Our programs focus on honing students' talents and transforming their curiosity into valuable skills.",
      },
      {
        title: "Real-World Experience",
        text: "We connect students with opportunities to gain practical experience and make a meaningful impact.",
      },
    ],
  },
];

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`}>
          {slide.type === "background" && (
            <>
              <div className="background-image" style={{ backgroundImage: `url(${slide.image})`, filter: "blur(1px)"  }}></div>
              <div className="slide-content centered-bottom">
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
              </div>
            </>
          )}
          {slide.type === "side-image" && (
            <div className="side-image-content">
              <div className="text">
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
              </div>
              <img src={slide.image} alt="Slide" />
            </div>
          )}
            {slide.type === "three-column" && (
  <div className="three-column-content">
    <h1 className="three-column-title">
    Turning Dreams into Reality: Our Commitment to Your Success
    </h1>
    <div className="columns-wrapper">
      {slide.columns.map((col, idx) => (
        <div className="column" key={idx}>
          <h2> {col.title} </h2>
          <p>{col.text} </p>
        </div>
      ))}
    </div>
     <h2 className="three-column-subtitle">
      "Are you a born actor, writer, or scientist? Know your hidden talent!"
    </h2>
  </div>
)}

          
        </div>
      ))}
    </div>
  );
};
