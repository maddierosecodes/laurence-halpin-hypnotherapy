import { HomeHero } from '@/components/organisms/HomeHero';
import { Metadata } from 'next';
import Script from 'next/script';
import { homeMetadata } from './page.metadata';
import { homeSchema } from '../schemas/homeSchema';

export const metadata: Metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema)
        }}
      />
      <HomeHero />
    </>
  );
}
