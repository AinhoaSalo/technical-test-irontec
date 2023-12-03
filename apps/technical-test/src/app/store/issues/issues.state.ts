import { Issues } from "../../models/issues-data.interface";
import { ErrorsIssuesState } from "../../models/issues-state.interface";

export const ISSUES_REPO_GITHUB = 'Issues';

export interface IssuesState {
    [ISSUES_REPO_GITHUB]: IssuesState
}

export interface IssuesDataState {
    isLoading: boolean;
    data: Issues;
    error: ErrorsIssuesState;
}