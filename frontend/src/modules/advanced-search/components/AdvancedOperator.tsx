import React from "react";
import { ListItem, createStyles, makeStyles, Theme } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import { SetFieldValue } from "../../../models/advance-search.model";
import AdvancedTooltip from "./AdvancedTooltip";

interface IAdvancedOperatorProps {
  index: number;
  name: string;
  operator: boolean | null;
  setFieldValue: SetFieldValue;
  toggleTitle?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItemOperator: {
      "padding-top": theme.spacing(1),
      "padding-bottom": theme.spacing(0),
    },
    operator: {
      margin: "auto",
    },
  })
);

const AdvancedOpertor = ({
  index,
  name,
  operator,
  setFieldValue,
  toggleTitle = "",
}: IAdvancedOperatorProps) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItemOperator}>
      <AdvancedTooltip title={toggleTitle && toggleTitle}>
        <ToggleButtonGroup
          className={classes.operator}
          size="small"
          value={operator}
          exclusive
          onChange={(_, value) =>
            setFieldValue(`${name}[${index}].operator`, value)
          }
        >
          <ToggleButton value={true}>Oraz</ToggleButton>
          <ToggleButton value={false}>Lub</ToggleButton>
        </ToggleButtonGroup>
      </AdvancedTooltip>
    </ListItem>
  );
};

export default AdvancedOpertor;
