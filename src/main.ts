import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { authInterceptor } from './app/common/auth.interceptor';
import { APP_ROUTES } from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
}).catch((err) => console.error(err));
