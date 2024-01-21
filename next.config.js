/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'http2.mlstatic.com',
			},
			{
				protocol: 'https',
				hostname: 'http2.mlstatic.com',
			},
		],
	},
};

module.exports = nextConfig;
