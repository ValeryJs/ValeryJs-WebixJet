import { JetView } from "webix-jet";
export default class ContForm extends JetView {
	config() {
		const form = {
			view: "form",	
			localId:"ContForm",
			elements: [
				{ template: "Add Data", id: "user", type: "section" },
				{ view: "text", label: "UserName", name:"Name" },
				{ view: "text", label: "Email", name: "Email" },	
				{ view:"select", label:"Country", options:["1.0", "2.0"] },
				{ view:"select", value: 2, label:"Status",
					options:[
						{ value:"Master", id:1 },
						{ value:"Release", id:2 }
					] 
				},
				{	view: "button",
					id: "addFilm", 
					value: "Save", 
					type: "form",
					click: () => {
						this.app.callEvent("save:form");
					}
				}	
			]	
		};

		return {
			rows: [ form ]
		};	
	}
}	
	