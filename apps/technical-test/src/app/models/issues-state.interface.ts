import { IssueData } from "./issues-data.interface";

export interface IssuesStateInterface {
    issues: DataStateInterface;
}

export interface DataStateInterface {
    dataService: DataServiceState;
    data: IssueData[];
    error: ErrorsIssuesState;
}

export interface DataServiceState {
    owner: string;
    repo: string;
}

export interface ErrorsIssuesState {
    301: string | undefined | null,
    404: string | undefined | null,
    422: string | undefined | null
}