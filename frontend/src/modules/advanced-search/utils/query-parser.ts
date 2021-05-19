import esb from "elastic-builder";
import {
  IAdvancedSearchForm,
  IField,
  IFieldOperator,
} from "../../../models/advance-search.model";

const TITLE = "title";
const CONTENT = "revision.text";
const EDIT_DATE = "revision.timestamp";
const CATEGORY = "revision.infobox";
const SUBCATEGORY = "revision.infobox-attribute";

const handleFieldOperator = (
  query: esb.BoolQuery,
  fieldName: string,
  fields?: IFieldOperator[]
) => {
  fields?.forEach(({ operator, field }) => {
    const { includes, value, label } = field;

    if (!value) {
      return;
    }

    if (operator === null || operator) {
      label && query.must(esb.matchQuery(fieldName, label));

      if (!includes) {
        query.mustNot(esb.termQuery(fieldName, value));
        return;
      }

      query.must(esb.matchQuery(fieldName, value));
      return;
    }

    if (!includes) {
      label
        ? query.should(
            esb
              .boolQuery()
              .must(esb.matchQuery(fieldName, label))
              .mustNot(esb.termQuery(fieldName, value))
          )
        : query.should(
            esb.boolQuery().mustNot(esb.termQuery(fieldName, value))
          );
      return;
    }
    label
      ? query.should(
          esb
            .boolQuery()
            .must(esb.matchQuery(fieldName, label))
            .must(esb.termQuery(fieldName, value))
        )
      : query.should(esb.termQuery(fieldName, value));
  });
};

const handleTitle = ({ title }: IAdvancedSearchForm, query: esb.BoolQuery) => {
  handleFieldOperator(query, TITLE, title);
};

const handleContent = (
  { content }: IAdvancedSearchForm,
  query: esb.BoolQuery
) => {
  handleFieldOperator(query, CONTENT, content);
};

const handleEditDate = (
  { editDate }: IAdvancedSearchForm,
  query: esb.BoolQuery
) => {
  if (!editDate) {
    return;
  }

  const { from, to } = editDate;

  if (from) {
    query.filter(esb.rangeQuery(EDIT_DATE).gte(from.toISOString()));
  }

  if (to) {
    query.filter(esb.rangeQuery(EDIT_DATE).lte(to.toISOString()));
  }
};

const handleCategories = (
  { categories }: IAdvancedSearchForm,
  query: esb.BoolQuery
) => {
  let prev: esb.BoolQuery | null = null;

  categories?.forEach(({ operator, subcategories, value }) => {
    const auxQuery = esb.boolQuery();

    if (!value) {
      return;
    }

    handleFieldOperator(auxQuery, SUBCATEGORY, subcategories);

    // if (operator === null || operator) {
    //   query.must(
    //     esb.boolQuery().must(esb.matchQuery(CATEGORY, value)).must(auxQuery)
    //   );
    //   return;
    // }

    if (!prev) {
      prev = esb
        .boolQuery()
        .should(esb.matchPhraseQuery(CATEGORY, value))
        .should(auxQuery);
      query.must(prev);
      return;
    }

    prev.should(esb.matchPhraseQuery(CATEGORY, value)).should(auxQuery);

    // query.must(
    //   esb.boolQuery().should(esb.matchQuery(CATEGORY, value)).should(auxQuery)
    // );

    // query.must(
    //   esb
    //     .boolQuery()
    //     .should(
    //       esb.boolQuery().must(esb.matchQuery(CATEGORY, value)).must(auxQuery)
    //     )
    // );
  });
};

const queryParser = (form: IAdvancedSearchForm) => {
  const boolQuery = esb.boolQuery();

  [handleTitle, handleContent, handleEditDate, handleCategories].forEach((fn) =>
    fn(form, boolQuery)
  );

  return boolQuery;
};

export { queryParser };
