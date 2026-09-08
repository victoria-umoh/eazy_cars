<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <meta name="author" content="Eazy's Cars">
        <meta name="theme-color" content="#0d1117">

        {{-- Primary Meta Tags & Open Graph Defaults --}}
        <meta name="description" content="Eazy's Cars - Premium vehicle sourcing, international import and export, luxury and performance cars tailored to your specification across Belgium, Europe, USA, Canada, and Japan.">
        <meta name="keywords" content="cars for sale, vehicle sourcing, car sourcing belgium, luxury cars, import cars, export cars, mercedes gle amg, toyota highlander, lexus rx350, international car dealer">

        <meta property="og:site_name" content="Eazy's Cars">
        <meta property="og:type" content="website">
        <meta property="og:locale" content="en_US">
        <meta property="og:image" content="{{ asset('images/eazy-cars-hero.png') }}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:image:alt" content="Eazy's Cars - Curated Motoring & Global Vehicle Sourcing">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@eazyscars">
        <meta name="twitter:creator" content="@eazyscars">
        <meta name="twitter:image" content="{{ asset('images/eazy-cars-hero.png') }}">

        {{-- Structured Data (Schema.org JSON-LD) --}}
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "AutoDealer",
          "name": "Eazy's Cars",
          "url": "https://eazyscars.be",
          "logo": "https://eazyscars.be/favicon.svg",
          "image": "https://eazyscars.be/images/eazy-cars-hero.png",
          "description": "Global car sourcing, luxury & performance vehicle sales, and reliable international import/export services.",
          "telephone": "+32497911005",
          "email": "info@eazyscars.be",
          "priceRange": "$$$$",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BE"
          },
          "sameAs": [
            "https://wa.me/32497911005"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Featured Vehicles for Sale & Sourcing",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Car",
                  "name": "Mercedes-Benz GLE350 AMG"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Car",
                  "name": "Mercedes-Benz ML350"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Car",
                  "name": "Toyota Corolla"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Car",
                  "name": "Toyota Highlander"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Car",
                  "name": "Lexus RX350"
                }
              }
            ]
          }
        }
        </script>

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>{{ config('app.name', "Eazy's Cars") }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
