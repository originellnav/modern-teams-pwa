import React from 'react';
import { Logo, Link } from 'components';
import { graphql, useStaticQuery } from 'gatsby';
import * as styles from './styles.module.scss';

const Footer = () => {
  const directoryData = useStaticQuery(graphql`
    query {
      nav: sanityRouting {
        footerNav {
          navItem {
            title
            _key
            singletonRef {
              title
              slug {
                current
              }
            }
          }
        }
      }
    }
  `);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <ul>
          {directoryData.nav.footerNav.navItem.map((node) => (
            <li key={node._key}>
              <Link to={`/${node?.singletonRef?.slug?.current}/`}>{node.title}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.sitemap}>Copyright © {new Date().getFullYear()} Modern Teams</div>
      </div>
    </footer>
  );
};

export default Footer;
