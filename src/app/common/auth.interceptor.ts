import { HttpInterceptorFn } from '@angular/common/http';

const API_KEY = '';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = req.headers.set('x-api-key', API_KEY);
  req = req.clone({ headers });
  return next(req);
};
