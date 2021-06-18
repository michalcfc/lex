import gql from 'graphql-tag';
import Cookies from 'js-cookie';
import { client } from './prismicHelpers';

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
query blogPageQuery($uid: String) {
allPagess(uid: $uid) {
   edges {
      node {
        _meta {
           id   
          uid
          tags
        }
        page_title
        description
      }
    }
  }
}
`;

export const queryPageContent = async (uid) => {
    const previewCookie = Cookies.get('io.prismic.preview');
    const queryOptions = {
        query: blogPageQuery,
        variables: { uid },
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

