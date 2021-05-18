import "./ResultVisualisation.css";
import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import wtf from "wtf_wikipedia";
import wtf_html from "wtf-plugin-html";
import DOMPurify from "dompurify";
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import Paper from "@material-ui/core/Paper/Paper";
import Box from "@material-ui/core/Box/Box";
import Grid from "@material-ui/core/Grid/Grid";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { getPageByTitle } from "../../store/query/actions";
import { connect } from "react-redux";
import { IRootState } from "../../store";
import { IPage } from "../../models/page.model";

interface IMatchParams {
  title: string;
}

interface IResultVisualisationProps extends RouteComponentProps<IMatchParams> {
  page: IPage;
  dispatch;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      float: "right",
    },
  })
);

function ResultVisualisation(props: IResultVisualisationProps) {
  // const [page, setPage] = React.useState({ title: "", text: "" });
  const page = props.page;
  const classes = useStyles();
  useEffect(() => {
    props.dispatch(
      getPageByTitle(props.match.params.title.replaceAll("_", " "))
    );
    document.title = props.match.params.title.replaceAll("_", " ");
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
                  {page.text && page?.text?.length > 0 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      href={`https://pl.wikipedia.org/wiki/${page.title}`}
                      endIcon={<ExitToAppIcon>send</ExitToAppIcon>}
                    >
                      Przejdź do oryginału
                    </Button>
                  ) : null}
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

function mapStateToProps({ query }: IRootState) {
  return { page: query.page };
}

export default connect(mapStateToProps)(ResultVisualisation);
