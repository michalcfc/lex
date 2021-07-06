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
        nav {
          ... on NavigationNavNav_item {
            label
            primary {
              link {
              _linkType
              ... on _ExternalLink {
                  url
                }
                ...on Pages {
                  _meta {
                    uid
                  }
                }
              }
               submenu
              label
              link {
                ...on Pages {
                  _meta {
                    uid
                  }
                }
              }
            }
            label
            fields {
            sub_nav_link_label 
              sub_nav_link {
                _linkType
               ... on _ExternalLink {
                  url
                }
                ... on Pages {
                _meta {
                    uid
                    
                  }
                }
              }
            }
          }
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
 * Footer query
 */
const footerQuery = gql`
query footerQuery {
  allFooters {
    edges {
      node {
        about_us
        street
        city
        contact_label
        phone_one
        phone_two
        footer_links {
          link_label
          link {
           _linkType
            ... on _ExternalLink {
              url
            }
            ...on Pages {
              _meta {
                uid
              }
            }
          }
        }
      }
    }
  }
}
`;

export const queryFooterContent = async () => {
    const previewCookie = Cookies.get('io.prismic.preview');
    const queryOptions = {
        query: footerQuery
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
              fields {
                name
                  url {
                    ... on Pages {
                      _meta {
                  uid
                      }
                    }
                  }
                }
            }
          ... on HomepageBodyPartners {
            type
            primary {
              section_title
            }
            fields {
              logo_img
              logo_url {
                ...on Pages {
                  _meta {
                    uid
                  }
                }
              }
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
              url {
                ... on Pages {
                  _meta {
                    uid
                  }
                }
              }
               logo
              heading
              text
              featured_image
              image_position
            }
          }
          ...on HomepageBodyCentered_text {
           type
            primary {
              heading
              text
               phone_one
              phone_two
              img
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
 * Static page query
 */
const staticPageQuery = gql`
query staticPageQuery($uid: String!) {
allPagess(uid: $uid) {
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

export const queryStaticPageContent = async (uid) => {
    const previewCookie = Cookies.get('io.prismic.preview');
    const queryOptions = {
        query: staticPageQuery,
        variables: {
            uid
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


/*
 * Slug page query
 */
const slugPageQuery = gql`
query slugPageQuery($tag: [String!]) {
allPagess(tags: $tag) {
   edges {
      node {
        _meta {
           id   
          uid
        }
        main_img
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
        query: slugPageQuery,
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

/*
 * Post page query
 */
const postPageQuery = gql`
query postPageQuery($tag: [String!]) {
allPosts(tags: $tag) {
  edges {
      node {
         _meta {
          uid
        }
        title
        main_image
        release_date
        text
        cta_text
        body {
          ...on PostBodyText {
            primary {
              text
            }
          }
          ...on PostBodyImage {
            fields {
              image
              img_caption
            }
          }
        }
      }
    }
    }   
}
`;

export const queryPostPageContent = async (tag) => {
    const previewCookie = Cookies.get('io.prismic.preview');
    const queryOptions = {
        query: postPageQuery,
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


/*
 * Statio page query
 */
const pricingQuery = gql`
query pricingQuery {
allPricings {
    edges {
      node {
        _meta {
          id
        }
        page_title
        page_description
        map
        body {
          ...on PricingBodyPlan_card {
            primary {
              plan_name
              upload
              download
              term_contract_price
              term_activation_price
              indefinite_contract_price
              indefinite_activation_price
            }
          }
        }
      }
    }
  }
}
`;

export const queryPricingContent = async (tag) => {
    const previewCookie = Cookies.get('io.prismic.preview');
    const queryOptions = {
        query: pricingQuery,
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