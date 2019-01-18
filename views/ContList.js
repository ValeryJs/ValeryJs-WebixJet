import { JetView } from "webix-jet";
import { contacts } from "models/contacts";
export default class ContList extends JetView {
	config() {
		const header = {
			type: "header",
			template: "Contacts",
			css: "webix_header app_header"
		};

		const list = {
			view: "list", 
			scroll: false,
			css: "app_contacts",
			select: true,
			width: 350,
			type:{
				height: 60
			},
			template: `
				<div class="app_contacts_item">
					<div class="app_contacts_item_photo"></div>
					<div class="app_contacts_item_body">
						<div>#Name#</div>
						<div>#Email#</div>
					</div>
					<span class="mdi mdi-close app_contacts_item_remove remove"></span>
				</div>
			`,
			onClick: {
				remove(e, id) {
					this.remove(id);
					return false;
				},
			},
		};
		return {
			rows: [header, list]
		};
	}
	getSelected(){
		this.getRoot().queryView({view:"list"}).getSelectedItem();
	}
	ready(view) {
		view.queryView("list").parse( contacts );
	}
}