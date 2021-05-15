import React from "react";
import { ListItem, Grid, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../store";
import { getMatchingCategories } from "../../../store/query/actions";
import { SetFieldValue, ICategory } from "../../../models/advance-search.model";
import { IJsonCategory } from "../../../models/json-category.model";

interface IAdvancedCategoryComboProps {
  category: ICategory;
  index: number;
  name: string;
  setFieldValue: SetFieldValue;
}

const AdvancedCategoryCombo = ({
  category,
  index,
  name,
  setFieldValue,
}: IAdvancedCategoryComboProps) => {
  const categoriesPrompt: IJsonCategory[] = useSelector(
    ({ query }: IRootState) => query.categoriesPrompt,
    shallowEqual
  );
  const dispatch = useDispatch();

  return (
    <ListItem>
      <Grid container spacing={2}>
        <Grid item xs={5} />
        <Grid item xs>
          <Autocomplete
            freeSolo
            options={categoriesPrompt.map((c) => c.name)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Nazwa kategorii"
                margin="normal"
                variant="outlined"
                value={category.value}
                onClick={() => dispatch(getMatchingCategories(""))}
                onChange={({ target }) =>
                  dispatch(getMatchingCategories(target.value))
                }
                onBlur={(e) =>
                  setFieldValue(`${name}[${index}].value`, e.target.value)
                }
                InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </ListItem>
  );
};

export default AdvancedCategoryCombo;
