/** @type {import('next').NextConfig} */
const nextConfig = {
    target: 'experimental-serverless-trace',
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        };
    }
}

module.exports = nextConfig
