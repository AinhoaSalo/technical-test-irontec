import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { issuesActions } from '../../store/issues/issues.actions';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataStateInterface } from '../../models/issues-state.interface';
import { TableIssuesComponent } from '../table-issues/table-issues.component';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    MatButtonModule, 
    MatTooltipModule, 
    MatIconModule,
    MatProgressSpinnerModule,
    TableIssuesComponent
  ],
  selector: 'tech-issues',
  templateUrl: './search-issues.component.html',
  styleUrl: './search-issues.component.scss',
})
export class SearchIssuesComponent {
   destroyed$ = new Observable<void>(observer => {
    const unregisterFn = this.destroyRef!.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  
  owner: string = '';
  repo: string = '';
 
  validateUrl: string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  urlFormControl = new FormControl('', [Validators.required, Validators.pattern(this.validateUrl)]);
  constructor (
    private store: Store<{issues: DataStateInterface}>,
    private destroyRef?: DestroyRef
  ) {}
  
  onSubmit(): void {
    if(this.urlFormControl.valid){
      this.matchUrl(this.urlFormControl?.value);
      this.sendOwnerRepoApi();
    }
  }

  sendOwnerRepoApi(){
    this.store.dispatch(issuesActions.issuesDataService(
      {dataService: {
        'owner': this.owner,
        'repo': this.repo
        }
      })
    );
  }
  
  matchUrl(url?: string | null): void {
    const regx = '\/\/github\.com\/(.+)\/(.+)';
    if(url !== null){
      const match = url?.match(regx);
      if(match !== null && match !== undefined){
        this.owner = match[1] 
        this.repo = match[2] 
      }
    }
  }
}
