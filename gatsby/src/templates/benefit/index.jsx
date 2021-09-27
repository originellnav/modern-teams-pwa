import React from 'react';
import { graphql } from 'gatsby';
import { Layout, GraphQLErrorList, Section, Image, Link, BlockContent } from 'components';
import * as styles from './styles.module.scss';

const Benefit = ({ location, data: staticData, errors }) => {
  const { sanityBenefit } = staticData;
  const { title, seoDescription, seoKeywords, slug, companies } = sanityBenefit;
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
      <Section>
        <div>Title: {title}</div>
        <div>seoDescription: {seoDescription}</div>
        <div>seoKeywords: {seoKeywords.join(', ')}</div>
        <div>Slug: {slug.current}</div>
        <div>
          {companies.map((node) => (
            <Link to={`/directory/${node.slug.current}`}>{node.title}</Link>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Benefit;

export const query = graphql`
  query Benefit($id: String!) {
    ...BenefitData
  }
`;
