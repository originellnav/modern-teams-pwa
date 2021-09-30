/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Section } from 'components';
import * as styles from './styles.module.scss';

const TypedText = ({ data }) => {
  const { heading, subheadings } = data;

  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      stringsElement: '#typed-strings',
      typeSpeed: 80,
      backSpeed: 10,
      loop: true,
      showCursor: false,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <Section containerClassName={styles.container}>
      <h1>{heading}</h1>
      <h2 style={{ whitespace: 'pre', height: '72px' }} ref={el} />
      <div id="typed-strings">
        {subheadings.map((node) => (
          <p key={node}>{node}</p>
        ))}
      </div>
      <span id="typed" />
    </Section>
  );
};

export default TypedText;
