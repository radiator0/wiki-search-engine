import React from "react";
import { IconButton, Typography, Grid, List, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";

import {
  IFieldOperator,
  SetFieldValue,
} from "../../../models/advance-search.model";

import AdvancedFormField from "./AdvancedFormField";
import AdvancedOperator from "./AdvancedOperator";
import AdvancedTooltip from "./AdvancedTooltip";

interface IAdvnacedFormGroupProps {
  groupName: string;
  name: string;
  items?: IFieldOperator[];
  setFieldValue: SetFieldValue;
  handleChange: any;
  children?: any;
  showLabel?: boolean;
  categoryName?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(0.5),
    },
    paper: {
      padding: theme.spacing(2),
    },
  })
);

const newItem: () => IFieldOperator = () => ({
  field: {
    value: "",
    includes: true,
  },
  operator: true,
});

const addItem = (
  name: string,
  items: IFieldOperator[] | undefined,
  setFieldValue: SetFieldValue
) => {
  if (items) {
    setFieldValue(name, [...items, newItem()]);
  } else {
    setFieldValue(name, [newItem()]);
  }
};

const removeItem = (
  name: string,
  item: IFieldOperator,
  items: IFieldOperator[] | undefined,
  setFieldValue: SetFieldValue
) => {
  if (!items) {
    return;
  }

  setFieldValue(
    name,
    items.filter((i) => i !== item)
  );
};

const AdvancedFormGroup = ({
  groupName,
  items,
  name,
  setFieldValue,
  handleChange,
  children,
  showLabel = false,
  categoryName = "",
}: IAdvnacedFormGroupProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.root}>
          <Grid item xs={1}>
            <Typography variant="h6">{groupName}</Typography>
          </Grid>
          <Grid item xs>
            <List>
              {children && children}
              {items?.map((item, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && (
                    <AdvancedOperator
                      index={index}
                      name={name}
                      operator={item.operator}
                      setFieldValue={setFieldValue}
                    />
                  )}
                  <AdvancedFormField
                    item={item.field}
                    name={name}
                    index={index}
                    handleChange={handleChange}
                    toggleHandleChange={(name: string, value: boolean) =>
                      setFieldValue(name, value)
                    }
                    removeItem={() =>
                      removeItem(name, item, items, setFieldValue)
                    }
                    showLabel={showLabel}
                    categoryName={categoryName}
                    setFieldValue={setFieldValue}
                  />
                </React.Fragment>
              ))}
            </List>
          </Grid>
          <Grid item container justify="flex-end">
            <AdvancedTooltip title="Dodaj pole">
              <IconButton onClick={() => addItem(name, items, setFieldValue)}>
                <Add />
              </IconButton>
            </AdvancedTooltip>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AdvancedFormGroup;
