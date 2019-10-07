const path = require('path');
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      blogArticles: allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `);

  // standard blog article template
  data.blogArticles.nodes.forEach(article => {
    createPage({
      path: `articles/${article.slug}`,
      component: path.resolve('./src/templates/Article.js'),
      context: {
        slug: article.slug,
      },
    });
  });

  // blog template w/ pagination
  // const posts = data.posts.nodes;
  // const postsPerPage = 3;
  // const numPages = Math.ceil(posts.length / postsPerPage);

  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
  //     component: path.resolve('./src/templates/BlogListTemplate.js'),
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   });
  // });
};
