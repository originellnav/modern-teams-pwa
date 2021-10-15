/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { navigate } from 'gatsby';
import { useForm } from 'react-hook-form';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Section, FormField } from 'components';
import * as styles from './styles.module.scss';

const EmailListCta = ({ data }) => {
  const { heading, subheadings, showForm } = data;

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

  const fields = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter email address',
      validation: { required: true },
      validationMessage: 'Please enter your email address',
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);

  useEffect(
    () =>
      // Set submitting to false in clean up function
      () => {
        setSubmitting(false);
      },
    []
  );

  const onSubmit = async (values) => {
    setSubmitting(true);
    setTimeout(() => {
      addToMailchimp(values.email).then((emailData) => {
        console.log(emailData);
        if (emailData.result === 'error') {
          setSubmissionError(emailData.msg);
        } else if (emailData.result === 'success') {
          return navigate('/thank-you');
        }
      });
      setSubmitting(false);
    }, 400);
  };

  return (
    <Section containerClassName={styles.container}>
      {heading && <h1>{heading}</h1>}
      {subheadings && (
        <>
          <h2 style={{ whitespace: 'pre', height: '72px' }} ref={el} />
          <div id="typed-strings">
            {/* Blank line needed for conditional rendering */}
            <span>&nbsp;</span>
            {subheadings?.map((node) => (
              <p key={node}>{node}</p>
            ))}
          </div>
          <span id="typed" />
        </>
      )}
      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <button type="submit" disabled aria-hidden="true" style={{ display: 'none' }} />
          {fields.map((field) => {
            const hasError = errors[field.name];
            return (
              <div key={field.name} className={`${styles.field} ${field.className || ''}`}>
                {/* Conditional rendering on label */}
                {field?.label && <span className={styles.label}>{field.label}</span>}
                <FormField
                  {...field}
                  register={register}
                  // Validation
                  className={`${hasError ? styles.errorActive : ''}`}
                  placeholder={`${hasError ? field.validationMessage : field.placeholder}`}
                />
              </div>
            );
          })}
          <div className={styles.submitContainer}>
            <button type="submit" className={`button secondary ${styles.formButton}`} disabled={submitting}>
              {submitting ? 'Submitting' : 'Submit'}
            </button>
          </div>

          {/* Wrapped in errorMsg container to maintain spacing below submit button while error isn't visible */}
          <span className={styles.errorMsg}>{submissionError && <span>{submissionError}</span>}</span>
        </form>
      )}
    </Section>
  );
};

export default EmailListCta;
