import nextPwa from "next-pwa";

// PWA konfiguracija
const withPWA = nextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
    ],
  },
};

// Eksportuj sa PWA konfiguracijom
export default withPWA(nextConfig);
