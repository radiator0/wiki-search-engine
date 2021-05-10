import { ActionType } from 'typesafe-actions';
import { IPage } from '../../models/page.model';
import * as actions from './actions';
export type QueryActions = ActionType<typeof actions>;

export interface IQueryState {
    page: IPage,
    pagesPrompt: IPage[]
}

export enum ACTION_TYPES {
    GET_PAGE = 'GET_PAGE',
    GET_MATCHING_PAGES_PROMPTING = 'GET_MATCHING_PAGES_PROMPTING',
    RESET = 'RESET'
}