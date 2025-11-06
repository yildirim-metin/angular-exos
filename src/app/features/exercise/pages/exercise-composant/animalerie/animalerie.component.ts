import {Component} from "@angular/core";
import {ChienComponent} from "./components/chien/chien.component";
import {ChatComponent} from "./components/chat/chat.component";

@Component({
	selector: "animalerie",
	imports: [ChienComponent, ChatComponent],
	templateUrl: "./animalerie.component.html",
	styleUrl: "./animalerie.component.scss",
})
export class AnimalerieComponent {}
