import type { ISidebarItem } from "./ISidebarItem.ts"

export const routes: ISidebarItem[] = [
	{
		label: "projects",
		path: "/projects",
		icon: "folder",
		routes: [
			{
				label: "auth",
				path: "/projects/auth",
				fileExtension: "tsx",
			},
			{
				label: "blog",
				path: "/projects/blog",
				fileExtension: "astro",
			},
		],
	},
	{
		label: "blog",
		path: "/blog",
		routes: [],
	},
	{
		label: "home",
		path: "/home",
		fileExtension: "html",
	},
	{
		label: "about",
		path: "/about",
		fileExtension: "html",
	},
]
