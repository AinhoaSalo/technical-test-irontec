import { Component, OnInit, DestroyRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { Store } from '@ngrx/store';
import { selectIssuesState } from '../../store/issues/issues.reducers';
import { Observable, takeUntil } from 'rxjs';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PaginatorComponent } from '../paginator/paginator.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { IssueData } from '../../models/issues-data.interface';
import { DataStateInterface } from '../../models/issues-state.interface';

@Component({
  selector: 'tech-table-issues',
  standalone: true,
  imports: [
    CommonModule, 
    MatTableModule,
    MatPaginatorModule, 
    MatSortModule,
    PaginatorComponent,
    SpinnerComponent
  ],
  templateUrl: './table-issues.component.html',
  styleUrl: './table-issues.component.scss',
})
export class TableIssuesComponent implements OnInit{
  issuesData: IssueData[] = [];

  displayedColumns: string[] = ['state', 'number', 'created', 'updated', 'closed','url'];

  currentPageData: IssueData[] = [];
  startIndex: number = 0;
  endIndex: number = 10;

  destroyed$ = new Observable<void>(observer => {
    const unregisterFn = this.destroyRef!.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  
  constructor(
    private store: Store<{issues: DataStateInterface}>,
    private destroyRef?: DestroyRef
  ){}
  
  ngOnInit(): void {
    this.store.select(selectIssuesState)
    .pipe(takeUntil(this.destroyed$))
    .subscribe((data) =>{
      this.issuesData = data.data;
      this.currentPageData = this.issuesData.slice(this.startIndex, this.endIndex);
    });
  }

  onPageChanged(event: PageEvent): void {
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize;
    this.currentPageData = this.issuesData.slice(this.startIndex, this.endIndex);
  }
} 