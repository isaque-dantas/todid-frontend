import {HttpInterceptorFn} from '@angular/common/http';
import {JwtTokenService} from "../services/jwt-token.service";

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  if (JwtTokenService.tokenExists()) {

    const authorizedRequest =
      req.clone({
        headers: req.headers.set("Authorization", JwtTokenService.getToken()),
      });

    return next(authorizedRequest);
  } else {
    return next(req);
  }
};
