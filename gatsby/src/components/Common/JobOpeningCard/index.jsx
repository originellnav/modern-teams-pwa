import React from 'react';
import { Link } from 'components';
import * as styles from './styles.module.scss';
import jobIcon from '../../../images/job-icon.svg';
import locationIcon from '../../../images/location-icon.svg';

const JobOpeningCard = ({ title, type, jobLocation, link }) => (
  <Link to={link}>
    <article className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.container}>
        <div className={styles.item}>
          <img src={jobIcon} alt="" />
          <span>{type}</span>
        </div>
        <div className={styles.item}>
          <img src={locationIcon} alt="" />
          <span>{jobLocation}</span>
        </div>
      </div>
    </article>
  </Link>
);

export default JobOpeningCard;
