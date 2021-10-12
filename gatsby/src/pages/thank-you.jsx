import React from 'react';
import { Link } from 'gatsby';
import { Layout, Section } from 'components';
import logo from '../images/modernteamslogo.png';
import { container, image, content } from './404.module.scss';
import * as styles from './thank-you.module.scss';

const ThankYou = ({ location }) => (
  <Layout location={location}>
    <Section containerClassName={styles.thankYouContainer}>
      <img className={styles.image} src={logo} alt="" />
      <div className={styles.content}>
        <h2>Success! Thank you for subscribing.</h2>
        <Link className={`button black ${styles.btn}`} to="/">
          Go back home
        </Link>
      </div>
    </Section>
  </Layout>
);

export default ThankYou;
