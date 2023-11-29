import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { IssuesComponent } from "./issues.component";
import { StoreModule } from "@ngrx/store";
import { reducers } from "../../store/issues/issues.reducers";

@NgModule({
imports: [
  CommonModule, 
  FormsModule, 
  MatFormFieldModule, 
  MatInputModule, 
  ReactiveFormsModule,
  MatButtonModule, 
  MatTooltipModule, 
  MatIconModule,
  StoreModule.forFeature('Issues', reducers)
],
declarations: [IssuesComponent],
exports: [IssuesComponent]
})
export class IssuesModule {}