import { createFeature, createReducer, on } from "@ngrx/store";
import { issuesActions } from "./issues.actions";
import { DataStateInterface } from "../../models/issues-state.interface";


export const initialState: DataStateInterface = {
    dataService: {
        owner: '',
        repo: ''
    },
    data: [],
    error: {
        301: null,
        404: null,
        422: null
    },
}
const issuesFeature = createFeature({
    name: 'issues',
    reducer: createReducer(
        initialState,
        on(issuesActions.issuesDataService, (state, action) => ({
            ...state, 
            dataService: action.dataService
        })),
        on(issuesActions.issuesSuccess, (state, action) => ({
            ...state, 
            data: action.data
        })),
        on(issuesActions.issuesError, (state, action) => ({
            ...state, 
            error: action.error
        })),
    )
})

export const {
    name: issuesFeatureKey, 
    reducer: issuesReducer, 
    selectIssuesState
} = issuesFeature
