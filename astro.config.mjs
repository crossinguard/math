import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://math.crossinguard.dev/',
  integrations: [
    starlight({
      head: [
        {
          tag: 'link',
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
          integrity:
            'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV',
          crossOrigin: 'anonymous',
        },
      ],
      title: 'math.crossinguard',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
      },
      logo: {
        src: './src/assets/crossinguard-math.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/crossinguard/math',
      },
      sidebar: [
        {
          label: 'Getting Started',
          link: '/guide/',
        },
        {
          label: 'Functions',
          items: [
            {
              label: 'Interpreting Functions',
              autogenerate: {
                directory: 'functions/01-interpreting-functions',
              },
            },
            {
              label: 'Building Functions',
              autogenerate: {
                directory: 'functions/02-building-functions',
              },
            },
            {
              label: 'Linear, Quadratic, & Exponential Models',
              autogenerate: {
                directory: 'functions/03-linear-quadratic-exponential-models',
              },
            },
            {
              label: 'Trigonometric Functions',
              autogenerate: {
                directory: 'functions/04-trigonometric-functions',
              },
            },
          ],
        },
        {
          label: 'Resources',
          collapsed: true,
          items: [
            {
              label: 'Learners',
              autogenerate: {
                directory: 'resources/learners',
              },
            },
            {
              label: 'Educators',
              autogenerate: {
                directory: 'resources/educators',
              },
            },
          ],
        },
        {
          label: 'About',
          collapsed: true,
          autogenerate: {
            directory: 'about',
          },
        },
      ],
      customCss: ['./src/tailwind.css', './src/custom.css'],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
