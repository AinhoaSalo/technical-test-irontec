import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, interval } from 'rxjs';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'tech-spinner',
  standalone: true,
  imports: [
    CommonModule, 
    MatProgressSpinnerModule,
  ],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  value: number = 50;
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor() {}
}

