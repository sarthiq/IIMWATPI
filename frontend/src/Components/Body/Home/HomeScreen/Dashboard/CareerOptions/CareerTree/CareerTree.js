import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './CareerTree.css';

const TreeNode = ({ data, level = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const hasChildren = data.children && Object.keys(data.children).length > 0;

    return (
        <div className={`tree-node level-${level}`}>
            <div className="node-content">
                <div className="tree-card">
                    <h3>{data.title}</h3>
                    {data.description && <p>{data.description}</p>}
                </div>
            </div>
            {hasChildren && (
                <div className={`node-children ${isExpanded ? 'expanded' : ''}`}>
                    {Object.entries(data.children).map(([key, childData]) => (
                        <TreeNode 
                            key={key} 
                            data={{
                                title: key,
                                ...childData
                            }} 
                            level={level + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export const CareerTree = () => {
    const [zoom, setZoom] = useState(1);

    // Example of nested data structure
    const careerData = {
        title: "Education Pathways",
        children: {
            "Class 10": {
                description: "Secondary Education",
                children: {
                    "Science": {
                        description: "Focus on Physics, Chemistry, Biology/Math",
                        children: {
                            "Medical Science": {
                                description: "MBBS, BDS, BHMS, BAMS",
                                children: {
                                    "Doctor": {
                                        description: "Medical Practitioner",
                                        children: {
                                            "Cardiologist": {
                                                description: "Heart and cardiovascular specialist",
                                                children: {
                                                    "Interventional Cardiology": {
                                                        description: "Specialized in cardiac catheterization"
                                                    },
                                                    "Nuclear Cardiology": {
                                                        description: "Specialized in nuclear imaging of the heart"
                                                    }
                                                }
                                            },
                                            "Neurologist": {
                                                description: "Brain and nervous system specialist"
                                            },
                                            "Pediatrician": {
                                                description: "Child health specialist"
                                            }
                                        }
                                    },
                                    "Surgeon": {
                                        description: "Surgical Specialist",
                                        children: {
                                            "Cardiac Surgeon": {
                                                description: "Heart surgery specialist"
                                            },
                                            "Neurosurgeon": {
                                                description: "Brain surgery specialist"
                                            }
                                        }
                                    }
                                }
                            },
                            "Engineering": {
                                description: "B.Tech/B.E.",
                                children: {
                                    "Software Engineering": {
                                        description: "Computer Science and Programming",
                                        children: {
                                            "Web Development": {},
                                            "Mobile Development": {},
                                            "AI/ML": {}
                                        }
                                    },
                                    "Mechanical Engineering": {
                                        children: {
                                            "Automotive": {},
                                            "Robotics": {},
                                            "Manufacturing": {}
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "Commerce": {
                        description: "Focus on Business Studies",
                        children: {
                            "Chartered Accountancy": {},
                            "Business Administration": {},
                            "Economics": {}
                        }
                    }
                }
            }
        }
    };

    const handleZoom = (direction) => {
        setZoom(prev => {
            const newZoom = direction === 'in' ? prev + 0.1 : prev - 0.1;
            return Math.min(Math.max(newZoom, 0.5), 2);
        });
    };

    return (
        <div className="tree-container">
            <div className="tree-wrapper" style={{ transform: `scale(${zoom})` }}>
                <TreeNode data={careerData} />
            </div>
            <div className="tree-zoom-controls">
                <button 
                    className="zoom-btn" 
                    onClick={() => handleZoom('in')}
                    aria-label="Zoom in"
                >
                    <FaPlus />
                </button>
                <button 
                    className="zoom-btn" 
                    onClick={() => handleZoom('out')}
                    aria-label="Zoom out"
                >
                    <FaMinus />
                </button>
            </div>
        </div>
    );
};