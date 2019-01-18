import {JetView} from "webix-jet";
export default class Contact extends JetView {
	config() {
		return {
			cols: [
				{$subview: "ContList", name: "list"},
				{$subview: "ContForm", name: "form"}
			]
		};
	}
	ready(){
		// const list = this.getSubView("list").getRoot();
		// this.getSubView("form").bind(list);
	}
}