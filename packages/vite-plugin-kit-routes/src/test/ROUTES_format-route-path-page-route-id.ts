/* eslint-disable */
/**
 * This file was generated by 'vite-plugin-kit-routes'
 *
 *      >> DO NOT EDIT THIS FILE MANUALLY <<
 */

/**
 * PAGES
 */
const PAGES = {
  "/(rootGroup)": `/`,
  "/(rootGroup)/base": `/base`,
  "/(rootGroup)/base/(group-optional)/[[all]]": (params?: { all?: (string | number) }) => {
    return `/base${params?.['all'] ? `/${params?.['all']}`: ''}`
  },
  "/(rootGroup)/subGroup": `/subGroup`,
  "/(rootGroup)/subGroup/(anotherSub)/user": `/subGroup/user`,
  "/(rootGroup)/subGroup2": (params: { first: (string | number) }) => {
    return `/subGroup2${appendSp({ 'first': params['first'] })}`
  },
  "/[[lang]]/contract": (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }, sp?: Record<string, string | number>) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/contract${appendSp(sp)}`
  },
  "/[[lang]]/contract/[id]": (params: { id: (string | number), lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/contract/${params['id']}`
  },
  "/[[lang]]/gp/(logged)/one": (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/gp/one`
  },
  "/[[lang]]/gp/(public)/two": (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/gp/two`
  },
  "/[[lang]]/main": (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/main`
  },
  "/[[lang]]/match/[id=ab]": (params: { id: (ExtractParamType<typeof import('../params/ab.ts').match>), lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/match/${params['id']}`
  },
  "/[[lang]]/match/[id=int]": (params: { id: (number), lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/match/${params['id']}`
  },
  "/[[lang]]/site": (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string), limit?: (number) }, sp?: Record<string, string | number>) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/site${appendSp({ ...sp, 'limit': params?.['limit'] })}`
  },
  "/[[lang]]/site/[id]": (params?: { lang?: ('fr' | 'hu' | undefined), id?: (string), limit?: (number), demo?: (string), 'da-sh'?: (string) }) => {
    params = params ?? {}
    params['lang'] = params['lang'] ?? "fr"; 
    params['id'] = params['id'] ?? "Vienna"; 
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/site/${params['id']}${appendSp({ 'limit': params['limit'], 'demo': params['demo'], 'da-sh': params['da-sh'] })}`
  },
  "/[[lang]]/site_contract/[siteId]-[contractId]": (params: { siteId: (string | number), contractId: (string | number), lang?: ('fr' | 'en' | 'hu' | 'at' | string), limit?: (number) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/site_contract/${params['siteId']}-${params['contractId']}${appendSp({ 'limit': params['limit'] })}`
  },
  "/a/[...rest]/z": (params: { rest: (string | number)[] }) => {
    return `/a/${params['rest']?.join('/')}/z`
  },
  "/anchors": (params: { hash: ("section0" | "section1" | "section2" | "section3") }) => {
    return `/anchors${appendSp({ '__KIT_ROUTES_ANCHOR__': params['hash'] })}`
  },
  "/anchors/[id]": (params: { id: (string | number), hash: ("section0" | "section1" | "section2" | "section3") }) => {
    return `/anchors/${params['id']}${appendSp({ '__KIT_ROUTES_ANCHOR__': params['hash'] })}`
  },
  "/lay/(layVerySpecial)/normal": `/lay/normal`,
  "/lay/(layVerySpecial)/root-layout": `/lay/root-layout`,
  "/lay/(layVerySpecial)/skip": `/lay/skip`,
  "/md": `/md`,
  "/sp": `/sp`,
  "/spArray": `/spArray`,
  "/spArrayComma": `/spArrayComma`
}

/**
 * SERVERS
 */
const SERVERS = {
  "GET /(servers)/server_func_get": `/server_func_get`,
  "GET /(servers)/server_func_get_and_": `/server_func_get_and_`,
  "POST /(servers)/server_func_post": `/server_func_post`,
  "GET /[[lang]]/contract": (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/contract`
  },
  "POST /[[lang]]/contract": (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/contract`
  },
  "GET /[[lang]]/site": (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/site`
  },
  "GET /api/graphql": `/api/graphql`,
  "POST /api/graphql": `/api/graphql`,
  "GET /data/errors/[locale].json": (params: { locale: (string | number) }) => {
    return `/data/errors/${params['locale']}.json`
  }
}

/**
 * ACTIONS
 */
const ACTIONS = {
  "default /[[lang]]/contract/[id]": (params: { id: (string | number), lang?: ('fr' | 'en' | 'hu' | 'at' | string), limit?: (number) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/contract/${params['id']}${appendSp({ 'limit': params['limit'] })}`
  },
  "create /[[lang]]/site": (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/site?/create`
  },
  "u-p-d-a-t-e /[[lang]]/site": (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/site?/u-p-d-a-t-e`
  },
  "update /[[lang]]/site/[id]": (params: { id: (string | number), lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/site/${params['id']}?/update`
  },
  "delete /[[lang]]/site/[id]": (params: { id: (string | number), lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/site/${params['id']}?/delete`
  },
  "noSatisfies /[[lang]]/site_contract": (params?: { lang?: ('fr' | 'en' | 'hu' | 'at' | string) }) => {
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/site_contract?/noSatisfies`
  },
  "send /[[lang]]/site_contract/[siteId]-[contractId]": (params: { siteId: (string | number), contractId: (string | number), lang?: ('fr' | 'en' | 'hu' | 'at' | string), extra?: ('A' | 'B') }) => {
    params['extra'] = params['extra'] ?? "A"; 
    return `${params?.['lang'] ? `/${params?.['lang']}`: ''}/site_contract/${params['siteId']}-${params['contractId']}?/send${appendSp({ 'extra': params['extra'] }, '&')}`
  }
}

/**
 * LINKS
 */
const LINKS = {
  "twitter": `https://twitter.com/jycouet`,
  "twitter_post": (params: { name: (string | number), id: (string | number) }) => {
    return `https://twitter.com/${params['name']}/status/${params['id']}`
  },
  "gravatar": (params: { str: (string | number), s?: (number), d?: ("retro" | "identicon") }) => {
    params['s'] = params['s'] ?? 75; 
    params['d'] = params['d'] ?? "identicon"; 
    return `https://www.gravatar.com/avatar/${params['str']}${appendSp({ 's': params['s'], 'd': params['d'] })}`
  }
}

type ParamValue = string | number | boolean | null | undefined

/**
 * Append search params to a string
 */
export const appendSp = (
  sp?: Record<string, ParamValue | ParamValue[]>,
  prefix: '?' | '&' = '?',
) => {
  if (sp === undefined) return ''

  const params = new URLSearchParams()
  const append = (n: string, v: ParamValue) => {
    if (v !== undefined) {
      params.append(n, String(v))
    }
  }

  let anchor = ''
  for (const [name, val] of Object.entries(sp)) {
    if (name === '__KIT_ROUTES_ANCHOR__' && val !== undefined) {
      anchor = `#${val}`
      continue
    }
    if (Array.isArray(val)) {
      for (const v of val) {
        append(name, v)
      }
    } else {
      append(name, val)
    }
  }

  const formatted = params.toString()
  if (formatted || anchor) {
    return `${prefix}${formatted}${anchor}`.replace('?#', '#')
  }
  return ''
}

/**
 * get the current search params
 * 
 * Could be use like this:
 * ```
 * route("/cities", { page: 2 }, { ...currentSP() })
 * ```
 */ 
export const currentSp = () => {
  const params = new URLSearchParams(window.location.search)
  const record: Record<string, string> = {}
  for (const [key, value] of params.entries()) {
    record[key] = value
  }
  return record
}

/* type helpers for route function */
type NonFunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
type FunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
type FunctionParams<T> = T extends (...args: infer P) => any ? P : never

const AllObjs = { ...PAGES, ...ACTIONS, ...SERVERS, ...LINKS }
type AllTypes = typeof AllObjs

export type Routes = keyof AllTypes extends `${string}/${infer Route}` ? `/${Route}` : keyof AllTypes
export const routes = [
	...new Set(Object.keys(AllObjs).map((route) => /^\/.*|[^ ]?\/.*$/.exec(route)?.[0] ?? route)),
] as Routes[]

/**
 * To be used like this: 
 * ```ts
 * import { route } from '$lib/ROUTES'
 * 
 * route('site_id', { id: 1 })
 * ```
 */
export function route<T extends FunctionKeys<AllTypes>>(key: T, ...params: FunctionParams<AllTypes[T]>): string
export function route<T extends NonFunctionKeys<AllTypes>>(key: T): string
export function route<T extends keyof AllTypes>(key: T, ...params: any[]): string {
  if (AllObjs[key] as any instanceof Function) {
    const element = (AllObjs as any)[key] as (...args: any[]) => string
    return element(...params)
  } else {
    return AllObjs[key] as string
  }
}

/* type helpers param & predicate */
type ExtractFnPredicate<T> = T extends (param: any) => param is infer U ? U : never;
type ExtractParamType<T extends (param: any) => any> = ExtractFnPredicate<T> extends never ? Parameters<T>[0] : ExtractFnPredicate<T>

/**
* Add this type as a generic of the vite plugin `kitRoutes<KIT_ROUTES>`.
*
* Full example:
* ```ts
* import type { KIT_ROUTES } from '$lib/ROUTES'
* import { kitRoutes } from 'vite-plugin-kit-routes'
*
* kitRoutes<KIT_ROUTES>({
*  PAGES: {
*    // here, key of object will be typed!
*  }
* })
* ```
*/
export type KIT_ROUTES = {
  PAGES: { '/(rootGroup)': never, '/(rootGroup)/base': never, '/(rootGroup)/base/(group-optional)/[[all]]': 'all', '/(rootGroup)/subGroup': never, '/(rootGroup)/subGroup/(anotherSub)/user': never, '/(rootGroup)/subGroup2': never, '/[[lang]]/contract': 'lang', '/[[lang]]/contract/[id]': 'id' | 'lang', '/[[lang]]/gp/(logged)/one': 'lang', '/[[lang]]/gp/(public)/two': 'lang', '/[[lang]]/main': 'lang', '/[[lang]]/match/[id=ab]': 'id' | 'lang', '/[[lang]]/match/[id=int]': 'id' | 'lang', '/[[lang]]/site': 'lang', '/[[lang]]/site/[id]': 'lang' | 'id', '/[[lang]]/site_contract/[siteId]-[contractId]': 'siteId' | 'contractId' | 'lang', '/a/[...rest]/z': 'rest', '/anchors': never, '/anchors/[id]': 'id', '/lay/(layVerySpecial)/normal': never, '/lay/(layVerySpecial)/root-layout': never, '/lay/(layVerySpecial)/skip': never, '/md': never, '/sp': never, '/spArray': never, '/spArrayComma': never }
  SERVERS: { 'GET /(servers)/server_func_get': never, 'GET /(servers)/server_func_get_and_': never, 'POST /(servers)/server_func_post': never, 'GET /[[lang]]/contract': 'lang', 'POST /[[lang]]/contract': 'lang', 'GET /[[lang]]/site': 'lang', 'GET /api/graphql': never, 'POST /api/graphql': never, 'GET /data/errors/[locale].json': 'locale' }
  ACTIONS: { 'default /[[lang]]/contract/[id]': 'id' | 'lang', 'create /[[lang]]/site': 'lang', 'u-p-d-a-t-e /[[lang]]/site': 'lang', 'update /[[lang]]/site/[id]': 'id' | 'lang', 'delete /[[lang]]/site/[id]': 'id' | 'lang', 'noSatisfies /[[lang]]/site_contract': 'lang', 'send /[[lang]]/site_contract/[siteId]-[contractId]': 'siteId' | 'contractId' | 'lang' }
  LINKS: { 'twitter': never, 'twitter_post': 'name' | 'id', 'gravatar': 'str' }
  Params: { 'all': never, 'first': never, 'lang': never, 'id': never, 'limit': never, 'demo': never, 'da-sh': never, 'siteId': never, 'contractId': never, 'rest': never, 'hash': never, 'locale': never, 'extra': never, 'name': never, 'str': never, 's': never, 'd': never }
}
