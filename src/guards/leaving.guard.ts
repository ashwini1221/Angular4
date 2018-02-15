import { CanActivate } from "@angular/router/src/interfaces";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthorFormComponent } from "../app/author/author-form.component";

export class LeavingGuard implements CanDeactivate<AuthorFormComponent> {
    canDeactivate(component: AuthorFormComponent, currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): 
        boolean | Observable<boolean> | Promise<boolean> {
        return confirm('Do you really want to leave Form Page ???');
    }
    

}