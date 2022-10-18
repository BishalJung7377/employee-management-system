import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { HhtpHandlerService } from './hhtp-handler.service';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  constructor(
    public loaderService: HhtpHandlerService,
    public auth: AuthService
  ) {}
  intercept(
    req: HttpRequest<string>,
    next: HttpHandler
  ): Observable<HttpEvent<string>> {
    this.loaderService.isLoading.next(true);
    this.auth.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.isLoading.next(false);
        this.auth.isLoading.next(false);
      })
    );
  }
}