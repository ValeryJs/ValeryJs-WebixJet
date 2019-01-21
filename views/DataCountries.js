import {JetView} from "webix-jet";
export default class DataCountries extends JetView{
	constructor(app, name, data){
		super(app, name),
		this._countriesData = data;
	}
	config(){
		return { 
			view:"list",
			autowidth: true,
			autoHeight: true,
			scroll: false,
			editable: true,
			editor: "text",
			editValue: "Name", template: "#Name#"	
		};
	}
	ready(view){
		view.parse(this._countriesData);
	}
}
