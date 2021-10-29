import React, { useCallback, useMemo, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import PostCardsColumn from '../components/post-cards-column';
import Post from '../models/post';
import Tabs from '../components/tabs';

import { getSortedCategoriesByCount } from '../utils/helpers';

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => new Post(node));
  const { author, language } = data.site.siteMetadata;
  const categories = ['All', ...getSortedCategoriesByCount(posts)];
  const [tabIndex, setTabIndex] = useState(0);
  const categoryPosts = useMemo(
    () =>
      tabIndex === 0
        ? posts
        : posts.filter((post) => post.categories.includes(categories[tabIndex])),
    [categories, tabIndex, posts],
  );
  const onTabIndexChange = useCallback((e, value) => setTabIndex(value), []);

  return (
    <Layout>
      <SEO title="Home" />
      <Bio author={author} language={language} />
      <Tabs className={'tabs'} value={tabIndex} onChange={onTabIndexChange} tabs={categories} />
      <PostCardsColumn
        posts={categoryPosts.slice(0, 4)}
        moreUrl={`posts/${tabIndex === 0 ? '' : categories[tabIndex]}`}
        showMoreButton={categoryPosts.length > 4}
      />
      <script type="text/javascript" src="https://www.scmplayer.net/script.js"
data-config="{'skin':'skins/simpleBlack/skin.css','volume':50,'autoplay':true,'shuffle':true,'repeat':1,'placement':'bottom','showplaylist':false,'playlist':[{'title':'Closer - Retro %2750s Prom Style Chainsmokers / Halsey Cover ft. Kenton Chen','url':'//youtu.be/jemgIOAjGDw'},{'title':'Holy - Justin Bieber','url':'//youtu.be/qaq0nNXy0ak'},{'title':'%uD558%uB8E8%uC885%uC77C - %uC7AC%uC9C0%uD329%uD2B8','url':'//youtu.be/v44Gt9lg11g'},{'title':'Love - Dean','url':'//youtu.be/pXT_XCi6G9Y'},{'title':'%uB098%uB294 %uC0DD%uAC01%uC774 %uB108%uBB34 %uB9CE%uC544 (Feat.%uC6D0%uC288%uD0C0%uC778) - Jclef','url':'//youtu.be/jZm7qRb26C4'},{'title':'GOAT - %uC6D0%uC288%uD0C0%uC778 ','url':'//youtu.be/1qITCtKo79Q'},{'title':'It%27s me - %uC6D0%uC288%uD0C0%uC778','url':'//youtu.be/_7bHeuwJZnM'},{'title':'Waltz of the Flowers - Tchaikovsky','url':'//youtu.be/QxHkLdQy5f0'},{'title':'%uD06C%uB9AC%uC2A4%uB9C8%uC2A4%uB2C8%uAE4C','url':'//youtu.be/JkRKxxLiDNI'},{'title':'%uBBF8%uB9AC %uBA54%uB9AC %uD06C%uB9AC%uC2A4%uB9C8%uC2A4 - %uC544%uC774%uC720','url':'//youtu.be/w14rSMl35ro'},{'title':'%uC6B8%uC5B4%uB3C4 %uB3FC - %uBE44%uD22C%uBE44','url':'//youtu.be/VFq94Re1VNk'},{'title':'Mistletoe - Justin Bieber','url':'//youtu.be/AeRwj3QUTqs'},{'title':'Blinding Lights - The Weeknd','url':'//youtu.be/fHI8X4OXluQ'},{'title':'Watermelon Sugar - Harry Styles','url':'//youtu.be/7-x3uD5z1bQ'}]}" ></script>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 500, truncate: true)
          frontmatter {
            categories
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }

    site {
      siteMetadata {
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            naver
            linkedIn
            instagram
            email            
          }
        }
      }
    }
  }
`;
