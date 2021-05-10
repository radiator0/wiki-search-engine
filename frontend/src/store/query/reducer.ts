import { ACTION_TYPES,  IQueryState } from './types';
const init: IQueryState = {
    page: {},
    pages: []
};

export function queryReducer(state: IQueryState = init, action): IQueryState {
    if(action.type === ACTION_TYPES.GET_PAGE){
        var data = action.payload.data
        return Object.assign({}, state, {
            page: data?.hits?.hits?.length > 0
            ? {
                title: data.hits.hits[0]._source.title,
                ...data.hits.hits[0]._source.revision,
              }
            : null
        });
    }
    else if(action.type === ACTION_TYPES.GET_MATCHING_PAGES){
        return Object.assign({}, state, {
            pages: action.payload.data
        });
    }
    return state;
}