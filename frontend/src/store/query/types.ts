import { ActionType } from "typesafe-actions";
import { IPage } from "../../models/page.model";
import * as actions from "./actions";
import { IJsonCategory } from "../../models/json-category.model";
export type QueryActions = ActionType<typeof actions>;

export interface IQueryState {
  page: IPage;
  pagesPrompt: IPage[];
  categoriesPrompt: IJsonCategory[];
  categoriesAttributePrompt: { [key: string]: string[] };
}

export enum ACTION_TYPES {
  GET_PAGE = "GET_PAGE",
  GET_MATCHING_PAGES_PROMPTING = "GET_MATCHING_PAGES_PROMPTING",
  RESET = "RESET",
  GET_CATEGORY_PROMPT = "GET_CATEGORY_PROMPT",
  GET_CATEGORY_ATTRIBUTES_PROMPT = "GET_CATEGORY_ATTRIBUTES_PROMPT",
}
