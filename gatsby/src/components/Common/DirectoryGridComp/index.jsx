import React from 'react';
import { Section, Link, CompanyCard } from 'components';
import { graphql, useStaticQuery } from 'gatsby';
import { mapEdgesToNodes } from '../../../utils/helpers';
import * as styles from './styles.module.scss';

const DirectoryGridComp = ({ heading, companyData, hideBenefits }) => {
  // Static query to fetch full benefit list
  const directoryData = useStaticQuery(graphql`
    query {
      ...GlobalBenefitsData
    }
  `);

  const benefits = mapEdgesToNodes(directoryData.benefits);
  /* If companyData came from benefits template it won't have edges/nodes */
  const companies = companyData.edges ? mapEdgesToNodes(companyData) : companyData;

  const all = {
    id: 'all',
    slug: {
      current: 'directory',
    },
    title: 'All',
  };
  // Inject directory page object to beginning of benefits array
  benefits.unshift(all);

  return (
    <>
      <Section className={hideBenefits ? styles.hideBenefitsUpper : ''} containerClassName={styles.container}>
        {/* HEADING */}
        <h3>{heading}</h3>
        {/* BENEFITS */}
        <ul className={styles.benefitsList}>
          {!hideBenefits &&
            benefits?.map((node) => (
              <li key={node?.id} className={styles.benefit}>
                <Link to={`/${node?.slug?.current}/`} activeClassName={styles.active}>
                  {node?.title}
                </Link>
              </li>
            ))}
        </ul>
      </Section>
      <Section className={hideBenefits ? styles.hideBenefitsLower : ''} containerClassName={styles.gridContainer}>
        {companies?.map((node) => (
          <CompanyCard
            logo={node?.logo}
            title={node?.title}
            excerpt={node?.excerpt}
            slug={`/${node?.slug?.current}/`}
          />
        ))}
      </Section>
    </>
  );
};

export default DirectoryGridComp;
