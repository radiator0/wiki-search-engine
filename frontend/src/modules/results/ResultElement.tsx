import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { IPage } from "../../models/page.model";
import wtf from "wtf_wikipedia";
import moment from "moment";

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
        primary={
          <>
            <a
              href={"./page/" + props.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.title}
            </a>
            <Typography variant="caption">
              {" " + moment(props.timestamp).format("DD.MM.YYYY HH:mm:ss")}
            </Typography>
          </>
        }
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            ></Typography>
            {props.text ? wtf(props?.text).text().slice(0, 1000) : null}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
