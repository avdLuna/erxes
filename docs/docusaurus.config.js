module.exports = {
  title: 'erxes',
  tagline: 'erxes is a free and open fair-code licensed all-in-one growth marketing and management tool for a smoother customer journey',
  url: 'https://www.erxes.org',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'erxes', // Usually your GitHub org/user name.
  projectName: 'erxes', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-87254317-8',
    },
    algolia: {
      apiKey: '807b5401b0a7d39f4b0596cd989bba35',
      indexName: 'erxes',
      algoliaOptions: {},
    },
    sidebarCollapsible: true,
    image: 'img/erxes.png',
    navbar: {
      logo: {
        alt: 'erxes logo',
        src: 'img/logo_dark.svg',
        srcDark: 'img/logo.svg',
      },
      links: [
        {
          to: 'overview/getting-started/',
          activeBasePath: '',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: '/user/subscription-getting-started',
          activeBasePath: '',
          label: 'Tutorial',
          position: 'left',
        },
        {
          href: 'https://github.com/erxes/erxes',
          prependBaseUrlToHref: true,
          position: 'right', 
          label: 'Star',
          className: 'github-button hide-mobile',
          'data-show-count': 'true',
          'data-size': 'large',
          'aria-label': 'Star erxes/erxes on GitHub'
        },
        {
          href: 'https://github.com/erxes/erxes',
          label: 'GitHub',
          position: 'right'
        },
        {
          to: 'blog/',
          label: 'Blog',
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/overview/getting-started/',
            },
            {
              label: 'Installation Guide',
              to: '/installation/docker/',
            },
            {
              label: 'Administrator`s Guide',
              to: '/administrator/creating-first-user',
            },
            {
              label: 'Developers Guide',
              to: '/developer/developer',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About us',
              href: 'https://erxes.io/team',
            },
            {
              label: 'Blog',
              href: 'https://erxes.io/blog',
            },
            {
              label: 'Roadmap',
              href: 'https://trello.com/b/jTjXaI28/erxes-inc-roadmap',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Join our community chat',
              href: 'https://community.erxes.io/register/Gw4WRJnk9fSbyAXTq',
            },
            {
              label: 'Join our facebook group',
              href: 'https://www.facebook.com/groups/erxescommunity',
            },
          ],
        },
       
        {
          title: 'Support The erxes',
          items: [
            {
              label: 'Back us on Open Collective',
              href: 'https://opencollective.com/erxes',
            },
            {
              label: 'Back us on Github',
              href: 'https://github.com/sponsors/erxes',
            },
          ],
        },
      ],
      logo: {
        alt: 'erxes Open Source Logo',
        src: 'img/logo.svg',
        href: 'https://erxes.io',
      },
      copyright: `Copyright © ${new Date().getFullYear()} erxes Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: '',
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '',
          editUrl: 'https://github.com/erxes/erxes/edit/develop/docs',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
