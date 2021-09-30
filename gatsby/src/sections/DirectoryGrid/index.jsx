import React from 'react';
import { DirectoryGridComp } from 'components';
import { graphql, useStaticQuery } from 'gatsby';

const DirectoryGrid = ({ data, location }) => {
  const { heading } = data;
  // Static query to fetch full benefit list
  const companyData = useStaticQuery(graphql`
    query {
      ...GlobalCompaniesData
    }
  `);
  return <DirectoryGridComp companyData={companyData.companies} heading={heading} location={location} />;
};

export default DirectoryGrid;
