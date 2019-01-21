import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView{
	config() {
		var header = {
			type: "header",
			template: this.app.config.name,
		};

		var menu = {	
			view: "menu",
			id:"top:menu", 
			css: "app_menu",
			width: 280,
			layout: "y",
			select: true,
			template: "<span class='webix_icon #icon#'></span> #value# ",
			data:[
				{ value: "Contacts", id: "contacts" },
				{ value: "Data", id: "data", icon: "wxi-columns" },
				{ value: "Settings", id: "settings", icon: "wxi-pencil" }
			]
		};

		var ui = {
			type: "clean",
			paddingX: 5,
			css: "app_layout",
			cols: [
				{ 
					paddingX: 5,
					paddingY: 10,
					rows: [
						{
							css: "webix_shadow_medium",
							rows: [header, menu]
						}
					]
				},
				{
					type: "wide",
					paddingX: 5,
					paddingY: 10,
					rows: [
						{
							$subview: true
						},
						// {}
					] 
				}
			]
		};

		return ui;
	}
	init(){
		this.use(plugins.Menu, "top:menu");
	}
}