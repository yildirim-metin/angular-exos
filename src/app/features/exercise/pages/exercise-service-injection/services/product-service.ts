import {Injectable, signal} from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ProductService {
	products = signal<Product[]>([]);

	add(product: Product) {
		let productsTmp: Product[] = this.products();
		productsTmp.push(product);
		this.products.set(productsTmp);
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

export interface Product {
	name: string;
	quantity: number;
}
