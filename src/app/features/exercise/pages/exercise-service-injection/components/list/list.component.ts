import {Component, input, output} from "@angular/core";
import {NgClass} from "@angular/common";
import {Product} from "../../models/product";

@Component({
	selector: "list",
	imports: [NgClass],
	templateUrl: "./list.component.html",
	styleUrl: "./list.component.scss",
})
export class ListComponent {
	elements = input.required<Product[]>();

	addItemEvent = output<number>();
	removeItemEvent = output<number>();

	addItem(index: number) {
		this.addItemEvent.emit(index);
	}

	removeItem(index: number) {
		this.removeItemEvent.emit(index);
	}
}
