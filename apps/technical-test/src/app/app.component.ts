import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchIssuesComponent } from './components/search-issues/search-issues.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchIssuesComponent,
  ],
  selector: 'ainhoa-salo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'technical-test';
}
