import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function notEmptyValidator(minChar: number = 0): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const isEmpty =
			control.value === null ||
			control.value === undefined ||
			(typeof control.value === "string" &&
				control.value.trim().length < minChar);

		return isEmpty ? {notEmpty: true} : null;
	};
}
