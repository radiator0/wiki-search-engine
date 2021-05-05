import { ActionType } from 'typesafe-actions';
import { IPage } from '../../models/Page.model';
import * as actions from './actions';
export type QueryActions = ActionType<typeof actions>;

export interface IQueryState {
    page: IPage
}

export enum ACTION_TYPES {
    GET_PAGE = 'GET_PAGE'
}