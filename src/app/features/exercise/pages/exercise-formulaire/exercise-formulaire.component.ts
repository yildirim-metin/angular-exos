import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import {RegisterFormComponent} from "./components/register-form/register-form.component";

@Component({
	selector: "exercise-formulaire",
	imports: [ExerciseHeaderComponent, RegisterFormComponent],
	templateUrl: "./exercise-formulaire.component.html",
	styleUrl: "./exercise-formulaire.component.scss",
})
export class ExerciseFormulaireComponent {}
