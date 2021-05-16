import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { IAdvancedSearchForm } from "../../models/advance-search.model";
import AdvancedFormGroup from "./components/AdvancedFormGroup";

import "./AdvancedSearch.css";
import AdvancedCategories from "./components/AdvancedCategories";
import { Grid } from "@material-ui/core";
import AdvancedEditDate from "./components/AdvancedEditDate";
import { queryParser } from "./utils/query-parser";

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

const AdvancedSearch = () => {
  const classes = useStyles();

  const { handleSubmit, values, handleChange, setFieldValue } = useFormik({
    initialValues: getInitValues(),
    onSubmit: (values) => {
      alert(JSON.stringify(queryParser(values), null, 2));
    },
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
      <Button color="secondary" variant="contained" fullWidth type="submit">
        Show
      </Button>
    </form>
  );
};

export default AdvancedSearch;
