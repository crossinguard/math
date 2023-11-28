import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
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
        github: 'https://github.com/crossinguard',
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
          autogenerate: { directory: 'about' },
        },
      ],
      customCss: ['./src/tailwind.css', './src/custom.css'],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
