import { Component,} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
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

@Component({
  standalone: true,
  imports: [
    CommonModule, 
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
  validateUrl: string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  loadingTable: boolean = false;

  owner: string = '';
  repo: string = '';

  urlFormControl = new FormControl('', [Validators.required, Validators.pattern(this.validateUrl)]);
  constructor (
    private apiService: ApiService,
    private store: Store<{issues: DataStateInterface}>,
  ) {}
  
  onSubmit(): void {
    if(this.urlFormControl.valid){
      this.loadingTable = true;

      this.matchUrl(this.urlFormControl?.value);

      this.store.dispatch(issuesActions.issuesDataService({dataService: {
        'owner': this.owner,
        'repo': this.repo
      }}));

      this.apiService.getDataGithub(this.owner, this.repo).then(result => {
        this.store.dispatch(issuesActions.issuesSuccess({data: result}));
      }).catch((err) => {
        this.store.dispatch(issuesActions.issuesError(err));
      });
    }
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
