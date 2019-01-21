import {JetView} from "webix-jet";
import ContList from "./ContList";
import ContForm from "./ContForm";

import { contacts } from "models/contacts";

export default class Contact extends JetView {
	config() {
		return {
			css: "webix_shadow_medium",
			rows: [
				{
					cols: [
						new ContList(this.app, "", contacts),
						ContForm
					]
				}
			]
		};
	}

	ready(view, [url]) {
		this._listId = "name";
		const {listItemId} = url.params;
		this._listView = view.queryView("list");
		this._formView = view.queryView("form");

		if(!listItemId) {
			const listFirstId = this._listView.getFirstId();
			this.setParam(this._listId, listFirstId, true);
		}

		this.on(this._listView, "onItemClick", (id) => {
			this.setParam(this._listId, id, true);
		});

		this.on(this.app, "save:form", () => {
			const userParam = this._formView.getValues();
			if(this._listView.getFirstId()){
				this._listView.updateItem(userParam.id, {"Name": userParam["Name"], "Email": userParam["Email"]});
			}
			else{
				this._listView.add(userParam);
			}
		});
	}

	urlChange(view, [url]){
		const listItemId = url.params[this._listId];

		if(listItemId){
			const listItem = this._listView.getItem(listItemId);

			if (listItem) {
				this._listView.select(listItemId);
				this._formView.setValues(listItem);

			}

		}
	}
}