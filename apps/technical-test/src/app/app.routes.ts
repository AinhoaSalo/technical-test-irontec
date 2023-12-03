import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchIssuesComponent } from './components/search-issues/search-issues.component';
import { TableIssuesComponent } from './components/table-issues/table-issues.component';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'buscar', component: SearchIssuesComponent },
    { path: 'tabla', component: TableIssuesComponent },
];
