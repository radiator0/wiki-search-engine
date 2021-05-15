import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import { IField, SetFieldValue } from "../../../models/advance-search.model";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../store";
import { IJsonCategory } from "../../../models/json-category.model";
import { getCategoryAttributes } from "../../../store/query/actions";
import AdvancedTooltip from "./AdvancedTooltip";

interface IAdvancedSubcategoryComboProps {
  categoryName: string;
  index: number;
  name: string;
  setFieldValue: SetFieldValue;
  subcategory: IField;
}

const AdvancedSubcategoryCombo = ({
  categoryName,
  index,
  name,
  setFieldValue,
  subcategory,
}: IAdvancedSubcategoryComboProps) => {
  const categoriesPrompt: IJsonCategory[] = useSelector(
    ({ query }: IRootState) => query.categoriesAttributePrompt,
    shallowEqual
  );

  const dispatch = useDispatch();

  const options = categoriesPrompt[categoryName]
    ? categoriesPrompt[categoryName]
    : [];

  return (
    <AdvancedTooltip title={subcategory.label ? `"${subcategory.label}"` : ""}>
      <Autocomplete
        freeSolo
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            label="Nazwa podkategorii"
            margin="normal"
            variant="outlined"
            value={subcategory.label}
            onClick={() =>
              categoryName && dispatch(getCategoryAttributes(categoryName))
            }
            onChange={() => dispatch(getCategoryAttributes(categoryName))}
            onBlur={({ target }) =>
              setFieldValue(`${name}[${index}].field.label`, target.value)
            }
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </AdvancedTooltip>
  );
};

export default AdvancedSubcategoryCombo;
