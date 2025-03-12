/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.mirabaud.com', "wealthfusion.co.uk", "strapi-bus-eng-prod.s3.amazonaws.com", "https://www.condenast.com/", "strapi-bus-eng-prod.s3.us-east-1.amazonaws.com", "https://strapi-bus-eng-prod.s3.amazonaws.com","https://strapi-bus-eng-prod.s3.us-east-1.amazonaws.com", "https://cdn.sanity.io", "cdn.sanity.io"]
  }
};

export default nextConfig;
