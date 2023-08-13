import React from 'react';
import { ALL_CONTENT } from '@/utils/constants';
import Image from 'next/image';

const TempContent = () => {
  return (
    <div>
      {ALL_CONTENT.map((content, index) => (
        <section
          key={index}
          className={`section__wrapper ${index % 2 ? 'section--right' : 'section--left'}`}
        >
          <h2 className="section__title">{content.title}</h2>
          <p className="section__description">{content.description}</p>
          <div className="section__img-wrapper">
            <Image fill={true} className="section__img" src={content.img} alt="MISSING IMAGE" />
          </div>
        </section>
      ))}
    </div>
  );
};

export default TempContent;
