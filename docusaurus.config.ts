  import {themes as prismThemes} from 'prism-react-renderer';
  import type {Config} from '@docusaurus/types';
  import type * as Preset from '@docusaurus/preset-classic';
  import dotenv from 'dotenv';
  // Load environment variables
  dotenv.config();


  const config: Config = {
    title: 'houzed.ai',
    tagline: 'Your Housing Co-Pilot',
    favicon: 'img/logo-brand.svg',

    // Set the production url of your site here
    url: 'https://houzed.ai',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'houzed', // Usually your GitHub org/user name.
    projectName: 'houzed-docs', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },

    presets: [
      [
        'classic',
        {
          docs: {
            sidebarPath: './sidebars.ts',
          },
          blog: {
            showReadingTime: true,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          }
        } satisfies Preset.Options,
      ],
    ],

    themeConfig: {
      // Replace with your project's social card
      image: 'img/houzed-social-card.jpg',
      navbar: {
        title: 'houzed.ai',
        logo: {
          alt: 'houzed.ai Logo',
          src: 'img/logo-brand.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/houzed',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Features',
            items: [
              {
                label: 'Search',
                to: '/docs/search',
              },
              {
                label: 'Plan',
                to: '/docs/plan',
              },
              {
                label: 'Show',
                to: '/docs/show',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/houzedai',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/houzedai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/houzed',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} houzed.ai. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    } satisfies Preset.ThemeConfig,

    plugins: [
      require.resolve('./src/plugins/clerk-auth-plugin'),
    ],
    customFields:{
      publishableKey: process.env.REACT_APP_CLERK_PUBLISHABLE_KEY,
      dummy: 'dummy',
    }
    
  };

  export default config;
