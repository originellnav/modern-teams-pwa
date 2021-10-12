import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Section } from 'components';
import * as styles from './styles.module.scss';
import { mapEdgesToNodes } from '../../utils/helpers';

const BenefitList = ({ data }) => {
  const { heading } = data;
  /* Fetch full benefit list */
  const benefitData = useStaticQuery(graphql`
    query {
      ...GlobalBenefitsData
    }
  `);

  const benefits = mapEdgesToNodes(benefitData.benefits);

  return (
    <Section containerClassName={styles.benefitList}>
      <h3>{heading}</h3>
      <ul>
        {benefits.map((node) => (
          <li key={node._key}>
            <span className={styles.emoji}>{node.benefitEmoji}</span>
            {node.title}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default BenefitList;
