import React from "react"
import { Link, graphql, withPrefix } from "gatsby"
import "../styles/global.css"

export default function HomePage({ data }) {
  return (
    <div className="homepage-layout">
      <main className="homepage-content">
        <h1>Bienvenido a Mi Blog Personal</h1>
        <p>Selecciona una entrada del menú para leer más.</p>
        <aside className="sidebar">
          <nav>
            <ul>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <li key={node.fields.slug}>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </main>
    </div>
  )
}

export const query = graphql`
  query {
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
