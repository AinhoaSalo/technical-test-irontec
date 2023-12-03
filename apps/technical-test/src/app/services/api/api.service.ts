import { Injectable } from '@angular/core';
import { Octokit } from "octokit";
import { IssueData } from '../../models/issues-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  page: number = 1;
  perPage: number = 100;

  constructor() {}
  
  async getDataGithub(owner: string, repo: string): Promise<IssueData[]> {
    const octokit = new Octokit({
      auth: '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',
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

    let issueData: IssueData[] = []
    
    for await (const {data} of octokitPromise) {
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
      
    return issueData
  }

}
