import {JetView} from "webix-jet";
import {countries} from "models/countries";
export default class DataCountries extends JetView{
	config(){
		return { 
			view:"list",
			autowidth:true,
			editable: true,
			editor: "text",
			editValue: "Name", template: "#Name#"	
		};
	}
	ready(view){
		view.parse(countries);

	}
}
