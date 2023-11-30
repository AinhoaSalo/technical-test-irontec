import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../../services/api.service";
import { inject } from "@angular/core";
import { issuesActions } from "./issues.actions";
import { switchMap } from "rxjs";

// export const registerEffects = createEffect((
// actions$ = inject(Actions),
// apiService = inject(ApiService)
// ) => {
// return actions$.pipe(
//     ofType(issuesActions.issuesLoading)
//     switchMap((request) => {
//         return apiService.getDataGithub()
//     })
// )
// },{functional: true})