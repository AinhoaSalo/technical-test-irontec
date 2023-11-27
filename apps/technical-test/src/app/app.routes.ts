import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IssuesComponent } from './components/issues/issues.component';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'issues', component: IssuesComponent }
];
