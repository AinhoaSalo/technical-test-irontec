import { Injectable } from '@angular/core';
import { Octokit } from "octokit";
import { IssueData, Issues } from '../../models/issues-data.interface';
import { environment } from 'apps/technical-test/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  page: number = 1;
  perPage: number = 100;

  constructor() {}
  
  async getDataGithub(owner: string, repo: string): Promise<Issues> {
    let issueData: IssueData[] = [];
    let statusApi: number = 0;
    let token: string = environment.github_token;
    
    const octokit = new Octokit({
      auth: token,
    });
    const octokitPromise = octokit.paginate.iterator({
      method: "GET",
      url: "/repos/{owner}/{repo}/issues",
      owner: owner,
      repo: repo,
      per_page: this.perPage,
      page: this.page,
      headers: {
        "x-github-api-version": "2022-11-28",
      }
    });

    for await (const {data, status} of octokitPromise) {
      statusApi = status
      if (data.length === 0) {
        break;
      }
      for (const issue of data as IssueData[]) {
        issueData.push({
          html_url: issue.html_url,
          state: issue.state,
          number: issue.number,
          created_at: issue.created_at || undefined,
          updated_at: issue.updated_at || undefined,
          closed_at: issue.closed_at
        });
      }
    }
    let issues: Issues = {
      status: statusApi,
      issuesData: issueData
    } 
    return issues
  }

}
