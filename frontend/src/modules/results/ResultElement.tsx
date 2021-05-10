import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { IPage } from "../../models/page.model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxHeight: "13ch",
      overflow: "hidden",
      backgroundColor: theme.palette.grey[50],
    },
    inline: {
      display: "inline",
    },
  })
);

interface IResultElementProps extends IPage {
  onClick: (number) => void;
}

export default function ResultElement(props: IResultElementProps) {
  const classes = useStyles();

  return (
    <ListItem key={props.id} alignItems="flex-start" className={classes.root}>
      <ListItemText
        primary={<a href={"./page/" + props.title}>{props.title}</a>}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            ></Typography>
            {props.content}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
