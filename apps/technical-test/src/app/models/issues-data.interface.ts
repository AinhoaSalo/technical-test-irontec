export interface IssueData {
  number: number;
  state: string;
  created_at: Date;
  updated_at?: Date;
  closed_at?: Date;
  html_url: string;
}