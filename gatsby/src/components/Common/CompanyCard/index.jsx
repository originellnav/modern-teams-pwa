import React from 'react';
import { Image, Link } from 'components';
import * as styles from './styles.module.scss';

const CompanyCard = ({ logo, title, excerpt, slug, benefits }) => {
  benefits.shift();
  return (
    <article className={styles.card}>
      <Link to={slug} className={styles.container}>
        <div className={styles.hoverOverlay}>
          <div className={styles.overlayTitle}>Team Benefits</div>
          <ul>
            {benefits.map((node) => (
              <li key={node.id}>
                <span className={styles.emoji}>{node.benefitEmoji}</span>
                {node.title}
              </li>
            ))}
          </ul>
        </div>
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
      </Link>
    </article>
  );
};
export default CompanyCard;
