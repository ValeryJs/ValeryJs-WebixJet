import {JetView} from "webix-jet";
export default class DataStatus extends JetView{
	constructor(app, name , data){
		super(app, name);
		this._statusData = data;
	}
	config(){
		return {
			view:"datatable", 
			editable: true,
			id: "statusView",
			autoWidth: true,
			scroll: false,
			columns: [
				{ id: "Name", header: "Name", editor: "text", fillspace: true},
				{ id: "Icon", header: "Icon", editor: "text", fillspace: true},
				{ id: "remove",header: "", width: 50,
					template: "<span class='btn-remove-status remove mdi mdi-trash-can'></span>"
				}
			],
			onClick: {
				remove(e, id){
					this.remove(id);
					return false;
				}
			},
		};
	}
	ready(view){
		view.parse(this._statusData);	
	}
}


