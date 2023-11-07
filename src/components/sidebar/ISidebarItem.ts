export type ISidebarItem = {
	label: string
	path: string
	icon?: string
	fileExtension?: string
	routes?: ISidebarItem[]
}
