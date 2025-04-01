import './Section.css';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const questionData = {
    stepNumber: 1,
    stepTitle: "Identify Academic Level & Board",
    question: "What is your current education level?",
    options: [
        {
            id: "9-10",
            label: "Entering Class 9-10",
            value: "9-10"
        },
        {
            id: "11-12",
            label: "Entering Class 11-12",
            value: "11-12"
        },
        {
            id: "graduation",
            label: "Entering Graduation",
            value: "graduation"
        }
    ]
};

export const Section = () => {
    return (
        <Container className="section-container">
            <div className="question-container">
                <h2>Step {questionData.stepNumber}: {questionData.stepTitle}</h2>
                <div className="question">
                    <h3>{questionData.question}</h3>
                    <Form.Group className="options">
                        {questionData.options.map((option) => (
                            <div key={option.id} className="option">
                                <Form.Check
                                    type="radio"
                                    id={option.id}
                                    label={option.label}
                                    name="education"
                                    value={option.value}
                                />
                            </div>
                        ))}
                    </Form.Group>
                </div>
                <Link to="./secQuestion" className="next-button">Next</Link>
            </div>
        </Container>
    )
}
