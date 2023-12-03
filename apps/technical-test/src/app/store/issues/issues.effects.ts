import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api/api.service';
import { inject } from '@angular/core';
import { issuesActions } from './issues.actions';
import { switchMap } from 'rxjs';

export const issuesEffects = createEffect((
  actions$ = inject(Actions),
  apiService = inject(ApiService)

) => {
  return actions$.pipe(
    ofType(issuesActions.issuesDataService),
    switchMap((request) => {
      return apiService.getDataGithub(request.dataService.owner, request.dataService.repo)
      .then((issues) =>{
        return issuesActions.issuesSuccess({ data: 
          {status: issues.status, issuesData: issues.issuesData}
        });
      }).catch((error) => {
        return issuesActions.issuesError({error: error})
      })
    })
  )
}, {functional: true});