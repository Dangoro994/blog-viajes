import React from "react"
import { graphql, Link ,withPrefix} from "gatsby"
import "../styles/global.css"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const allPosts = data.allMarkdownRemark

  return (
    <div className="blog-layout">
      <aside className="sidebar">
        <nav>
          <ul>
            {allPosts.edges.map(({ node }) => (
              <li key={node.fields.slug}>
                <Link to={withPrefix(node.fields.slug)}>{node.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="blog-post-container">
        <h1>{post.frontmatter.title}</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
