import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

import type { KIT_ROUTES } from '$lib/ROUTES.js'

import { kitRoutes, type Options } from './src/lib/index.js'

export const _kitRoutesConfig: Options<KIT_ROUTES> = {
	// format: 'route(path) & object[path]',
	// format: 'object[symbol]',
	// format_short: true,
	logs: {
		stats: true,
	},
	// path_base: true,
	// router_type: 'hash',
	// default_type: 'string',
	// extra_search_params: 'with',
	// generated_file_path: 'src/lib/another_path_for_the_file.ts',
	// post_update_run: 'npm exec prettier ./src/lib/ROUTES.ts -- -w',
	post_update_run: 'kitql-lint --format -g ./src/lib/ROUTES.ts',

	// format_page_route_id: true,
	// trailingSlash: 'always',

	PAGES: {
		// '/': { extra_search_params: 'with' },
		'/sp': {
			extra_search_params: 'with',
		},
		'/subGroup2': {
			explicit_search_params: {
				first: {
					required: true,
				},
			},
		},
		'/site': {
			extra_search_params: 'with',
			explicit_search_params: { limit: { type: 'number' } },
			params: {
				// yop: { type: 'number' },
			},
		},
		'/site/[id]': {
			explicit_search_params: {
				limit: { type: 'number' },
				demo: { type: 'string' },
				'da-sh': { type: 'string' },
			},
			params: {
				id: { type: 'string', default: '"Vienna"' },
				lang: { type: "'fr' | 'hu' | undefined", default: '"fr"' },
			},
		},
		'/match/[id=int]': {
			params: {
				id: { type: 'number' },
			},
		},
		'/site_contract/[siteId]-[contractId]': {
			explicit_search_params: { limit: { type: 'number' } },
		},
		'/spArray': {
			explicit_search_params: { ids: { type: 'number[]', required: true } },
		},
		'/spArrayComma': {
			explicit_search_params: { ids: { type: 'number[]', required: true, arrayMode: 'join' } },
		},
		'/anchors': {
			explicit_search_params: {
				anotherOne: {
					type: 'string',
				},
			},
			hash: {
				type: '"section0" | "section1" | "section2" | "section3"',
				required: true,
				default: '"section0"',
			},
		},
		'/anchors/[id]': {
			hash: {
				type: '"section0" | "section1" | "section2" | "section3"',
			},
		},
	},
	SERVERS: {
		// site: {
		//   params: { }
		// }
		// yop: {},
	},
	ACTIONS: {
		'default /contract/[id]': {
			explicit_search_params: {
				limit: { type: 'number' },
			},
		},
		'send /site_contract/[siteId]-[contractId]': {
			explicit_search_params: {
				extra: { type: "'A' | 'B'", default: '"A"' },
			},
		},
		'create /site': {
			explicit_search_params: {
				redirectTo: { type: '"list" | "new" | "detail"' },
			},
		},
	},
	LINKS: {
		// reference to a hardcoded link
		twitter: 'https://twitter.com/jycouet',

		// reference to link with params!
		twitter_post: 'https://twitter.com/[name]/status/[id]',

		// reference to link with params & search params!
		gravatar: {
			href: 'https://www.gravatar.com/avatar/[str]',
			params: {
				str: { type: 'string' },
			},
			explicit_search_params: {
				s: { type: 'number', default: 75 },
				d: { type: '"retro" | "identicon"', default: '"identicon"' },
			},
		},

		default_values_site: {
			href: 'https://sommepage.com/[bool]/[arr]',
			params: {
				bool: { type: 'boolean', default: true },
				arr: {
					type: 'Array<boolean | string | number | null>',
					default: "[true, 'p2', 3, null]",
				},
			},
			explicit_search_params: {
				sNumber: { type: 'number', default: 75 },
				sBoolean: { type: 'boolean', default: false },
				sBooleanRequired: { type: 'boolean', default: "'mooo'", required: true },
				sArray: {
					type: 'Array<boolean | string | number | null>',
					default: "[true, 'p2', 3, null]",
				},
				sArrayRequired: {
					type: 'Array<boolean | string | number | null>',
					default: "[true, 'p2', 3, null]",
					required: true,
				},
			},
		},
	},

	override_params: {
		lang: { type: "'fr' | 'en' | 'hu' | 'at' | string" },
	},
}

export default defineConfig({
	plugins: [
		sveltekit(),
		// demo
		kitRoutes<KIT_ROUTES>(_kitRoutesConfig),
	],
	test: {
		include: ['src/**/*.spec.ts'],
	},
})
