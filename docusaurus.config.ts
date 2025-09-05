import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Junior Front-End Interview',
  tagline: '2년 차 프론트엔드 개발자 면접에서 받은 질문을 정리했습니다.',
  favicon: 'img/icon.png',
  future: {
    v4: true,
  },
  url: 'https://junior-fe-interview.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Junior Front-End Interview',
      logo: {
        alt: 'Logo',
        src: 'img/icon.png',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'JavaScript',
              to: '/javascript',
            },
            {
              label: 'React',
              to: '/react',
            },
            {
              label: 'Etc',
              to: '/category/-etc',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mnxmnz/junior-fe-interview',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/dev-mnxmnz',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 김민지 Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
