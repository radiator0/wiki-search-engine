import React from "react";
import { ICategory, SetFieldValue } from "../../../models/advance-search.model";
import AdvancedCategory from "./AdvancedCategory";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import { Add, RemoveOutlined } from "@material-ui/icons";
import AdvancedTooltip from "./AdvancedTooltip";
import AdvancedOpertor from "./AdvancedOperator";

interface IAdvancedCategoriesProps {
  categories?: ICategory[];
  handleChange: any;
  name: string;
  setFieldValue: SetFieldValue;
}

const useStyles = makeStyles(() => ({
  categories: {
    "padding-bottom": "15px",
  },
}));

const newItem = () =>
  ({
    value: "",
    operator: true,
    subcategories: [
      {
        operator: true,
        field: {
          label: "",
          value: "",
          includes: true,
        },
      },
    ],
  } as ICategory);

const addItem = (
  name: string,
  items: ICategory[] | undefined,
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
  item: ICategory,
  items: ICategory[] | undefined,
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

const AdvancedCategories = ({
  categories,
  handleChange,
  name,
  setFieldValue,
}: IAdvancedCategoriesProps) => {
  const classes = useStyles();

  return (
    <Grid className={classes.categories} container spacing={1}>
      {categories &&
        categories.map((category, index) => (
          <React.Fragment key={index}>
            {index !== 0 && (
              <AdvancedOpertor
                index={index}
                name={name}
                operator={category.operator}
                setFieldValue={setFieldValue}
                toggleTitle="Operator łączący kategorie"
                disableAnd={true}
              />
            )}
            <Grid item key={index} container>
              <Grid item xs>
                <AdvancedCategory
                  category={category}
                  handleChange={handleChange}
                  index={index}
                  name={name}
                  setFieldValue={setFieldValue}
                />
              </Grid>
              <Grid
                item
                xs={1}
                container
                direction="column"
                alignItems="center"
              >
                {index !== 0 && (
                  <AdvancedTooltip title="Usuń kategorię">
                    <IconButton
                      onClick={() =>
                        removeItem(name, category, categories, setFieldValue)
                      }
                    >
                      <RemoveOutlined fontSize="large" />
                    </IconButton>
                  </AdvancedTooltip>
                )}
                <Grid item xs />
                {index === categories.length - 1 && (
                  <AdvancedTooltip title="Dodaj kategorię">
                    <IconButton
                      onClick={() => addItem(name, categories, setFieldValue)}
                    >
                      <Add fontSize="large" />
                    </IconButton>
                  </AdvancedTooltip>
                )}
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
    </Grid>
  );
};

export default AdvancedCategories;
