import { ACTION_TYPES } from './types';
import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { IPage } from '../../models/page.model';
import cfg from "../../config/default.json";

const elasticUrl = "http://" + cfg.elastic.host + ":" + cfg.elastic.port;

export function getPageByTitle(title: string) {
  return function(dispatch){
    dispatch(showLoading())
    return axios.post<IPage>(elasticUrl + `/_search`, {
      size: 1,
      query: {
        bool: {
          must: {
            match: { title: title },
          },
          must_not: {
            exists: { field: "redirect" },
          },
        },
      },
    })
    .then(json => {
      dispatch({type: ACTION_TYPES.GET_PAGE, payload: json});
      dispatch(hideLoading());
    })
  };
}

export function getMatchingPages(titlePattern: string) {
  return function(dispatch){
    dispatch(showLoading())
    return axios.get<IPage[]>(`http://localhost:4000/pages?title_like=`+titlePattern)
    .then(json => {
      dispatch({type: ACTION_TYPES.GET_MATCHING_PAGES, payload: json});
      dispatch(hideLoading());
    })
  };
}
