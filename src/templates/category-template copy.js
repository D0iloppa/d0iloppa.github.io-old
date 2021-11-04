import React from 'react';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Post from '../models/post';
import PostsPageBody from '../components/posts-page-body';
import PostsPageHeader from '../components/posts-page-header';

import { getSortedCategoriesByCount } from '../utils/helpers';

export default ({ pageContext }) => {
  const { edges, currentCategory } = pageContext;
  const posts = pageContext.allMarkdownRemark.edges.map(({ node }) => new Post(node));
  const categories = ['All', ...getSortedCategoriesByCount(posts)];
  const tabIndex = categories.findIndex((tab) => tab === currentCategory);

  const onTabIndexChange = (e, value) => {
    if (value === 0) navigate(`/posts`);
    else navigate(`/posts/${categories[value]}`);
  };

  return (
    <Layout>
      <SEO title="Posts" />
      <PostsPageHeader title={categories[tabIndex]} subtitle={`${posts.length} posts`} />
      <PostsPageBody
        tabIndex={tabIndex}
        onChange={onTabIndexChange}
        tabs={categories}
        posts={
          tabIndex === 0
            ? posts
            : posts.filter((post) => post.categories.includes(categories[tabIndex]))
        }
      />
    </Layout>
  );
};
