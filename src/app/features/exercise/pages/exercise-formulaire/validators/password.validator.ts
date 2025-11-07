import {ValidatorFn} from "@angular/forms";

export function passwordValidator(): ValidatorFn {
	return control => {
		const value: string = control.value;

		const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

		if (!regex.test(value)) {
			return {strongPassword: true};
		}

		return null;
	};
}
