import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(),
		NetlifyCMS({
      config: {
				// Use Netlify’s “Git Gateway” authentication and target our default branch
				backend: {
					name: 'git-gateway',
					branch: 'main',
				},
				collections: [
					// Define a blog post collection
					{
						name: 'posts',
						label: 'Blog Posts',
						folder: 'src/pages/blog',
						create: true,
						delete: true,
						fields: [
							{ name: 'title', widget: 'string', label: 'Post Title' },
							{ name: 'body', widget: 'markdown', label: 'Post Body' },
						],
					},
				],
			};
    }),
	],
});
