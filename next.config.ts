import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		turbo: {
			rules: {
				'*.svg': {
					loaders: ['@svgr/webpack'],
					as: '*.js',
				},
			},
		},
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	output: 'export',
	distDir: 'dist',
	trailingSlash: true,
	images: {
		unoptimized: true,
	}
};

export default nextConfig;
