import React, { useState } from 'react';

const AccordionItem = ({ num, title, text, currOpen, onOpen }) => {
  const isOpen = num === currOpen;
  const handleToggle = (num) => {
    isOpen ? onOpen(0) : onOpen(num);
  };

  return (
    <div
      className={`item ${isOpen ? 'open' : ''}`}
      onClick={() => handleToggle(num)}
    >
      <p className="number">{num > 0 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};

export default AccordionItem;
