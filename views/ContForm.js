import { JetView } from "webix-jet";
export default class ContForm extends JetView {
	config() {
		return {
			view: "form",	
			id:"ContForm",
			elements:[
				{ template:"Add Data",id: "user", type:"section" },
				{ view:"text", label:"UserName", name:"title" },
				{ view:"text", label:"Email", name:"year" },
				{ margin:5, 
					cols:[
						{	view:"button",
							id: "addFilm", 
							value:"Save", 
							type: "form",
							click:() => {}
						}
					]	
				}
			]	
		};		
	}

}	