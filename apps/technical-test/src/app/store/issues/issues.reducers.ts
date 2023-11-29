import { createReducer, on } from "@ngrx/store";
import { IssuesStateInterface } from "../../models/issues.interface";
import * as IssuesActions from './issues.actions'

export const initialState: IssuesStateInterface = {
    data: []

}

export const reducers = createReducer(
    initialState,
    on(IssuesActions.getIssues, (state: any) => ({
        ...state,
        data: []
    }))
)