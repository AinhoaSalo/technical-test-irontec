import { NgModule, isDevMode } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, provideRouter } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from "./app.component";
import { IssuesModule } from "./components/issues/issues.module";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/issues/issues.reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { provideClientHydration } from "@angular/platform-browser";
import { appRoutes } from "./app.routes";
import { provideAnimations } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    IssuesModule,
    StoreModule.forRoot(reducers),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
      })
  ],
  providers: [
    provideClientHydration(), 
    provideRouter(appRoutes), 
    provideAnimations(),
  ],
  declarations: [AppComponent],
  exports: [AppComponent]
})
export class AppModule {}