<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <meta name="author" content="Eazy's Cars">
        <meta name="theme-color" content="#0d1117">

        {{-- Primary Meta Tags & Open Graph Defaults --}}
        <meta name="description" content="Eazy's Cars - Source cars in Europe, Belgium, Canada and USA. Buy second handed cars and luxury cars in Europe, Belgium, Canada and USA and ship to Africa and Nigeria. Premium vehicle sourcing, international auctions, and import/export.">
        <meta name="keywords" content="Source cars in Europe, Belgium, Canada and USA, Buy second handed cars in Europe, Belgium, Canada and USA, Buy second handed luxury cars in Europe, Belgium, Canada and USA, Buy second handed cars in Europe, Belgium, Canada and USA and ship to Africa, Buy second handed cars in Europe, Belgium, Canada and USA ship to Nigeria, car sourcing belgium, vehicle sourcing europe, international car sourcing, car import export services, source a car on request, custom vehicle request, auction car sourcing europe / usa / japan, cars for sale belgium, luxury cars for sale, mercedes-benz gle 350 amg for sale, mercedes ml350 import, toyota highlander usa canada import, lexus rx350 japan usa, curated performance cars, car sourcing europe to nigeria, belgium car dealer export, usa to europe car shipping, japan to belgium car sourcing">

        @if(config('services.google.site_verification'))
            <meta name="google-site-verification" content="{{ config('services.google.site_verification') }}">
        @endif
        @if(config('services.bing.site_verification'))
            <meta name="msvalidate.01" content="{{ config('services.bing.site_verification') }}">
        @endif

        <link rel="canonical" href="{{ url()->current() }}">

        <meta property="og:site_name" content="Eazy's Cars">
        <meta property="og:type" content="website">
        <meta property="og:locale" content="en_US">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:image" content="{{ asset('images/eazy-cars-hero.png') }}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:image:alt" content="Eazy's Cars - Source cars in Europe, Belgium, Canada and USA | Buy second handed cars ship to Nigeria & Africa">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@eazyscars">
        <meta name="twitter:creator" content="@eazyscars">
        <meta name="twitter:image" content="{{ asset('images/eazy-cars-hero.png') }}">

        {{-- Structured Data (Schema.org JSON-LD via json_encode to prevent Blade/Livewire compiler parse errors) --}}
        <script type="application/ld+json">
        {!! json_encode([
            '@'.'context' => 'https://schema.org',
            '@'.'type' => 'AutoDealer',
            'name' => "Eazy's Cars",
            'url' => 'https://eazyscars.be',
            'logo' => 'https://eazyscars.be/favicon.svg',
            'image' => asset('images/eazy-cars-hero.png'),
            'description' => 'Source cars in Europe, Belgium, Canada and USA. Buy second handed cars and luxury cars in Europe, Belgium, Canada and USA and ship to Africa and Nigeria. Premium vehicle sourcing, international auctions, and import/export.',
            'telephone' => '+32497911005',
            'email' => 'info@eazyscars.be',
            'priceRange' => '€€€€',
            'address' => [
                '@type' => 'PostalAddress',
                'addressCountry' => 'BE',
            ],
            'areaServed' => [
                ['@type' => 'Country', 'name' => 'Belgium'],
                ['@type' => 'AdministrativeArea', 'name' => 'Europe'],
                ['@type' => 'Country', 'name' => 'Canada'],
                ['@type' => 'Country', 'name' => 'United States'],
                ['@type' => 'Country', 'name' => 'Nigeria'],
                ['@type' => 'Continent', 'name' => 'Africa'],
            ],
            'sameAs' => [
                'https://wa.me/32497911005',
            ],
            'makesOffer' => [
                [
                    '@type' => 'Offer',
                    'name' => 'Source cars in Europe, Belgium, Canada and USA',
                    'description' => 'Personalized international vehicle sourcing across Belgium, European dealer networks, North American auctions, and Japan.',
                ],
                [
                    '@type' => 'Offer',
                    'name' => 'Buy second handed cars in Europe, Belgium, Canada and USA',
                    'description' => 'Curated inventory and sourcing for second-handed cars with verified history.',
                ],
                [
                    '@type' => 'Offer',
                    'name' => 'Buy second handed luxury cars in Europe, Belgium, Canada and USA',
                    'description' => 'Premium used luxury vehicles including Mercedes-Benz AMG, Lexus, and high-spec SUVs.',
                ],
                [
                    '@type' => 'Offer',
                    'name' => 'Buy second handed cars in Europe, Belgium, Canada and USA and ship to Africa',
                    'description' => 'Complete vehicle purchase and international ocean freight shipping to African ports.',
                ],
                [
                    '@type' => 'Offer',
                    'name' => 'Buy second handed cars in Europe, Belgium, Canada and USA ship to Nigeria',
                    'description' => 'Direct car sourcing and shipping to Lagos (Tin Can Island and Apapa Ports), Nigeria.',
                ],
            ],
            'hasOfferCatalog' => [
                '@type' => 'OfferCatalog',
                'name' => 'Featured Vehicles for Sale & Sourcing',
                'itemListElement' => [
                    ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Car', 'name' => 'Mercedes-Benz ML350']],
                    ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Car', 'name' => 'Mercedes-Benz GLE350']],
                    ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Car', 'name' => 'Mercedes-Benz GLE43 AMG']],
                    ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Car', 'name' => 'Mercedes-Benz GLC300']],
                    ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Car', 'name' => 'Mercedes-Benz E300 / E350']],
                    ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Car', 'name' => 'Mercedes-Benz C300 / C400 / C500']],
                    ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Car', 'name' => 'Toyota Camry']],
                    ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Car', 'name' => 'Toyota Corolla']],
                    ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Car', 'name' => 'Toyota Highlander']],
                    ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Car', 'name' => 'Lexus IS']],
                    ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Car', 'name' => 'Lexus ES350']],
                    ['@type' => 'Offer', 'itemOffered' => ['@type' => 'Car', 'name' => 'Lexus RX350']],
                ],
            ],
        ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) !!}
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
