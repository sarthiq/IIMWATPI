import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBrain, FaRobot, FaLaptopCode, FaTools, FaUserGraduate, FaShieldAlt, FaStar, FaLock, FaChevronRight, FaTrophy } from "react-icons/fa";
import "./AItheory.css";

const modules = [
  {
    id: 1,
    name: "Introduction to AI",
    icon: <FaBrain />,
    topics: [
      "What is AI? (Simple definition & real-life examples)",
      "History of AI: From Early Computers to ChatGPT",
      "AI vs Human Intelligence",
      "Types of AI (Narrow AI vs General AI vs Super AI)",
      "Ethical Concerns in AI",
    ],
    color: "#FF3B6F",
    bgGradient: "linear-gradient(135deg, #FF3B6F, #FF9E80)",
    unlocked: true,
  },
  {
    id: 2,
    name: "AI in Everyday Life",
    icon: <FaRobot />,
    topics: [
      "AI-powered tools students already use (Google Search, Alexa, ChatGPT, etc.)",
      "AI in Education (Adaptive Learning, AI Tutors)",
      "AI in Social Media, Gaming, and Entertainment",
      "AI in Healthcare, Finance, and Daily Services",
      "How AI is shaping future careers",
    ],
    color: "#4CD964",
    bgGradient: "linear-gradient(135deg, #4CD964, #91F29B)",
    unlocked: false,
  },
  {
    id: 3,
    name: "Fundamentals of Machine Learning",
    icon: <FaLaptopCode />,
    topics: [
      "What is Machine Learning?",
      "Types of Machine Learning (Supervised, Unsupervised, Reinforcement)",
      "Basics of Neural Networks",
      "How AI learns: Training Data & Algorithms",
      "Examples of AI learning (Face Recognition, Chatbots, etc.)",
    ],
    color: "#5A7BF2",
    bgGradient: "linear-gradient(135deg, #5A7BF2, #7FAAFF)",
    unlocked: false,
  },
  {
    id: 4,
    name: "Hands-on with AI Tools",
    icon: <FaTools />,
    topics: [
      "Introduction to AI-powered tools for students",
      "AI writing assistants (ChatGPT, Notion AI)",
      "AI art & creativity (Canva, DALL·E)",
      "AI coding tools (GitHub Copilot, Scratch for AI)",
      "Simple AI projects for students",
    ],
    color: "#FFCC00",
    bgGradient: "linear-gradient(135deg, #FFCC00, #FFE680)",
    unlocked: false,
  },
  {
    id: 5,
    name: "AI & Career Planning",
    icon: <FaUserGraduate />,
    topics: [
      "AI in Different Career Fields (Engineering, Medicine, Business, Arts)",
      "Future Skills Needed for AI-driven Jobs",
      "How to use AI in career planning",
      "AI-enhanced learning: How students can use AI effectively",
    ],
    color: "#9C56F6",
    bgGradient: "linear-gradient(135deg, #9C56F6, #C893FF)",
    unlocked: false,
  },
  {
    id: 6,
    name: "Ethical AI & Future Trends",
    icon: <FaShieldAlt />,
    topics: [
      "AI Bias and Fairness",
      "Privacy & Security Concerns with AI",
      "Future of AI: Will it Replace Humans?",
      "How Students Can Shape AI's Future",
    ],
    color: "#FF9500",
    bgGradient: "linear-gradient(135deg, #FF9500, #FFBD80)",
    unlocked: false,
  },
];

export const AItheory = () => {
  const [progress, setProgress] = useState(1);
  const [expandedModule, setExpandedModule] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [score, setScore] = useState(120);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const boardRef = useRef(null);
  
  // Define node positions in percentages
  const nodePositions = [
    { x: 15, y: 60 },  // Start bottom left (moved up)
    { x: 30, y: 35 },  // Up and right (moved up)
    { x: 50, y: 50 },  // Middle right (moved up)
    { x: 65, y: 25 },  // Up and right (moved up)
    { x: 80, y: 40 },  // Down and right (moved up)
    { x: 90, y: 20 },  // Final top right (moved up)
  ];
  
  // Update dimensions when component mounts or window resizes
  useEffect(() => {
    const updateDimensions = () => {
      if (boardRef.current) {
        const { width, height } = boardRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  // Convert percentage positions to pixels
  const getPixelPosition = (percentage) => {
    return {
      x: (percentage.x / 100) * dimensions.width,
      y: (percentage.y / 100) * dimensions.height,
    };
  };
  
  // Generate SVG path between two nodes with a curve
  const createPath = (start, end) => {
    const startPos = getPixelPosition(start);
    const endPos = getPixelPosition(end);
    
    // Calculate control point for more pronounced curve
    const controlX = (startPos.x + endPos.x) / 2;
    // Make curves more pronounced with bigger vertical offset
    const controlY = (startPos.y + endPos.y) / 2 - 70; 
    
    return `M ${startPos.x} ${startPos.y} Q ${controlX} ${controlY} ${endPos.x} ${endPos.y}`;
  };
  
  const unlockNext = () => {
    if (progress < modules.length) {
      setShowConfetti(true);
      setScore(score + 50);
      setTimeout(() => {
        setProgress(progress + 1);
        setShowConfetti(false);
        setExpandedModule(null);
      }, 2500);
    }
  };

  // Function to calculate popup position
  const calculatePopupPosition = (nodeIndex) => {
    const node = nodePositions[nodeIndex];
    const nodeX = (node.x / 100) * dimensions.width;
    const nodeY = (node.y / 100) * dimensions.height;

    // Default popup position near the node
    let popupLeft = nodeX;
    let popupTop = nodeY - 100; // Position above the node

    // Adjust if the popup goes out of the viewport
    if (popupLeft < 50) popupLeft = 50; // Ensure it doesn't go off the left edge
    if (popupLeft > dimensions.width - 400) popupLeft = dimensions.width - 400; // Ensure it doesn't go off the right edge
    if (popupTop < 50) popupTop = 50; // Ensure it doesn't go off the top edge

    return { left: popupLeft, top: popupTop };
  };

  return (
    <div className="game-wrapper">
      {/* Game header */}
      <div className="game-header">
        <h1 className="game-title">AI Learning Quest</h1>
        <div className="player-info">
          <div className="score-badge">
            <FaTrophy className="trophy-icon" />
            <span>{score}</span>
          </div>
          <div className="level-badge">Level {progress}/6</div>
          <div className="stars-container">
            <FaStar className="star-earned" />
            <FaStar className="star-earned" />
            <FaStar className={progress > 2 ? "star-earned" : "star-empty"} />
          </div>
        </div>
      </div>

      {/* Main game board */}
      <div className="game-board" ref={boardRef}>
        {/* Decorative elements */}
        <div className="decoration" style={{top: '15%', left: '10%'}}></div>
        <div className="decoration" style={{top: '70%', left: '85%'}}></div>
        <div className="decoration" style={{top: '30%', left: '75%'}}></div>
        <div className="decoration" style={{top: '60%', left: '20%'}}></div>
        
        {/* Background clouds */}
        <div className="cloud" style={{ top: '10%', left: '5%', animationDelay: '0s' }}></div>
        <div className="cloud" style={{ top: '30%', left: '80%', animationDelay: '2s' }}></div>
        <div className="cloud" style={{ top: '70%', left: '15%', animationDelay: '4s' }}></div>
        <div className="cloud" style={{ top: '50%', left: '70%', animationDelay: '6s' }}></div>
        
        {/* SVG Paths */}
        {dimensions.width > 0 && (
          <svg className="paths-container" width={dimensions.width} height={dimensions.height}>
            {/* Path backgrounds (gray for locked) */}
            {nodePositions.slice(0, -1).map((pos, idx) => (
              <path
                key={`path-bg-${idx}`}
                d={createPath(pos, nodePositions[idx + 1])}
                className="path-background"
              />
            ))}
            
            {/* Active paths (colored for unlocked) */}
            {nodePositions.slice(0, progress - 1).map((pos, idx) => (
              <path
                key={`path-active-${idx}`}
                d={createPath(pos, nodePositions[idx + 1])}
                className="path-active"
              />
            ))}
            
            {/* Path dots */}
            {nodePositions.slice(0, -1).map((pos, idx) => {
              const startPos = getPixelPosition(pos);
              const endPos = getPixelPosition(nodePositions[idx + 1]);
              const isCompleted = idx < progress - 1;
              
              // Create dots along the path
              const dots = [];
              const pathLength = Math.sqrt(
                Math.pow(endPos.x - startPos.x, 2) + 
                Math.pow(endPos.y - startPos.y, 2)
              );
              
              const numDots = Math.floor(pathLength / 40); // One dot every 40px
              
              for (let i = 1; i < numDots; i++) {
                const ratio = i / numDots;
                // Adjust position to follow curve
                const t = ratio;
                const bezierX = (1-t)*(1-t)*startPos.x + 2*(1-t)*t*((startPos.x + endPos.x) / 2) + t*t*endPos.x;
                const bezierY = (1-t)*(1-t)*startPos.y + 2*(1-t)*t*((startPos.y + endPos.y) / 2 - 70) + t*t*endPos.y;
                
                dots.push(
                  <div 
                    key={`dot-${idx}-${i}`}
                    className={`path-dot ${isCompleted ? 'dot-completed' : 'dot-locked'}`}
                    style={{
                      left: `${bezierX}px`,
                      top: `${bezierY}px`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                );
              }
              
              return dots;
            })}
          </svg>
        )}
        
        {/* Level nodes (candies) */}
        {nodePositions.map((pos, index) => (
          <motion.div
            key={`level-${index+1}`}
            className={`level-node ${index < progress ? 'node-unlocked' : 'node-locked'}`}
            style={{ 
              '--node-x': `${pos.x}%`, 
              '--node-y': `${pos.y}%`, 
              background: index < progress ? modules[index].bgGradient : 'linear-gradient(135deg, #888, #666)'
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.15 }}
            onClick={() => index < progress && setExpandedModule(expandedModule === index+1 ? null : index+1)}
            whileHover={{ 
              scale: index < progress ? 1.1 : 1,
              boxShadow: index < progress ? `0 0 25px ${modules[index].color}80` : 'none'
            }}
          >
            <div className="candy-shine"></div>
            <div className="node-content">
              {index < progress ? modules[index].icon : <FaLock />}
              <span className="node-number">{index+1}</span>
            </div>
            
            {index < progress - 1 && (
              <div className="node-stars">
                <FaStar /> <FaStar /> <FaStar />
              </div>
            )}
          </motion.div>
        ))}
        
        {/* Confetti animation on level completion */}
        {showConfetti && (
          <div className="confetti-container">
            {Array(80).fill().map((_, i) => (
              <div 
                key={i} 
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  backgroundColor: ['#FF3B6F', '#4CD964', '#5A7BF2', '#FFCC00', '#9C56F6', '#FF9500'][Math.floor(Math.random() * 6)]
                }}
              ></div>
            ))}
            <div className="level-up-message">
              <span>LEVEL UP!</span>
              <span className="points">+50 points</span>
            </div>
          </div>
        )}
        
        {/* Module popup window */}
        <AnimatePresence>
          {expandedModule !== null && (
            <motion.div 
              className="module-popup"
              style={calculatePopupPosition(expandedModule - 1)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="popup-header" style={{ background: modules[expandedModule-1].bgGradient }}>
                <div className="popup-icon">{modules[expandedModule-1].icon}</div>
                <h3>{modules[expandedModule-1].name}</h3>
                <button 
                  className="close-popup"
                  onClick={() => setExpandedModule(null)}
                >×</button>
              </div>
              <div className="popup-content">
                <h4>Topics to Master:</h4>
                <ul className="topic-list">
                  {modules[expandedModule-1].topics.map((topic, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="topic-checkmark">✓</div>
                      {topic}
                    </motion.li>
                  ))}
                </ul>
                
                {expandedModule === progress && (
                  <motion.button 
                    className="complete-button"
                    style={{ background: modules[expandedModule-1].bgGradient }}
                    whileHover={{ scale: 1.05, boxShadow: `0 8px 20px ${modules[expandedModule-1].color}40` }}
                    whileTap={{ scale: 0.95 }}
                    onClick={unlockNext}
                  >
                    Complete Level <FaChevronRight />
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
