import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import {
  IconButton,
  Tooltip,
  TextField,
  ListItem,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { RemoveOutlined } from "@material-ui/icons";

import { IField, SetFieldValue } from "../../../models/advance-search.model";
import AdvancedSubcategoryCombo from "./AdvancedSubcategoryCombo";

export interface IAdvancedFormFieldProps {
  removeItem: () => void;
  handleChange: any;
  toggleHandleChange: (n: string, v: boolean) => void;
  item: IField;
  index: number;
  name: string;
  showLabel?: boolean;
  categoryName?: string;
  setFieldValue: SetFieldValue;
}

const useStyle = makeStyles(() => ({
  includes: {
    fontSize: "0.8em",
  },
}));

const AdvancedFormField = ({
  item,
  handleChange,
  toggleHandleChange,
  removeItem,
  name,
  index,
  showLabel = false,
  categoryName = "",
  setFieldValue,
}: IAdvancedFormFieldProps) => {
  const classes = useStyle();
  return (
    <ListItem>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          {showLabel && (
            <AdvancedSubcategoryCombo
              categoryName={categoryName}
              index={index}
              name={name}
              setFieldValue={setFieldValue}
              subcategory={item}
            />
          )}
        </Grid>
        <Grid item xs={2}>
          <ToggleButtonGroup
            size="small"
            value={item.includes}
            exclusive
            onChange={(_, v) =>
              toggleHandleChange(
                `${name}[${index}].field.includes`,
                v === null ? item.includes : v
              )
            }
          >
            <ToggleButton className={classes.includes} value={true}>
              Zawiera
            </ToggleButton>
            <ToggleButton className={classes.includes} value={false}>
              Nie zawiera
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs>
          <TextField
            fullWidth
            id={`${name}[${index}].field.value`}
            name={`${name}[${index}].field.value`}
            value={item.value}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={1}>
          {index !== 0 && (
            <Tooltip title="Usuń pole">
              <IconButton onClick={removeItem}>
                <RemoveOutlined />
              </IconButton>
            </Tooltip>
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default AdvancedFormField;
