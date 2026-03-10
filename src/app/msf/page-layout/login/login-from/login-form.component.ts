import{Component} from "@angular/core"
import { Router, RouterOutlet } from "@angular/router";
@Component({
    selector: "login-form",
    imports:[
        RouterOutlet
    ],
     standalone: true,
    templateUrl:"login-form.component.html",
    styleUrls:["login-form.component.css"]
})
export class LoginFormComponent{
    constructor(public router: Router) {}
}