import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = 'lexell';

/**
 * Route definitions for Prismic documents.
 */
const routes: prismic.Route[] = [
  {
    type: 'pages',
    path: '/help',
  },
];

export const prismicClient = ({
     previewData,
     req,
     ...config
 }: prismicNext.CreateClientConfig = {}) => {
    const client = prismic.createClient(prismic.getRepositoryEndpoint(repositoryName), {
        routes,
        ...config,
    });

    prismicNext.enableAutoPreviews({ client, previewData, req });

    return client;
};
export const client = (preview?) => new ApolloClient({
    link: new HttpLink({
        uri: prismic.getGraphQLEndpoint(repositoryName),
        fetch: prismicClient(preview).graphQLFetch,
        useGETForQueries: true,
    }),
    cache: new InMemoryCache(),
});
