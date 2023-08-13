import React from 'react';
import { ALL_CONTENT } from '@/utils/constants';
import Image from 'next/image';

const TempContent = () => {
  return (
    <div>
      {}
      {ALL_CONTENT.map((content, index) => (
        <section
          key={index}
          className={`sm:grid p-10 max-w-screen-lg m-auto sm:gap-x-9 sm:gap-y-3 ${
            index % 2 ? 'section--right' : 'section--left'
          }`}
        >
          <div className="section__img-wrapper h-60">
            <Image fill={true} className="object-contain" src={content.img} alt="MISSING IMAGE" />
          </div>
          <h2 className="section__title">{content.title}</h2>
          <p className="section__description">{content.description}</p>
        </section>
      ))}
    </div>
  );
};

export default TempContent;
