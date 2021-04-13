export const baseUrl = process.env.BASE_URL
export function getStrapiURL(path) {
    console.log(process.env)
    return `${
        process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
  }
  
// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
    const requestUrl = getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }

  export async function getMovies(params = null) {
    let movies
    if (params !== null) {
       movies = await fetchAPI(`/movies/${params}`);
    } else {
       movies = await fetchAPI(`/movies`);
    }
    return movies;
  }