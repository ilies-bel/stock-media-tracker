import {NextConfig} from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: isProd ? '/stock-media-tracker' : '',
    assetPrefix: isProd ? '/stock-media-tracker/' : '',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
