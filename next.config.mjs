/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'tmssl.akamaized.net',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'cdn.myanimelist.net',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**'
            }
        ]
    }
    
};

export default nextConfig;
