import { Component, OnInit, importProvidersFrom } from '@angular/core';
import {FormControl, Validators,} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { Store } from '@ngrx/store';
import { TableIssuesComponent } from '../table-issues/table-issues.component';
import { DataStateInterface } from '../../models/issues.interface';
import { issuesActions } from '../../store/issues/issues.actions';
import { selectIsLoading } from '../../store/issues/issues.reducers';

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
    TableIssuesComponent
  ],
  selector: 'tech-issues',
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.scss',
})
export class IssuesComponent {
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  issues:any;
  prueba: boolean = false;

  isLoadding$ = this.store.select(selectIsLoading)

  urlFormControl = new FormControl('', [Validators.required, Validators.pattern(this.reg)]);
  constructor(
    private apiService: ApiService,
    private store: Store<{issues: DataStateInterface}>,
  ) {

  }
  
  onSubmit() {
    this.store.dispatch(issuesActions.issuesLoading({isLoading: true}))
    if(this.urlFormControl.valid){
      this.apiService.getDataGithub("prometheus", 'prometheus').then(result => {
        this.prueba = true
      });
    }
  }
}
