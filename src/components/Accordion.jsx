import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
  const [currOpen, setIsOpen] = useState(0);

  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          key={index}
          currOpen={currOpen}
          onOpen={setIsOpen}
          title={el.title}
          text={el.text}
          num={index + 1}
        />
      ))}
    </div>
  );
};

export default Accordion;
