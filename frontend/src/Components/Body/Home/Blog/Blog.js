import React, { useState } from 'react';
import './Blog.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Education: Breaking Barriers",
    category: "Technology",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    excerpt: "Discover how artificial intelligence is revolutionizing educational accessibility and personalized learning experiences.",
    featured: true
  },
  {
    id: 2,
    title: "Inclusive Education: Strategies for Diverse Learners",
    category: "Education",
    date: "March 14, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    excerpt: "Exploring effective methods to create inclusive classrooms that cater to different learning styles and needs."
  },
  {
    id: 3,
    title: "Global Education Trends 2024",
    category: "Trends",
    date: "March 13, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    excerpt: "Stay updated with the latest educational trends shaping the future of learning worldwide."
  }
  // Add more blog posts as needed
];

const categories = ["All", "Technology", "Education", "Trends", "Career Guidance"];

export const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const FeaturedPost = () => {
    const featured = blogPosts.find(post => post.featured);
    if (!featured) return null;

    return (
      <div className="featured-post">
        <div className="featured-content">
          <span className="featured-badge">Featured</span>
          <h1>{featured.title}</h1>
          <p>{featured.excerpt}</p>
          <div className="post-meta">
            <span className="category">{featured.category}</span>
            <span className="date">{featured.date}</span>
            <span className="read-time">{featured.readTime}</span>
          </div>
          <button className="read-more-btn">Read Article</button>
        </div>
        <div className="featured-image" style={{ backgroundImage: `url(${featured.image})` }} />
      </div>
    );
  };

  return (
    <div className="blog-page">
      <Container>
        {/* Hero Section */}
        <div className="blog-hero">
          <h1>Educational Insights</h1>
          <p>Stay updated with the latest trends and innovations in education</p>
          
          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Featured Post */}
        <FeaturedPost />

        {/* Categories */}
        <div className="categories-wrapper">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <Row className="blog-grid">
          {filteredPosts.map(post => (
            <Col key={post.id} lg={4} md={6} sm={12} className="mb-4">
              <Card className="blog-card">
                <div className="card-image" style={{ backgroundImage: `url(${post.image})` }}>
                  <span className="category-tag">{post.category}</span>
                </div>
                <Card.Body>
                  <div className="post-meta">
                    <span className="date">{post.date}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <button className="read-more-link">Read More →</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Newsletter Subscription */}
        <div className="newsletter-section">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest educational insights delivered to your inbox</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </Container>
    </div>
  );
};
