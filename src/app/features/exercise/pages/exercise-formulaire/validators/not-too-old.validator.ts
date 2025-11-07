import {ValidatorFn} from "@angular/forms";
import moment from "moment";

export function notTooOldValidator(): ValidatorFn {
	return control => {
		const value = moment(control.value, "YYYY-MM-DD");

		const maxAge = moment().subtract(115, "year");

		if (value < maxAge) {
			return {
				tooOld: true,
			};
		}

		return null;
	};
}
