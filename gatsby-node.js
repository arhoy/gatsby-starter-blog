const path = require('path');
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      blogArticles: allContentfulBlogPost {
        nodes {
          slug
        }
      }

      allArticles: allContentfulAlexQuasarArticles {
        nodes {
          slug
        }
      }
    }
  `);

  // standard blog article template. Create a page for each BlogPost
  data.blogArticles.nodes.forEach(article => {
    createPage({
      path: `articles/${article.slug}`,
      component: path.resolve('./src/templates/Blog.js'),
      context: {
        slug: article.slug,
      },
    });
  });

  // create pages also for Alex Quasar Article Content Model
  data.allArticles.nodes.forEach(article => {
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
