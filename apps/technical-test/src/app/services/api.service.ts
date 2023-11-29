import { Injectable } from '@angular/core';
import { Octokit } from "octokit";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
  ) { }
  
  getDataGithub(owner: string, repo: string) {

    const octokit = new Octokit({
      auth: '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',
    });
    const octokitPromise = octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "prometheus",
      repo: "prometheus",
      per_page: 100,
      headers: {
        "x-github-api-version": "2022-11-28",
      }
    });
    return octokitPromise
  }

}
