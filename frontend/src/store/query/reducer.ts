import { ACTION_TYPES,  IQueryState } from './types';
const init: IQueryState = {
    page: {},
    pages: []
};

export function queryReducer(state: IQueryState = init, action): IQueryState {
    if(action.type === ACTION_TYPES.GET_PAGE){
        return Object.assign({}, state, {
            page: action.payload.data
        });
    }
    else if(action.type === ACTION_TYPES.GET_MATCHING_PAGES){
        return Object.assign({}, state, {
            pages: action.payload.data
        });
    }
    return state;
}