import { Component, OnInit, DestroyRef, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { Store } from '@ngrx/store';
import { selectIssuesState } from '../../store/issues/issues.reducers';
import { Observable, takeUntil } from 'rxjs';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PaginatorComponent } from '../paginator/paginator.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { IssueData, Issues } from '../../models/issues-data.interface';
import { DataStateInterface, ErrorsIssuesState } from '../../models/issues-state.interface';
import { StatusEnum } from '../../models/status.enum';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { issuesActions } from '../../store/issues/issues.actions';

@Component({
  selector: 'tech-table-issues',
  standalone: true,
  imports: [
    CommonModule, 
    MatTableModule,
    MatPaginatorModule, 
    MatSortModule,
    PaginatorComponent,
    SpinnerComponent,
    RouterModule,
    MatIconModule,
    MatButtonModule, 
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

  StatusEnum = StatusEnum;
  errorStatus: boolean = false;
  dataStatus: boolean = false;
  issuesError: number = 0;
  

  destroyed$ = new Observable<void>(observer => {
    const unregisterFn = this.destroyRef!.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  
  constructor(
    private store: Store<{issues: DataStateInterface}>,
    private destroyRef?: DestroyRef
  ){}
  
  ngOnInit(): void {
    this.store.dispatch(issuesActions.deleteData({error: undefined, data: undefined}));
    this.getDataIssues();
  }

  getDataIssues (){
    this.store.select(selectIssuesState)
    .pipe(takeUntil(this.destroyed$))
    .subscribe((issues) =>{
      this.issuesData = issues.data != undefined ? issues.data.issuesData : [];
      this.issuesError = issues.error != undefined ? issues.error.status : 0;

      if(issues != undefined) {
        this.handleIssuesStatus(issues);
      }
  
      this.currentPageData = this.issuesData.slice(this.startIndex, this.endIndex);
    });
  }

  handleIssuesStatus(issues: DataStateInterface) {
    if (issues.data?.status === StatusEnum.Ok) {
      this.errorStatus = false;
      this.dataStatus = true;
    } else if (
      [StatusEnum.NotModified, StatusEnum.NotFound, StatusEnum.ValidationsFaild].includes(
        this.issuesError
      )
    ) {
      this.errorStatus = true;
      this.dataStatus = false;
    }
  }
  
  onPageChanged(event: PageEvent): void {
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize;
    this.currentPageData = this.issuesData.slice(this.startIndex, this.endIndex);
  }
} 