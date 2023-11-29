import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppModule } from './app/app.module';

bootstrapApplication(AppModule).catch((err) =>
  console.log(err)
);
