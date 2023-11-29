import { Component } from '@angular/core';
import {FormControl, Validators,} from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'tech-issues',
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.scss',
})
export class IssuesComponent {
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  issues:any;

  urlFormControl = new FormControl('', [Validators.required, Validators.pattern(this.reg)]);
  constructor(
    private apiService: ApiService
  ) {

  }
  
  onSubmit() {
    if(this.urlFormControl.valid){
      this.apiService.getDataGithub("prometheus", 'prometheus').then(result => {
        console.log(result.data)
        this.issues = result.data;
      });
    }
  }
}
