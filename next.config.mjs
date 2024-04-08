/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "adventurous-caiman-790.convex.cloud",
      },
      {
        hostname: "lnvmznigerw8fszd.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        // port: "",
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "www.fagerh.fr",
        // port: "",
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "lh5.googleusercontent.com",
        // port: "",
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "www.groupe-ugecam.fr",
        // port: "",
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
