import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { IPage } from '../../models/page.model';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxHeight: '13ch',
			overflow: 'hidden',
			backgroundColor: theme.palette.grey[50],
			cursor: 'pointer',
		},
		inline: {
			display: 'inline',
		},
	}),
);

interface IResultElementProps extends IPage {
	onClick: (number) => void
}

export default function ResultElement(props : IResultElementProps) {
	const classes = useStyles();

	return (
		<ListItem key={props.id} alignItems="flex-start" className={classes.root} onClick={() => props.onClick(props.id)}>
			<ListItemText
				primary={props.title}
				secondary={
					<React.Fragment>
						<Typography
							component="span"
							variant="body2"
							className={classes.inline}
							color="textPrimary"
						>
							{props.id}
          </Typography>
						{props.content}
					</React.Fragment>
				}
			/>
		</ListItem>
	);
}