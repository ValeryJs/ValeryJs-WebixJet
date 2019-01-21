import { JetView } from "webix-jet";

export default class ContList extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._listData = data;
	}

	config() {
		const header = {
			type: "header",
			template: "Contacts",
			css: "webix_header app_header"
		};

		const list = {
			view: "list",
			id: "listCont", 
			scroll: false,
			editable: "true",
			css: "app_contacts",
			select: true,
			width: 350,
			type: {
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
			}
		};

		const buttonCont = {
			view:"button",
			value: "AddUser", 
			click: () => {
				this.app.callEvent("addUser:list");
			}
		};

		return {
			rows: [header, list, buttonCont]
		};
	}

	init(view) {
		const contactsList = view.queryView("list");
		contactsList.parse( this._listData );
	}
}	