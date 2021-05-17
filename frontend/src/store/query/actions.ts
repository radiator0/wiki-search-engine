import { ACTION_TYPES } from "./types";
import axios from "axios";
import {
  showLoading,
  hideLoading,
  resetLoading,
} from "react-redux-loading-bar";
import { IPage } from "../../models/page.model";
import cfg from "../../config/default.json";
import { IJsonCategory } from "../../models/json-category.model";
import { Dispatch } from "redux";
import esb from "elastic-builder";
import { IAdvancedSearchForm } from "../../models/advance-search.model";

const elasticUrl = "http://" + cfg.elastic.host + ":" + cfg.elastic.port;
const jsonServerUrl = `http://${cfg.jsonServer.host}:${cfg.jsonServer.port}`;

export function getPageByTitle(title: string) {
  return function (dispatch) {
    dispatch(resetLoading());
    dispatch(showLoading());
    return axios
      .post<IPage>(elasticUrl + `/_search`, {
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
      .then((json) => {
        dispatch({ type: ACTION_TYPES.GET_PAGE, payload: json });
        dispatch(hideLoading());
      });
  };
}

export function getMatchingPages(titlePattern: string) {
  titlePattern = titlePattern.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
  return function (dispatch) {
    dispatch(resetLoading());
    dispatch(showLoading());
    return axios
      .get<IPage[]>(elasticUrl + `/_search?q=title:*` + titlePattern + "*")
      .then((json) => {
        dispatch({
          type: ACTION_TYPES.GET_MATCHING_PAGES_PROMPTING,
          payload: json,
        });
        dispatch(hideLoading());
      });
  };
}

export function getMatchingCategories(categoryPattern: string) {
  return async (dispatch: Dispatch) => {
    dispatch(resetLoading());
    dispatch(showLoading());

    return axios
      .get<IJsonCategory[]>(
        `${jsonServerUrl}/categories?name_like=${categoryPattern}&_sort=name`
      )
      .then((json) => {
        dispatch({
          type: ACTION_TYPES.GET_CATEGORY_PROMPT,
          payload: json.data,
        });
        dispatch(hideLoading());
      });
  };
}

export function getCategoryAttributes(categoryName: string) {
  return async (dispatch: Dispatch) => {
    dispatch(resetLoading());
    dispatch(showLoading());

    return axios
      .get<IJsonCategory[]>(
        `${jsonServerUrl}/categories?name=${categoryName}&_sort=name`
      )
      .then((json) => {
        dispatch({
          type: ACTION_TYPES.GET_CATEGORY_ATTRIBUTES_PROMPT,
          payload: json.data,
        });
        dispatch(hideLoading());
      });
  };
}

export function getResults(query: esb.RequestBodySearch) {
  return function (dispatch: Dispatch) {
    dispatch(resetLoading());
    dispatch(showLoading());

    return axios
      .post<IPage>(elasticUrl + `/_search`, query.size(1000).toJSON())
      .then((json) => {
        dispatch({ type: ACTION_TYPES.GET_RESULTS, payload: json.data });
        dispatch(hideLoading());
      });
  };
}

export function saveForm(form: IAdvancedSearchForm) {
  return function (dispatch: Dispatch) {
    dispatch({ type: ACTION_TYPES.SAVE_FORM, payload: form });
  };
}
