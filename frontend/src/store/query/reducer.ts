import { ACTION_TYPES, IQueryState } from "./types";
import { IJsonCategory } from "../../models/json-category.model";
const init: IQueryState = {
  page: {},
  pagesPrompt: [],
  categoriesPrompt: [],
  categoriesAttributePrompt: {},
  results: [],
  advancedForm: {},
};

export function queryReducer(state: IQueryState = init, action): IQueryState {
  if (action.type === ACTION_TYPES.GET_PAGE) {
    let data = action.payload.data;
    return Object.assign({}, state, {
      page:
        data?.hits?.hits?.length > 0
          ? {
              title: data.hits.hits[0]._source.title,
              ...data.hits.hits[0]._source.revision,
              text: data.hits.hits[0]._source.revision.text._
                ? data.hits.hits[0]._source.revision.text._
                : data.hits.hits[0]._source.revision.text,
            }
          : null,
    });
  } else if (action.type === ACTION_TYPES.GET_MATCHING_PAGES_PROMPTING) {
    let data = action.payload.data;
    return Object.assign({}, state, {
      pagesPrompt:
        data?.hits?.hits?.length > 0
          ? data.hits.hits.map((hit) => hit._source)
          : [],
    });
  } else if (action.type === ACTION_TYPES.RESET) {
    return Object.assign({}, state, {
      pagesPrompt: [],
    });
  } else if (action.type === ACTION_TYPES.GET_CATEGORY_PROMPT) {
    const categories: IJsonCategory[] = action.payload;
    return {
      ...state,
      categoriesPrompt: categories && categories.length ? categories : [],
    };
  } else if (action.type === ACTION_TYPES.GET_CATEGORY_ATTRIBUTES_PROMPT) {
    const category: IJsonCategory | null | undefined = action.payload[0];
    const { categoriesAttributePrompt } = state;

    if (!category) {
      return { ...state };
    }

    return {
      ...state,
      categoriesAttributePrompt: {
        ...categoriesAttributePrompt,
        [category.name]: category.attributes,
      },
    };
  } else if (action.type === ACTION_TYPES.GET_RESULTS) {
    const results = action.payload;

    return {
      ...state,
      results:
        results?.hits?.hits?.length > 0
          ? results.hits.hits.map(
              ({ _source }: { _source: { title: string; revision: any } }) => ({
                title: _source.title,
                ..._source.revision,
                text: _source.revision.text._
                  ? _source.revision.text._
                  : _source.revision.text,
              })
            )
          : [],
    } as IQueryState;
  } else if (action.type === ACTION_TYPES.SAVE_FORM) {
    return {
      ...state,
      advancedForm: action.payload,
    } as IQueryState;
  }
  return state;
}
