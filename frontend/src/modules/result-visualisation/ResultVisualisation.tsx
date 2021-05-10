import "./ResultVisualisation.css";
import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import wtf from "wtf_wikipedia";
import wtf_html from "wtf-plugin-html";
import DOMPurify from "dompurify";
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import { getPageByTitle } from "../../elastic/Functions";
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import Box from "@material-ui/core/Box/Box";
import Grid from "@material-ui/core/Grid/Grid";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

interface IMatchParams {
  title: string;
}

interface IResultVisualisationProps extends RouteComponentProps<IMatchParams> {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      float: "right",
    },
  })
);

export default function ResultVisualisation(props: IResultVisualisationProps) {
  const [page, setPage] = React.useState({ title: "", text: "" });
  const classes = useStyles();
  useEffect(() => {
    getPageByTitle(props.match.params.title.replaceAll("_", " ")).then(setPage);
  }, [props.match.params.title]);

  wtf.extend(wtf_html);
  // @ts-ignore
  let output = wtf(page?.text).html();
  let outputFixedImages = output.replaceAll(
    "wikipedia.org",
    "pl.wikipedia.org"
  );
  return (
    <>
      <Box mt={0} m={5} p={3} ml={35} mr={35} pt={0}>
        <Paper elevation={3}>
          <Box p={5} pt={2}>
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <Typography variant="h4" gutterBottom>
                  {page.title}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.root}>
                  {page?.text.length > 0 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      href={`https://pl.wikipedia.org/wiki/${page.title}`}
                      endIcon={<ExitToAppIcon>send</ExitToAppIcon>}
                    >
                      Przejdź do oryginału
                    </Button>
                  ) : (
                    <></>
                  )}
                </div>
              </Grid>
            </Grid>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(outputFixedImages),
              }}
            />
          </Box>
        </Paper>
      </Box>
    </>
  );
}
