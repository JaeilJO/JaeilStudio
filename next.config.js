const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    compiler: {
        styledComponents: true,
    },
    transpilePackages: ['three'],
};

module.exports = nextConfig;
