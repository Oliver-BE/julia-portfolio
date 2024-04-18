import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../utils/normalize.css';
import '../utils/css/screen.css';

const PressPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="Press" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="oliver-article">
        <div className="post-content-body">
          <div className="row">
            <div className="col-3" style={{ padding: '1rem', fontWeight: '750' }}>
              Press
            </div>
            <div className="col-9 oliver-list">
              <ul style={{ padding: '0' }}>
                <li style={{ marginTop: '0' }}>
                  <a
                    href="https://www.stalbansschool.org/news-detail?pk=1540395#:~:text=The%20school%E2%80%99s%20forty,focused%20Joyland%20Magazine"
                    target="_blank"
                  >
                    St. Albans' new faculty press release
                  </a>
                </li>

                <li>
                  <a
                    href="https://blogs.bu.edu/crwr/2021/05/24/aaron-caycedo-kimura-receives-st-botolph-grant/"
                    target="_blank"
                  >
                    St. Botolph Emerging Artist Award in Literature
                  </a>
                </li>
                <li>
                  <a
                    href="https://themolotovcocktail.com/?s=flash+beast+&submit=Search#:~:text=1st%20Place%20(%24200,contests%20without%20you"
                    target="_blank"
                  >
                    1st Place in
                    <em> The Molotov Cocktail's </em>
                    Flash Beast contest
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    smallPic: file(relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery query={indexQuery} render={data => <PressPage location={props.location} data={data} {...props} />} />
);
