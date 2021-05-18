import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { IAdvancedSearchForm } from "../../models/advance-search.model";
import AdvancedFormGroup from "./components/AdvancedFormGroup";

import "./AdvancedSearch.css";
import AdvancedCategories from "./components/AdvancedCategories";
import { Grid, Box } from "@material-ui/core";
import AdvancedEditDate from "./components/AdvancedEditDate";
import { queryParser } from "./utils/query-parser";
import { Search as SearchIcon } from "@material-ui/icons";
import esb, { statsAggregation } from "elastic-builder";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../store";
import { saveForm } from "../../store/query/actions";

interface IAdvancedSearchProps {
  searchCheckbox: {
    checkedArticles: boolean;
    checkedDiscussion: boolean;
    checkedHelp: boolean;
  };
  getResults: (q: esb.RequestBodySearch) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: "100%",
    },
  })
);

const getInitValues: () => IAdvancedSearchForm = () => ({
  title: [
    {
      operator: null,
      field: {
        value: "",
        includes: true,
      },
    },
  ],
  content: [
    {
      operator: null,
      field: {
        value: "",
        includes: true,
      },
    },
  ],
  editDate: {
    from: undefined,
    to: undefined,
  },
  categories: [
    {
      value: "",
      operator: null,
      subcategories: [
        {
          operator: null,
          field: {
            label: "",
            value: "",
            includes: true,
          },
        },
      ],
    },
  ],
});

const AdvancedSearch = ({
  searchCheckbox,
  getResults,
}: IAdvancedSearchProps) => {
  const classes = useStyles();
  const initValues = useSelector(({ query }): IRootState => query.advancedForm);
  const dispatch = useDispatch();

  const { handleSubmit, values, handleChange, setFieldValue } = useFormik({
    initialValues:
      Object.keys(initValues).length !== 0 ? initValues : getInitValues(),
    onSubmit: () => {},
  });

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Grid container>
        <AdvancedFormGroup
          name="title"
          groupName="Tytuł"
          items={values.title}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
        <Grid item xs={1} />
        <AdvancedFormGroup
          name="content"
          groupName="Treść"
          items={values.content}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
        <Grid item xs={1} />
        <AdvancedEditDate
          editDate={values.editDate}
          groupName="Data edycji"
          setFieldValue={setFieldValue}
          name="editDate"
        />
        <Grid item xs={1} />
      </Grid>
      <AdvancedCategories
        categories={values.categories}
        handleChange={handleChange}
        name="categories"
        setFieldValue={setFieldValue}
      />
      <Box p={2}>
        <Button
          id="search-button"
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            const q = queryParser(values);

            console.log(
              JSON.stringify(esb.requestBodySearch().query(q).toJSON(), null, 2)
            );

            dispatch(saveForm(values));
            getResults(esb.requestBodySearch().query(q));
          }}
          startIcon={<SearchIcon style={{ fontSize: 26 }} />}
        >
          Wyszukaj
        </Button>
      </Box>
    </form>
  );
};

export default AdvancedSearch;
