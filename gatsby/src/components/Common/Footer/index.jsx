import React from 'react';
import { Logo } from 'components';
import * as styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.container}`}>
      <div className={styles.sitemap}>Copyright © {new Date().getFullYear()} Modern Teams</div>
    </div>
  </footer>
);

export default Footer;
