import { CanActivate } from "@angular/router/src/interfaces";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

export class CourseGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
return confirm("Do you really want to visit course ListPage ???");
  }

}