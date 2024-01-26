import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          key={index}
          title={el.title}
          text={el.text}
          num={index + 1}
        />
      ))}
    </div>
  );
};

export default Accordion;
