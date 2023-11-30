import { createFeature, createReducer, on } from "@ngrx/store";
import { DataStateInterface } from "../../models/issues.interface";
import { issuesActions } from "./issues.actions";


export const initialState: DataStateInterface = {
    isLoading: false,
    data: undefined,
    error: undefined,
}
const issuesFeature = createFeature({
    name: 'issues',
    reducer: createReducer(
        initialState,
        on(issuesActions.issuesLoading, state => ({...state, isLoading: true}))
    )
})

export const {
    name: issuesFeatureKey, 
    reducer: issuesReducer, 
    selectIsLoading
} = issuesFeature
