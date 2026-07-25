module.exports = {
  // pathPrefix: '/gatsby-starter-scientist',
  siteMetadata: {
    author: 'Jan Rosner',
    description: 'Pain-Neurorecovery-Group',
    siteUrl: 'https://pain-neurorecovery-group.github.io/',
    title: 'The Pain-Neurorecovery-Group',
    // List of link buttons to include on the landing image. Delete this field
    // and/or all entires if you do not want these links.
    // options: 'contact', 'join-us', 'people', 'publications', 'research'
    primaryLinks: [
      'research',
      'join-us',
    ],
    // List of PubMed IDs to include on the publication page. Delete this field
    // and/or all entires if you do not want the publication page.
    publications: [

    ],
    // An array of links to display in the page footer. Include as many as you like
    // (not just the ones here). If either the link or text is missing,
    // it will not be shown. Delete this field and/or all entires to disable
    // footer links.
    footerLinks: [
      { text: 'GitHub', link: 'https://github.com/Pain-Neurorecovery-Group' },
      { text: 'Google Scholar', link: 'https://scholar.google.com/citations?user=UsR83s8AAAAJ&hl=en' },
      { text: 'LinkedIn', link: 'https://www.linkedin.com/in/jan-rosner-68625b247/' },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-scientist',
        short_name: 'scientist',
        start_url: '/',
        background_color: '#3d8183',
        theme_color: '#3d8183',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
  ],
};
