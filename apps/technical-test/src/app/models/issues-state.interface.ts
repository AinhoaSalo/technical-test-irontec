import { Issues } from "./issues-data.interface";

export interface IssuesStateInterface {
  issues: DataStateInterface;
}

export interface DataStateInterface {
  dataService: DataServiceState;
  data: Issues | undefined;
  error: ErrorsIssuesState | undefined;
}

export interface DataServiceState {
  owner: string;
  repo: string;
}

export interface ErrorsIssuesState {
  name: string,
  status: number;
  response: DataErrorsIssuesState;
}

export interface DataErrorsIssuesState {
  data: {
    message: string;
    documentation_url: string;
  }
}