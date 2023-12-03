import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchIssuesComponent } from './components/search-issues/search-issues.component';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'issues', component: SearchIssuesComponent }
];
