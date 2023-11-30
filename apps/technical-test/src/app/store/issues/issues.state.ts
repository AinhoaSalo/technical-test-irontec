export const ISSUES_REPO_GITHUB = 'Issues';

export interface IssuesState {
    [ISSUES_REPO_GITHUB]: IssuesState
}

export interface IssuesDataState {
    isLoading: boolean,
    data: any,
    error: string | null

}