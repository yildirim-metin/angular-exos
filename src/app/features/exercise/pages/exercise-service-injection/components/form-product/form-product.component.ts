import {Component, inject, output} from "@angular/core";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Product} from "../../models/product";
import {notEmptyValidator} from "../../validators/not-empty-validator";

@Component({
	selector: "form-product",
	imports: [ReactiveFormsModule],
	templateUrl: "./form-product.component.html",
	styleUrl: "./form-product.component.scss",
})
export class FormProductComponent {
	private readonly _fb = inject(FormBuilder);

	submitEvent = output<Product>();

	productForm = this._fb.group({
		name: [
			"",
			[
				Validators.required,
				Validators.minLength(2),
				Validators.maxLength(50),
				notEmptyValidator(2),
			],
		],
		quantity: [
			0,
			[Validators.required, Validators.min(1), Validators.max(999)],
		],
	});

	onSubmit() {
		if (this.productForm.valid) {
			this.submitEvent.emit({
				name: this.productForm.value.name!.trim(),
				quantity: this.productForm.value.quantity!,
			});
		} else {
			console.log("form not valid");
		}
	}
}
