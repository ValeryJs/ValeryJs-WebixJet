import {JetView} from "webix-jet";
export default class DataView extends JetView{
	config(){
		return {
			view:"toolbar",
			cols:[
				{
					width: 250,	
					margin:14, borderless:true, rows:[
						{ view:"button", value:"Countries", height:40,
							click:() => this.doClick("Clicked")  },
						{ view:"button", value:"Status", height:40,
							click:() => this.app.show("top/data/DataCountries")
						}
					]
				},
				{	$subview: true }
			],
			
		};
	}
	doClick(){
		this.app.show("top/data/DataStatus");
	}
}