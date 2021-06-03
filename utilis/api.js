// Get site data from Strapi (metadata, navbar, footer...)
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

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

export function isMobile() {
const [mobile, setMobile] = useState(false)

    useEffect(() => {

        if (typeof window !== 'undefined') {
            const mobile = window.innerWidth < 900
            if(mobile) {
                setMobile(true)
            }

        }
    }, []);

    return mobile

}

