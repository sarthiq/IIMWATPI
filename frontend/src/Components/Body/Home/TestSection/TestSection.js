import React from "react";
import "./TestSection.css"

export const TestSection = () => {
  const cards = [
    {
      title: "IQ",
      description: "Check if you are the next Aryabhata",
      extra: "Description:\n\nIn 5 points",
    },
    {
      title: "Personality",
      description: "If you are a better actor, leader or doctor?",
      extra: "Description:",
    },
    {
      title: "Creativity",
      description: "What if you can compose songs or become a fashion designer?",
      extra: "Description:",
    },
  ];

  return (
    <section className="py-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Discover Your Potential</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-blue-600 text-white rounded-2xl w-72 h-40 flex items-center justify-center text-lg font-semibold shadow-lg"
          >
            {card.title}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        {cards.map((card, index) => (
          <div key={index} className="w-72 text-center">
            <p className="text-lg font-medium">{card.description}</p>
            <p className="text-gray-600 mt-2">{card.extra}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
