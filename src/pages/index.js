import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css";
import "../utils/css/screen.css";
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  let postCounter = 0;

  return (
    <Layout title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      {/* <Bio /> */}
      {/* {data.site.siteMetadata.description && (
                <header className="page-head">
                    <h2 className="page-head-title">{data.site.siteMetadata.description}</h2>
                </header>
            )} */}
      <article className="oliver-article">
        <div className="post-content-body">
          <div className="row">
            <div className="col-6">
              <figure className="kg-image-card">
                <Img fluid={data.juliaHeadshot.childImageSharp.fluid} style={{ padding: "1rem" }} />
                {/* <figcaption>Image Caption</figcaption> */}
              </figure>
            </div>
            <div className="col-6">
              <div
                style={{
                  padding: "0 0 1rem 1rem",
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "50px",
                }}
              >
                Julia Pike is a writer and educator from Brooklyn, New York. Her work has been supported by the
                Corporation of Yaddo, the St. Botolph Club Foundation, and the St. Albans School Writer-in-Residence
                program. She holds an MFA in Fiction from Boston University, and her writing has been published in{" "}
                <em>Joyland</em>, <em>The Common</em>, <em>The Rumpus</em>, <em>Rookie Magazine</em>, and{" "}
                <em>The Molotov Cocktail</em>.
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div> */}
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    juliaHeadshot: file(relativePath: { eq: "julia-headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => <BlogIndex location={props.location} props data={data} {...props} />}
  />
);
