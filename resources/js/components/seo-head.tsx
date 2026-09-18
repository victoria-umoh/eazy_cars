import React from 'react';
import { Head } from '@inertiajs/react';

interface SeoHeadProps {
    title: string;
    description: string;
    keywords?: string | string[];
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'product';
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    jsonLd?: Record<string, unknown> | Record<string, unknown>[];
    children?: React.ReactNode;
}

const SITE_URL = 'https://eazyscars.be';
const DEFAULT_OG_IMAGE = 'https://eazyscars.be/images/eazy-cars-hero.png';

export default function SeoHead({
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = 'website',
    twitterTitle,
    twitterDescription,
    twitterImage,
    jsonLd,
    children,
}: SeoHeadProps) {
    const keywordsStr = Array.isArray(keywords) ? keywords.join(', ') : keywords;

    // Normalize canonical URL
    const canonicalUrl = canonical
        ? canonical.startsWith('http')
            ? canonical
            : `${SITE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
        : typeof window !== 'undefined'
          ? window.location.href
          : SITE_URL;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywordsStr && <meta name="keywords" content={keywordsStr} />}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:site_name" content="Eazy's Cars" />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={ogTitle || title} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@eazyscars" />
            <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
            <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
            <meta name="twitter:image" content={twitterImage || ogImage} />

            {/* Page-Specific JSON-LD Schema */}
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}
                />
            )}

            {children}
        </Head>
    );
}
