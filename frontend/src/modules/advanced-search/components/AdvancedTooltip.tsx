import React from "react";
import { Tooltip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  tooltip: {
    fontSize: "1.1em",
  },
}));

const AdvancedTooltip = ({
  title,
  children,
}: {
  title: string;
  children: any;
}) => {
  const classes = useStyles();

  return (
    <Tooltip
      title={title}
      classes={{ tooltip: classes.tooltip }}
      leaveDelay={100}
      arrow
    >
      {children}
    </Tooltip>
  );
};

export default AdvancedTooltip;
