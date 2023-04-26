exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}

// gatsby-node.js
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all blog posts from Contentful
  const result = await graphql(`
    query AllBlogPostsQuery {
      allContentfulBlog {
        edges {
          node {
            slug
            title
            description
            metaImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }
  // console.log("result",result, result.data.allContentfulBlog.edges.length);

  // Create a new page for each blog post
  const blogPostTemplate = require.resolve(`./src/templates/blog-page.js`);
  const length = result.data.allContentfulBlog.edges.length;
  result.data.allContentfulBlog.edges.forEach(node => {
    // console.log("node",node.node);
    createPage({
      path: `/blog/${node.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.node.slug,
        title: node.node.title,
        description: node.node.description,
        image: `https:${node.node.metaImage.file.url}`,
        length: length
      },
    })
  })
}