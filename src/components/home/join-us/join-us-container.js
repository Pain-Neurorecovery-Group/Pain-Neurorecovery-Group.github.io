import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import JoinUs from './join-us';

const JoinUsContainer = () => {
  const query = useStaticQuery(
    graphql`
      query {
        markdown: markdownRemark(fileAbsolutePath: { regex: "/join-us.md/" }) {
          html
        }
      }
    `,
  );

  return (
    query.markdown === null
    || query.markdown.html === ''
      ? null
      : <JoinUs html={query.markdown.html} />
  );
};

export default JoinUsContainer;