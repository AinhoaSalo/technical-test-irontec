import { createActionGroup, props} from '@ngrx/store';
import { IssueData } from '../../models/issues-data.interface';
import { DataServiceState, ErrorsIssuesState } from '../../models/issues-state.interface';

export const issuesActions = createActionGroup({
    source: 'Issues',
    events:{
        'Issues data service': props<{dataService: DataServiceState}>(),
        'Issues success': props<{data: IssueData[]}>(),
        'Issues error': props<{error: ErrorsIssuesState}>()
    }
})
