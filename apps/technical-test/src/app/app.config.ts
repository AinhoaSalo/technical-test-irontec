import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { issuesFeatureKey, issuesReducer } from './store/issues/issues.reducers';
import { provideEffects } from '@ngrx/effects';
import * as issuesEffects from './store/issues/issues.effects';


export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(appRoutes),
    provideAnimations(),
    provideStore(),
    provideState(issuesFeatureKey, issuesReducer),
    provideEffects(issuesEffects),
    provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode(),
        autoPause: true,
        trace: false,
        traceLimit: 75,
        connectInZone: true
    }),
    provideAnimations()
],
};
