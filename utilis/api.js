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

const getMobileDetect = (userAgent) => {
    const isAndroid =boolean => Boolean(userAgent.match(/Android/i));
    const isIos = boolean => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
    const isOpera =  boolean => Boolean(userAgent.match(/Opera Mini/i));
    const isWindows = boolean => Boolean(userAgent.match(/IEMobile/i));
    const isSSR =  boolean => Boolean(userAgent.match(/SSR/i));

    const isMobile =  boolean => Boolean(isAndroid() || isIos() || isOpera() || isWindows());
    const isDesktop =  boolean => Boolean(!isMobile() && !isSSR());
    return {
        isMobile,
        isDesktop,
        isAndroid,
        isIos,
        isSSR
    };
};

export const useMobileDetect = () => {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
    return getMobileDetect(userAgent);
}

