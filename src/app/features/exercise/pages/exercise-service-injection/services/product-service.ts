import {Injectable, signal} from "@angular/core";
import {Product} from "../models/product";

@Injectable({
	providedIn: "root",
})
export class ProductService {
	products = signal<Product[]>([]);

	add(product: Product) {
		const tab: Product[] = [...this.products(), product];
		console.log(tab);
		this.products.set(tab);
	}

	increment(index: number) {
		let product = this.products().at(index);
		if (product) {
			product.quantity++;
			this.products.set(
				this.products().map((p, i) => (i != index ? p : product)),
			);
		}
	}

	remove(index: number) {
		let product = this.products().at(index);

		if (product?.quantity) {
			product.quantity--;
			this.products.set(
				this.products().map((p, i) => (i != index ? p : product)),
			);
		} else {
			this.products.set(this.products().filter((_, i) => i != index));
		}
	}
}
