import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'tech-paginator',
  standalone: true,
  imports: [
    CommonModule, 
    MatPaginatorModule,
    MatTableModule 
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  @Input() totalItems: number = 0;
  @Input() pageSize: number = 0;
  @Output() pageChanged = new EventEmitter<PageEvent>();
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  showFirstLastButtons: boolean = true;


  onPageChange(event: PageEvent) {
    this.pageChanged.emit(event);
  }
}
