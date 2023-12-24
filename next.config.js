/** @type {import('next').NextConfig} */
const {withContentlayer} = require('next-contentlayer');
const nextConfig = {
    output: 'standalone',
    images: {unoptimized: true}
}

module.exports = withContentlayer(nextConfig); 