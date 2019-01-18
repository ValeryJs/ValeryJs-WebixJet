import {JetView} from "webix-jet";
import {statuses} from "models/statuses";
export default class DataStatus extends JetView{
	config(){
		return { view:"datatable", 

			editable: true,
			id: "statusTbl",
			autowidth: true,
			scroll: false,
			columns:[
				{ id:"id", header:"Id", width: 200},
				{ id:"Name", header:"Name", editor: "text", width: 260},
				{ id:"Icon", header:"Icon", editor: "text", width: 260},
				{ id:"remove",header: "",
					template: "<span class='btn-remove-status remove mdi mdi-trash-can'></span>"
				}
			],
			onClick:{
				remove(e, id){
					this.remove(id);
					return false;
				}
			},
		};
	}
	ready(view){
		view.parse(statuses);	
	}
}


