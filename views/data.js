import {JetView} from "webix-jet";
import DataCountries from "./DataCountries";
import DataStatus from "./DataStatus";
import {countries} from "models/countries";
import {statuses} from "models/statuses";
export default class DataView extends JetView {
	config() {
		return {
			css: "webix_shadow_medium",
			rows:[
				{	view:"tabbar", id:"tabbar", value: "View1", multiview:true,
					options: [
						{ value: "Status",  id: "View1"},
						{ value: "Countries",  id: "View2"}
					]
				},
				{
					view: "label",  css: "app_contacts", label: "HELLO"
				}, 					
				{ id:"mymultiview",
					cells:[
						{id:"View1", 
							cols:[
								new	DataStatus(this.app, "", statuses),
							]
						},                       
						{	id:"View2",
							cols:[
								new DataCountries(this.app, "", countries),
							]
						}
					]
				}
			]
		};
	}
}
