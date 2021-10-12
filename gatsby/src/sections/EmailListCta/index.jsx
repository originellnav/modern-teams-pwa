import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import { useForm } from 'react-hook-form';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Section, FormField } from 'components';
import * as styles from './styles.module.scss';

const EmailListCta = ({ data }) => {
  const { heading, subheading } = data;
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
    <>
      <Section className={styles.section} containerClassName={styles.container}>
        <h2>{heading}</h2>
        <h3>{subheading}</h3>
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
            <button type="submit" className={`button black ${styles.formButton}`} disabled={submitting}>
              {submitting ? 'Submitting' : 'Submit'}
            </button>
          </div>

          {/* Wrapped in errorMsg container to maintain spacing below submit button while error isn't visible */}
          <span className={styles.errorMsg}>{submissionError && <span>{submissionError}</span>}</span>
        </form>
      </Section>
    </>
  );
};

export default EmailListCta;
