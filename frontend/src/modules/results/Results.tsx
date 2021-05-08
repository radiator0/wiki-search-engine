import { TablePagination } from '@material-ui/core';
import React from 'react';
import ResultList from './ResultList';
import results from './MockedResults';

export default function Results() {
  const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
	};

	return (
		<React.Fragment>
			<ResultList results={results.slice(page * rowsPerPage, Math.min(page * rowsPerPage + rowsPerPage, results.length))}></ResultList>
			<TablePagination
				component="div"
				count={results.length}
				page={page}
				onChangePage={handleChangePage}
				rowsPerPage={rowsPerPage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</React.Fragment>
	);
}