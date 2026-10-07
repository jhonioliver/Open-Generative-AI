/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['studio', 'ai-agent', 'workflow-builder', 'design-agent'],
  experimental: {
    // Uploads are proxied to api.muapi.ai through middleware; the default 10MB
    // cap would reject reference videos (the studios allow up to 100MB).
    middlewareClientMaxBodySize: '100mb',
  },
};

export default nextConfig;
