import React from 'react';
import { Section, Link } from 'components';
import { graphql, useStaticQuery } from 'gatsby';
import { mapEdgesToNodes } from '../../utils/helpers';
import * as styles from './styles.module.scss';

const DirectoryGrid = ({ data, location }) => {
  // Static query to fetch full benefit list
  const benefitsData = useStaticQuery(graphql`
    query {
      ...GlobalBenefitsData
    }
  `);

  const { heading } = data;
  const benefits = mapEdgesToNodes(benefitsData.benefits);

  // Create an object for directory page
  const all = {
    id: 'all',
    slug: { current: location.pathname },
    title: 'All',
  };

  // Inject directory page object to beginning of benefits array
  benefits.unshift(all);

  return (
    <Section containerClassName={styles.container}>
      {/* HEADING */}
      <h3>{heading}</h3>
      {/* BENEFITS */}
      <ul className={styles.benefitsList}>
        {benefits.map((node) => (
          <li key={node.id} className={styles.benefit}>
            <Link to={node.id === 'all' ? `${node.slug.current}` : `/${node.slug.current}/`}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default DirectoryGrid;
