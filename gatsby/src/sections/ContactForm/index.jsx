import React from 'react';
import { Section, Form } from 'components';
import * as styles from './styles.module.scss';

const ContactForm = ({ data }) => {
  const { heading, subheading, fields } = data;

  return (
    <>
      <Section>
        <h1>{heading}</h1>
        <p>{subheading}</p>
      </Section>
      <Section containerClassName={styles.formContainer}>
        <Form fields={fields} />
      </Section>
    </>
  );
};

export default ContactForm;
