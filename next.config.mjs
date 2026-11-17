/** @type {import('next').NextConfig} */
const nextConfig = {
  // The live WordPress site uses trailing slashes (/home/extensions/), keep them so old URLs keep working.
  trailingSlash: true,
};
export default nextConfig;
