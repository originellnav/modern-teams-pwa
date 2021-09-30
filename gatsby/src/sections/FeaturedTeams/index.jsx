import React from 'react';
import { Section, DirectoryGridComp, Link } from 'components';
import * as styles from './styles.module.scss';

const index = ({ data }) => {
  const { heading, teams, isBtn, btnType, linkText, linkTo } = data;
  return (
    <Section containerClassName={styles.root}>
      <DirectoryGridComp companyData={teams} heading={heading} hideBenefits="true" />
      <Link to={`/${linkTo.slug.current}/`} className={isBtn ? `button ${btnType}` : styles.link}>
        {linkText}
      </Link>
    </Section>
  );
};

export default index;
