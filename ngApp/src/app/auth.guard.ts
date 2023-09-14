import { CanActivateFn ,Router} from '@angular/router';
import { AuthService } from './auth.service';
import {inject} from '@angular/core'


export const authGuard: CanActivateFn = (route, state) => {
  const _authservice = inject(AuthService);
  const router = inject(Router)

  if(_authservice.loggedIn()){
    return true;
  }else{
    alert("To Access Login first....")
   return router.createUrlTree(['/login'])
  }
};
