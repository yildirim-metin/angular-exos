import {Component, inject} from "@angular/core";
import {ProductService, Product} from "../../services/product-service";
import {FormsModule} from "@angular/forms";

@Component({
	selector: "add",
	imports: [FormsModule],
	templateUrl: "./add.component.html",
	styleUrl: "./add.component.scss",
})
export class AddComponent {
	private readonly _productService: ProductService = inject(ProductService);

	productName: string = "";
	productQuantity: number = 0;

	addProduct() {
		let product: Product = {
			name: this.productName,
			quantity: this.productQuantity,
		};

		this._productService.add(product);
	}
}
