/** @type {import('next').NextConfig} */
const nextConfig = {
  // Default to a fully static export so the site can be uploaded to any
  // cPanel shared-hosting plan with zero Node.js server requirement.
  // If the target cPanel plan confirms "Setup Node.js App" (Passenger)
  // support, remove `output: 'export'` and the two lines below it, and
  // deploy the standard Next.js build as a Node app instead.
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
