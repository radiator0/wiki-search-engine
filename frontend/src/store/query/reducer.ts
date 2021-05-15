import { ACTION_TYPES, IQueryState } from "./types";
import { IJsonCategory } from "../../models/json-category.model";
const init: IQueryState = {
  page: {},
  pagesPrompt: [],
  categoriesPrompt: [],
  categoriesAttributePrompt: {},
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
  }
  return state;
}
