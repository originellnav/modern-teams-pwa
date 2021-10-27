import React from 'react';
import { graphql } from 'gatsby';
import { Layout, GraphQLErrorList, Section, Image, BlockContent, JobOpeningCard, Link } from 'components';
import * as styles from './styles.module.scss';
import { mapEdgesToNodes, pullJobs } from '../../utils/helpers';

const Company = ({ location, data: staticData, errors }) => {
  const { sanityCompany } = staticData;
  const {
    title,
    seoTitle,
    seoDescription,
    seoKeywords,
    slug,
    logo,
    companyLinks,
    description,
    valuesHeading,
    values,
    perksHeading,
    perks,
    benefits,
  } = sanityCompany;
  const seo = {
    title: seoTitle,
    desc: seoDescription,
    keywords: seoKeywords,
    pathname: slug.current,
  };

  /* Destructure job listings */
  const jobsData = mapEdgesToNodes(staticData.jobs);
  /* Filter job listings against current company title */
  const jobs = pullJobs(jobsData, title);

  if (errors) {
    return (
      <Layout location={location} seo={seo}>
        <GraphQLErrorList errors={errors} />;
      </Layout>
    );
  }

  return (
    <Layout location={location} seo={seo} className={styles.root}>
      {/* LOGO */}
      <Section className={styles.imageSection} containerClassName={styles.image}>
        <Image image={logo.asset} alt="" className={styles.logo} />
      </Section>

      {/* DESCRIPTION AND BENEFITS */}
      <Section className={styles.descriptionSection} containerClassName={styles.description}>
        <article>
          <h1>{title}</h1>
          {description && <BlockContent data={description} />}
        </article>
        <aside className={styles.benefits}>
          {benefits.map((benefit) => (
            <div key={benefit.id}>
              <span className={styles.emoji}>{benefit.benefitEmoji}</span>
              <span>{benefit.title}</span>
            </div>
          ))}
        </aside>
      </Section>

      {/* JOB OPENINGS - CONDITIONALLY RENDER */}

      {jobs?.length > 0 && (
        <Section>
          <h2>Job Openings</h2>
          <div className={styles.jobListings}>
            {jobs?.map((node) => (
              <JobOpeningCard
                title={node.Job_title}
                type={node.Type}
                jobLocation={node.Location}
                link={`${node.Link}/`}
              />
            ))}
          </div>
        </Section>
      )}

      {/* COMPANY VALUES */}
      <h2>{valuesHeading}</h2>
      <Section className={styles.contentSection} containerClassName={styles.content}>
        {values && <BlockContent data={values} />}
      </Section>

      {/* COMPANY PERKS */}
      <h2>{perksHeading}</h2>
      <Section className={styles.contentSection} containerClassName={styles.content}>
        {perks && <BlockContent data={perks} />}
      </Section>

      {/* COMPANY LINKS */}
      <Section className={styles.companyLinksSection} containerClassName={styles.companyLinks}>
        {companyLinks.map((link) => {
          if (link._type === 'companyWebsite') {
            return (
              <span className={styles.item}>
                <Image image={link.icon.asset} className={styles.icon} />
                <Link to={link.url}>{link.text}</Link>
              </span>
            );
          }
          if (link._type === 'socialMedia') {
            return (
              <span className={styles.item}>
                <Image image={link.icon.asset} className={styles.icon} />
                <Link to={link.url}>{link.text}</Link>
              </span>
            );
          }
          return null;
        })}
      </Section>
    </Layout>
  );
};

export default Company;

export const query = graphql`
  query Company($id: String!) {
    ...CompanyData
    jobs: allAirtable {
      edges {
        node {
          data {
            Name
            Job_title
            Type
            Link
            Location
          }
        }
      }
    }
  }
`;
