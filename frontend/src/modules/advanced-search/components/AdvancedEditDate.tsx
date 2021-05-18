import React from "react";
import {
  makeStyles,
  createStyles,
  Paper,
  Grid,
  Typography,
  Theme,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { pl } from "date-fns/locale";
import { IEditDate, SetFieldValue } from "../../../models/advance-search.model";

interface IAdvancedEditDateProps {
  editDate?: IEditDate;
  groupName: string;
  name: string;
  setFieldValue: SetFieldValue;
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

const AdvancedEditDate = ({
  editDate,
  groupName,
  setFieldValue,
  name,
}: IAdvancedEditDateProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.root}>
          <Grid item xs={2}>
            <Typography variant="h6">{groupName}</Typography>
          </Grid>
          <Grid item xs={2} />
          <MuiPickersUtilsProvider locale={pl} utils={DateFnsUtils}>
            <Grid item xs container spacing={2}>
              <Grid item xs container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd.MM.yyyy"
                  margin="normal"
                  label="Od"
                  autoOk={true}
                  value={editDate?.from || null}
                  onChange={(date) => {
                    date?.setUTCHours(0);
                    date?.setUTCMinutes(0);
                    setFieldValue(`${name}.from`, date);
                  }}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd.MM.yyyy"
                  margin="normal"
                  label="Do"
                  autoOk={true}
                  value={editDate?.to || null}
                  onChange={(date) => setFieldValue(`${name}.to`, date)}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
      </Paper>
    </div>
  );
};

export default AdvancedEditDate;
