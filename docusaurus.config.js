/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Blue Sky Framework',
  tagline: 'A FiveM Framework',
  url: 'https://alzar.github.io/',
  baseUrl: '/bluesky-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'Alzar', // Usually your GitHub org/user name.
  projectName: 'bluesky-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Blue Sky',
      logo: {
        alt: 'Blue Sky Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/requirements', label: 'Docs', position: 'left'},
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/BlueSky-Development',
          label: 'GitHub',
          position: 'right',
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
              to: 'docs/requirements',
            },
            {
              label: 'Contributing',
              to: 'docs/contributing/info',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forums',
              href: '#',
            },
            {
              label: 'Discord',
              href: '#',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/BlueSky-Development',
            }
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com/',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Blue Sky Development - Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Alzar/bluesky-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
