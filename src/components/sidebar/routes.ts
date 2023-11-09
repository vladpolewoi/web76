import type { ISidebarItem } from "./ISidebarItem.ts"

export const routes: ISidebarItem[] = [
	{
		label: "projects",
		path: "/projects",
		icon: "folder-src",
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
		icon: "folder-content",
		routes: [],
	},
	{
		label: "home",
		path: "/",
		fileExtension: "html",
	},
	{
		label: "about",
		path: "/about",
		fileExtension: "html",
	},
]
