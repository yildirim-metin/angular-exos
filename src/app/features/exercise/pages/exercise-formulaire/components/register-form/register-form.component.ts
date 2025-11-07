import {Component, inject} from "@angular/core";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {passwordValidator} from "../../validators/password.validator";
import {User, UserAddress} from "../../models/user.model";
import moment from "moment";

@Component({
	selector: "register-form",
	imports: [ReactiveFormsModule],
	templateUrl: "./register-form.component.html",
	styleUrl: "./register-form.component.scss",
})
export class RegisterFormComponent {
	private readonly _fb = inject(FormBuilder);

	addresses = this._fb.array([
		this._fb.group({
			street: ["", [Validators.required, Validators.minLength(5)]],
			houseNumber: [0, [Validators.required, Validators.min(0)]],
		}),
	]);

	registerForm = this._fb.group({
		email: ["", [Validators.required, Validators.email]],
		password: [
			"",
			[Validators.required, Validators.minLength(8), passwordValidator()],
		],
		birthDate: [moment().format("YYYY-MM-DD"), [Validators.required]],
		addresses: this.addresses,
	});

	onSubmit() {
		if (this.registerForm.valid) {
			const user: User = {
				email: this.registerForm.value.email!,
				password: this.registerForm.value.password!,
				birthDate: new Date(this.registerForm.value.birthDate!),
				addresses: this.registerForm.value.addresses as UserAddress[],
			};

			console.log(user);
		}
	}

	addAdress() {
		this.addresses.push(
			this._fb.group({
				street: ["", [Validators.required, Validators.minLength(5)]],
				houseNumber: [0, [Validators.required, Validators.min(0)]],
			}),
		);
	}

	removeAddress(index: number) {
		this.addresses.removeAt(index);
	}
}
