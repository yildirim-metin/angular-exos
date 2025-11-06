import {Component, inject} from "@angular/core";
import {Product, ProductService} from "../../services/product-service";
import {NgClass} from "@angular/common";

@Component({
	selector: "list",
	imports: [NgClass],
	templateUrl: "./list.component.html",
	styleUrl: "./list.component.scss",
})
export class ListComponent {
	private readonly _productService: ProductService = inject(ProductService);

	products: Product[] = this._productService.products();

	addItem(index: number) {
		this._productService.increment(index);
	}

	removeItem(index: number) {
		this._productService.remove(index);
	}
}
