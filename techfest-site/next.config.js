/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Tells Next.js to generate static HTML/CSS/JS files
  images: {
    unoptimized: true,       // Required because GitHub Pages cannot optimize images on the fly
  },
  // UNCOMMENT BELOW ONLY IF your URL looks like: username.github.io/your-repo-name
  // basePath: '/your-repo-name', 
};

module.exports = nextConfig;
