import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../utils/normalize.css';
import '../utils/css/screen.css';

const WritingPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="Writing" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="oliver-article">
        <div className="post-content-body">
          <div className="row">
            <div className="col-3" style={{ padding: '1rem', fontWeight: '750' }}>
              Fiction
            </div>
            <div className="col-9">
              <ul style={{ listStyleType: 'none', padding: '0' }}>
                <li style={{ marginTop: '0', padding: '0' }}>
                  <a href="https://joylandmagazine.com/fiction/the-dance/" target="_blank">
                    "The Dance,"
                  </a>
                  <em> Joyland Magazine</em>
                </li>
                <li style={{ padding: '0' }}>
                  <a
                    href="https://themolotovcocktail.com/about/archive-vols-1-3/vol-9/flash-beast/cocoon/"
                    target="_blank"
                  >
                    "Cocoon,"
                  </a>
                  <em> The Molotov Cocktail</em>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{ margin: '2rem 0', backgroundColor: 'rgba(69, 69, 69, 0.15)', height: '1px', borderRadius: '1px' }}
          ></div>
          <div className="row">
            <div className="col-3" style={{ padding: '1rem', fontWeight: '750' }}>
              Creative Nonfiction
            </div>
            <div className="col-9">
              <ul style={{ listStyleType: 'none', padding: '0' }}>
                <li style={{ marginTop: '0', padding: '0' }}>
                  <a href="https://therumpus.net/2019/12/30/yogurt/" target="_blank">
                    "Yogurt,"
                  </a>
                  <em> The Rumpus</em>
                </li>
                <li style={{ padding: '0' }}>
                  <a href="https://www.thecommononline.org/dread/" target="_blank">
                    "Dread,"
                  </a>
                  <em> The Common</em>
                </li>
                <li style={{ padding: '0' }}>
                  <a href="https://www.rookiemag.com/2018/09/camino/" target="_blank">
                    "Camino,"
                  </a>
                  <em> Rookie Magazine</em>
                </li>
                <li style={{ padding: '0' }}>
                  <a href="https://www.thecommononline.org/rivendell/" target="_blank">
                    "Rivendell,"
                  </a>
                  <em> The Common</em>
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
    benchAccounting: file(relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery query={indexQuery} render={data => <WritingPage location={props.location} data={data} {...props} />} />
);
