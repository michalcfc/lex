// Get site data from Strapi (metadata, navbar, footer...)
import {useRouter} from "next/router";

export async function getGlobalData() {
    const global = await fetchAPI('/global')
    return global
  }

  export function isHomePage() {
      const router = useRouter()
      const isHomePage = router.pathname == '/'
      return isHomePage
  }

export function currentPath() {
    const router = useRouter()
    return router.pathname
}