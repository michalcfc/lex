import gql from 'graphql-tag';
import Cookies from 'js-cookie';
import { client } from './prismicHelpers';

/*
 * Menu navigation query
 */
const menuQuery = gql`
query menuQuery {
 allNavigations {
    edges {
     node {
      navigation_links {
          label
        }
      } 
    }
  }
}
`;

export const queryMenuContent = async () => {
    const previewCookie = Cookies.get('io.prismic.preview');
    const queryOptions = {
        query: menuQuery,
    };

    if (previewCookie) {
        queryOptions.context = {
            headers: {
                'Prismic-ref': previewCookie,
            },
        };
    }

    return client.query(queryOptions);
};

/*
 * Blog homepage query
 */
const blogHomeQuery = gql`
query blogHomeQuery {
allHomepages {
    edges {
      node {
        body {
           ...on HomepageBodyCta_feature {
                type
                primary {
                    heading
                }
            }
          ... on HomepageBodyFeature {
            type
            fields {
                label {
                   _linkType
                }
            }
            primary {
               logo
              heading
              text
              featured_image
              image_position
            }
          }
        }
      }
    }
  }
}
`;

export const queryHomeContent = async () => {
    const previewCookie = Cookies.get('io.prismic.preview');
    const queryOptions = {
        query: blogHomeQuery,
    };

    if (previewCookie) {
        queryOptions.context = {
            headers: {
                'Prismic-ref': previewCookie,
            },
        };
    }

    return client.query(queryOptions);
};


/*
 * Blog page query
 */
const blogPageQuery = gql`
query blogPageQuery($tag: [String!]) {
allPagess(tags: $tag) {
   edges {
      node {
        _meta {
           id   
          uid
        }
        page_title
        description
      }
    }
  }
}
`;

export const queryPageContent = async (tag) => {
    const previewCookie = Cookies.get('io.prismic.preview');
    const queryOptions = {
        query: blogPageQuery,
        variables: {
            tag
        },
    };

    if (previewCookie) {
        queryOptions.context = {
            headers: {
                'Prismic-ref': previewCookie,
            },
        };
    }

    return await client.query(queryOptions);
};

