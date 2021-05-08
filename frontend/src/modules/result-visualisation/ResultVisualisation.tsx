import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IMatchParams {
	id: string;
}


interface IResultVisualisationProps extends RouteComponentProps<IMatchParams> {
}

export default function ResultVisualisation(props: IResultVisualisationProps) {
	var Promise = require('prfun');
	var Parsoid = require('parsoid-jsapi');
	var main = Promise.async(function* () {
		var text = "I love wikitext!";
		var pdoc = yield Parsoid.parse(text, { pdoc: true });
		console.log(pdoc.document.outerHTML);
	});
	main().done();

	return (
		<React.Fragment>
		</React.Fragment>
	);
}