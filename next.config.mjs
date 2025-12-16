/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ 빌드 시 ESLint 에러 무시
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9000',
        pathname: '/uploads/**',
      },
      {
        // ⚠️ 여기 하나만 같이 고치자 (중요)
        protocol: 'https', // ← http ❌ → https ⭕
        hostname: 'three-3team-favorite-photo-be.onrender.com',
        pathname: '/uploads/**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/market',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;