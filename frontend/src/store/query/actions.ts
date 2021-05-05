import { ACTION_TYPES } from './types';
import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { IPage } from '../../models/Page.model';

export function getPage(id: string) {
  return function(dispatch){
    dispatch(showLoading())
    return axios.post<IPage>(`http://localhost:4000/pages/`+id)
    .then(json => {
      dispatch({type: ACTION_TYPES.GET_PAGE, payload: json});
      dispatch(hideLoading());
    })
  };
}
