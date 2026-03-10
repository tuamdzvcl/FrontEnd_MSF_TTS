import{Component} from "@angular/core"
import { Router, RouterOutlet } from "@angular/router";
@Component({
    selector: "regiter-form",
    imports:[
        RouterOutlet
    ],
     standalone: true,
    templateUrl:"regiter-form.component.html",
    styleUrls:["regiter-form.component.css"]
})
export class RegiterFormComponent{
    constructor(public router: Router) {}
}