/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Replace with your actual site URL
  siteUrl: '--my-site-url--',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.9,
  exclude: ['/404', '/500'],
};

