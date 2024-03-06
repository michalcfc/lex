import { useState, useEffect } from 'react';

import Card from '@components/Card';
import Grid from '@components/Grid';
import Section from '@components/Section';
import Container from '@components/Container';
import CallWidget from '@components/CallWidget';
import Cookie from '@components/Cookie';
import CallToAction from '@components/CallToAction';
import LogoCarousel from '@components/LogoCarousel';
import GoToTop from '@components/GoToTop';
import { HomeProps } from './../Types/Home.d';

import Head from 'next/head';

import CookieConsent from 'react-cookie-consent';

import { queryHomeContent } from '../utilis/prismicQueries';
import Loader from '@components/Loader';
import Layout from '../layout';

const Home = ({ homeDoc }: HomeProps) => {
  const [isBottom, setIsBottom] = useState(false);

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const onScroll = function () {
      if (window.innerHeight + window.scrollY >= document.documentElement.clientHeight) {
        setIsBottom(true);
      }
      if (window.scrollY < 500) {
        setIsBottom(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [loader]);

  if (homeDoc) {
    console.log(homeDoc);
    return (
      <Layout homeDoc={homeDoc}>
        {homeDoc.body.map((section, index) => {
          if (section.type === 'partners') {
            return (
              <Container key={index}>
                <LogoCarousel logos={section.fields} />
              </Container>
            );
          }
          if (section.type === 'feature') {
            return (
              <Section
                key={index}
                title={section.primary.heading[0].text}
                description={section.primary.text[0].text}
                isFlex
                isReverse={index % 2 == 1}
                background={index % 2 == 0}
                link={section.primary.url._meta ? `/${section.primary.url._meta.uid}` : '/'}
                img={section.primary.featured_image.url}
                logo={section.primary.logo.url}
              />
            );
          }

          if (section.type === 'centered_text') {
            return <CallToAction key={index} data={section.primary} />;
          }
        })}

        <CookieConsent location="bottom" buttonText="Rozumiem" cookieName="myAwesomeCookieName2">
          Korzystając ze strony wyrażasz zgodę na używanie cookies zgodnie z polityką prywatności
        </CookieConsent>

        <CallWidget />

        {isBottom && <GoToTop />}
      </Layout>
    );
  }
};

export default Home;

export async function getStaticProps({ previewData }) {
  const queryResponse = await queryHomeContent(previewData);
  const homeDoc = queryResponse.data.allHomepages.edges[0].node;

  return {
    props: {
      homeDoc,
    },
  };
}
