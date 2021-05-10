import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import wtf from "wtf_wikipedia";
import wtf_html from "wtf-plugin-html";
import DOMPurify from "dompurify";
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import { getPageByTitle } from '../../elastic/Functions';

interface IMatchParams {
  title: string;
}

interface IResultVisualisationProps extends RouteComponentProps<IMatchParams> {}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			float: 'right'
		},
		originalButton: {
			backgroundColor: theme.palette.primary.light,
		},
	}),
);

export default function ResultVisualisation(props: IResultVisualisationProps) {
  const [page, setPage] = React.useState({title: '', text: ''});
	const classes = useStyles();
	useEffect(()=>{
		getPageByTitle(props.match.params.title.replaceAll('_', ' ')).then(setPage)
	}, [props.match.params.title])

  wtf.extend(wtf_html);
  // @ts-ignore
  let output = wtf(page?.text).html();
  let outputFixedImages = output.replaceAll(
    "wikipedia.org",
    "pl.wikipedia.org"
  );
  return (
    <>
		<div className={classes.root}>
      {page?.text.length > 0 ?
      <Button className={classes.originalButton} href={`https://pl.wikipedia.org/wiki/${page.title}`}>
				Przejdź do oryginału
			</Button> : <></>}
		</div>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(outputFixedImages),
        }}
      />
    </>
  );
}
