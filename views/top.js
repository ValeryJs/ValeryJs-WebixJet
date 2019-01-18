import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView{
	config() {
		var header = {
			type: "header",
			template: this.app.config.name,
		};

		var menu = {
			view:"menu",
			id:"top:menu", 
			css:"app_menu",
			width: 280,
			layout: "y",
			select: true,
			template: "<span class='webix_icon #icon#'></span> #value# ",
			data:[
				{ value:"Contacts", id:"contacts" },
				{ value:"Data", id:"data", icon:"wxi-columns" },
				{ value:"Settings", id:"settings", icon:"wxi-pencil" }
			]
		};

		var ui = {
			type: "clean",
			css: "app_layout",
			cols: [
				{ 
					padding: 5,
					rows: [
						{
							css: "webix_shadow_medium",
							rows: [header, menu]
						}
					]
				},
				{
					$subview: true 
				}
			]
		};

		return ui;
	}
	init(){
		this.use(plugins.Menu, "top:menu");
	}
}