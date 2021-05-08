import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ResultElement from './ResultElement';
import { Divider } from '@material-ui/core';
import { IPage } from '../../models/page.model';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

const onResultSelected = (id: number) => {
  console.log(`Selected result: ${id}.`)
}

interface IResultListProps {
  results: IPage[]
}

export default function ResultList(props: IResultListProps) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.results.map(r =>
      <React.Fragment>
        <ResultElement id={r.id} title={r.title} content={r.content} onClick={onResultSelected}></ResultElement>
        <Divider variant="fullWidth" component="li" />
      </React.Fragment>
      )}
    </List>
  );
}