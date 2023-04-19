import React, { useState } from 'react';


const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'What is your return policy?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus libero elit, et faucibus nulla volutpat sed. Praesent interdum aliquam purus, ac scelerisque ipsum hendrerit at. Vestibulum gravida ex nec justo scelerisque interdum. Nullam nec augue eget metus efficitur finibus.',
    },
    {
      id: 2,
      question: 'How do I track my order?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus libero elit, et faucibus nulla volutpat sed. Praesent interdum aliquam purus, ac scelerisque ipsum hendrerit at. Vestibulum gravida ex nec justo scelerisque interdum. Nullam nec augue eget metus efficitur finibus.',
    },
    {
      id: 3,
      question: 'How long does shipping take?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus libero elit, et faucibus nulla volutpat sed. Praesent interdum aliquam purus, ac scelerisque ipsum hendrerit at. Vestibulum gravida ex nec justo scelerisque interdum. Nullam nec augue eget metus efficitur finibus.',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div className="faq" key={faq.id}>
          <div className="faq-question" onClick={() => handleQuestionClick(index)}>
            <h2>{faq.question}</h2>
            {activeIndex === index ? (
              <span className="faq-icon">-</span>
            ) : (
              <span className="faq-icon">+</span>
            )}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
