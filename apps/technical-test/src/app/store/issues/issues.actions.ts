import { createActionGroup, props} from '@ngrx/store'

export const issuesActions = createActionGroup({
    source: 'Issues',
    events:{
        'Issues Loading': props<{isLoading: boolean}>(),
        'Issues success': props<{data: any}>(),
        'Issues error': props<{error: string | null}>()
    }
})
