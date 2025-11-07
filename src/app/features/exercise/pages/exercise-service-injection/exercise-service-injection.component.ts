import {Component, inject} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import {SpoilComponent} from "@shared/components/spoil/spoil.component";
import {ListComponent} from "./components/list/list.component";
import {ProductService} from "./services/product-service";
import {FormProductComponent} from "./components/form-product/form-product.component";
import {Product} from "./models/product";

@Component({
	selector: "exercise-service-injection",
	imports: [
		ExerciseHeaderComponent,
		SpoilComponent,
		ListComponent,
		FormProductComponent,
	],
	templateUrl: "./exercise-service-injection.component.html",
	styleUrl: "./exercise-service-injection.component.scss",
})
export class ExerciseServiceInjectionComponent {
	imgUrlResultat: string = "/assets/exercise/service/resultat.png";

	private readonly _productService = inject(ProductService);

	products = this._productService.products;

	addProduct(product: Product) {
		this._productService.add(product);
	}

	addItem(index: number) {
		this._productService.increment(index);
	}

	removeItem(index: number) {
		this._productService.remove(index);
	}
}
