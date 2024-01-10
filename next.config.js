/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "http2.mlstatic.com",
			},
			{
				protocol: "https",
				hostname: "http2.mlstatic.com",
			},
		],
	},
}

module.exports = nextConfig
