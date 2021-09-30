import React from 'react';
import { Image, Link } from 'components';
import * as styles from './styles.module.scss';

const CompanyCard = ({ logo, title, excerpt, slug }) => (
  <article className={styles.card}>
    <div className={styles.bodyContainer}>
      <Image image={logo.asset} className={styles.logo} />
      <h3>{title}</h3>
      <div className={styles.excerpt}>{excerpt}</div>
    </div>
    <div className={styles.btnContainer}>
      <Link to={slug} className={`button white ${styles.btn}`}>
        View Profile
      </Link>
    </div>
  </article>
);
export default CompanyCard;
