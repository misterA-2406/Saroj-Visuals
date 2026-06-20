import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  url?: string;
  image?: string;
}

export function SEO({
  title = "Premium Video Editing Agency | Saroj Visuals",
  description = "We turn raw footage into your next 100,000 followers. Data-backed retention editing systems for real estate agents, coaches, and creators.",
  type = "website",
  url = "https://sarojvisuals.com",
  image = "/assets/images/og_share_image_1781945404511.jpg"
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Preload specific important assets */}
      <link rel="preload" href="/assets/images/hero_background_1781945351104.jpg" as="image" />
    </Helmet>
  );
}
