/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/sdk',
    async redirects() {
    return [
      {
        source: "/",          // visit http://localhost:3000
        destination: "/sdk", // go to /site
        permanent: false,     // 307
        basePath: false,      // 👈 critical: don't auto-add /site
      },
    ];
  },
};

export default nextConfig;
