import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Layout, GraphQLErrorList, Section, DirectoryGridComp } from 'components';
import * as styles from './styles.module.scss';

const Benefit = ({ location, data: staticData, errors }) => {
  const { sanityBenefit } = staticData;
  const { title, benefitEmoji, seoDescription, seoKeywords, slug, companies } = sanityBenefit;
  const seo = {
    title,
    desc: seoDescription,
    keywords: seoKeywords,
    pathname: slug.current,
  };

  if (errors) {
    return (
      <Layout location={location} seo={seo}>
        <GraphQLErrorList errors={errors} />;
      </Layout>
    );
  }

  return (
    <Layout location={location} seo={seo} className={styles.root}>
      <Section containerClassName={styles.headingContainer}>
        <h1>{title}</h1>
        <p className={styles.description}>{seoDescription}</p>
      </Section>
      <DirectoryGridComp companyData={companies} heading={benefitEmoji} location={location} />
    </Layout>
  );
};

export default Benefit;

export const query = graphql`
  query Benefit($id: String!) {
    ...BenefitData
  }
`;
