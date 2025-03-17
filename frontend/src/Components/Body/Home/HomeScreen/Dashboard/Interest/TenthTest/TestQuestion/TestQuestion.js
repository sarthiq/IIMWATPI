import React from "react";
import { TestQuestionUtils } from "../../TestQuestionUtils/TestQuestionUtils";
const questions = [
  {
    id: 1,
    question: "What kind of books or articles do you enjoy reading the most?",
    options: [
      {
        label:
          "Science and technology discoveries (e.g., space, robotics, medicine)",
        value: "A",
      },
      {
        label:
          "Business success stories and financial insights (e.g., stock market, entrepreneurship)",
        value: "B",
      },
      {
        label:
          "Creative writing, poetry, or art-based literature (e.g., novels, painting, filmmaking)",
        value: "C",
      },
      {
        label:
          "Historical or psychological case studies (e.g., biographies, social change, human behavior)",
        value: "D",
      },
    ],
  },
  {
    id: 2,
    question:
      "If you had to participate in a competition, which one would you choose?",
    options: [
      {
        label:
          "A science fair or coding hackathon (e.g., building robots, programming challenges)",
        value: "A",
      },
      {
        label:
          "A stock market simulation contest (e.g., investing, business strategies)",
        value: "B",
      },
      {
        label:
          "A debate, art, or writing competition (e.g., storytelling, designing, acting)",
        value: "C",
      },
      {
        label:
          "A social issues discussion or historical research project (e.g., solving global problems, analyzing history)",
        value: "D",
      },
    ],
  },
  {
    id: 3,
    question: "Which school subject excites you the most?",
    options: [
      {
        label:
          "Physics, Chemistry, Mathematics, or Computer Science (e.g., experiments, logical puzzles, coding)",
        value: "A",
      },
      {
        label:
          "Economics, Business Studies, or Accounting (e.g., understanding markets, running a business)",
        value: "B",
      },
      {
        label:
          "Literature, Music, Painting, or Acting (e.g., creating stories, performing on stage, making art)",
        value: "C",
      },
      {
        label:
          "History, Political Science, Psychology, or Sociology (e.g., studying past events, human behavior, social systems)",
        value: "D",
      },
    ],
  },
  {
    id: 4,
    question:
      "If you were given a research project, what would you like to explore?",
    options: [
      {
        label:
          "The latest developments in space technology (e.g., Mars exploration, AI in medicine)",
        value: "A",
      },
      {
        label:
          "How businesses expand and succeed in different markets (e.g., startup growth, investment trends)",
        value: "B",
      },
      {
        label:
          "The influence of art and media on society (e.g., impact of movies, music, advertising)",
        value: "C",
      },
      {
        label:
          "The impact of social policies on different communities (e.g., government schemes, psychological effects of social change)",
        value: "D",
      },
    ],
  },
  {
    id: 5,
    question:
      "Which type of YouTube videos or online content do you watch the most?",
    options: [
      {
        label:
          "Science experiments, robotics, or tech reviews (e.g., new inventions, space missions, AI breakthroughs)",
        value: "A",
      },
      {
        label:
          "Business case studies, investment strategies, or financial tips (e.g., how companies succeed, stock trading)",
        value: "B",
      },
      {
        label:
          "Creative tutorials, movies, or literature discussions (e.g., painting techniques, book analysis, filmmaking)",
        value: "C",
      },
      {
        label:
          "History documentaries, political debates, or psychological analyses (e.g., world wars, mental health, social justice)",
        value: "D",
      },
    ],
  },
  {
    id: 6,
    question: "If you could have one superpower, which would you choose?",
    options: [
      {
        label:
          "The ability to invent groundbreaking technology (e.g., cure diseases, build robots)",
        value: "A",
      },
      {
        label:
          "The ability to predict business trends accurately (e.g., always making the right investments)",
        value: "B",
      },
      {
        label:
          "The ability to create world-changing art (e.g., music that inspires peace, movies that change opinions)",
        value: "C",
      },
      {
        label:
          "The wisdom to understand and resolve human conflicts (e.g., helping people overcome problems, solving global disputes)",
        value: "D",
      },
    ],
  },
  {
    id: 7,
    question: "What motivates you the most?",
    options: [
      {
        label:
          "Discovering scientific breakthroughs and solving technical challenges (e.g., making new medicines, coding apps)",
        value: "A",
      },
      {
        label:
          "Understanding financial success and managing businesses (e.g., running a company, investing in stocks)",
        value: "B",
      },
      {
        label:
          "Expressing emotions and ideas creatively (e.g., writing books, making music, designing clothes)",
        value: "C",
      },
      {
        label:
          "Studying people, societies, and history (e.g., helping others, understanding politics, learning from the past)",
        value: "D",
      },
    ],
  },
  {
    id: 8,
    question:
      "Imagine you are working on a team project, which role would you take?",
    options: [
      {
        label:
          "Designing experiments or solving logical problems (e.g., doing research, writing code, making calculations)",
        value: "A",
      },
      {
        label:
          "Managing budgets, strategies, or investments (e.g., planning a business, handling money, making decisions)",
        value: "B",
      },
      {
        label:
          "Creating engaging presentations or storytelling (e.g., making a video, designing a poster, writing a speech)",
        value: "C",
      },
      {
        label:
          "Researching historical, social, or psychological aspects (e.g., studying human behavior, analyzing policies)",
        value: "D",
      },
    ],
  },
  {
    id: 9,
    question: "What kind of career sounds the most exciting to you?",
    options: [
      {
        label:
          "Engineer, Scientist, Doctor, or Coder (e.g., working in space agencies, developing medicines, building apps)",
        value: "A",
      },
      {
        label:
          "Entrepreneur, Economist, Investment Banker (e.g., starting a business, managing money, advising companies)",
        value: "B",
      },
      {
        label:
          "Writer, Designer, Filmmaker, Musician (e.g., writing novels, directing movies, composing music)",
        value: "C",
      },
      {
        label:
          "Historian, Journalist, Psychologist, Political Analyst (e.g., reporting news, helping people with mental health, studying global events)",
        value: "D",
      },
    ],
  },
  {
    id: 10,
    question: "If you had to spend a day with a mentor, who would you pick?",
    options: [
      {
        label:
          "A famous scientist or technology expert (e.g., Albert Einstein, Elon Musk, Marie Curie)",
        value: "A",
      },
      {
        label:
          "A successful businessperson or investor (e.g., Warren Buffett, Ratan Tata, Jeff Bezos)",
        value: "B",
      },
      {
        label:
          "A renowned artist, writer, or filmmaker (e.g., Leonardo da Vinci, J.K. Rowling, A.R. Rahman)",
        value: "C",
      },
      {
        label:
          "A historian, political leader, or psychologist (e.g., Mahatma Gandhi, Nelson Mandela, Sigmund Freud)",
        value: "D",
      },
    ],
  },
];

export const TestQuestion = ({setResults}) => {
  const title1 = "Interest-Based Stream Selection Test for College Students";
  const title2 = "Tenth Admission";
  const grade = 10;
  return <TestQuestionUtils questions={questions} title1={title1} title2={title2} grade={grade} setResults={setResults} />  ;
};
