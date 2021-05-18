import { TablePagination } from "@material-ui/core";
import React from "react";
import ResultList from "./ResultList";
import mockResults from "./MockedResults";
import { IPage } from "../../models/page.model";

export default function Results({ results }: { results: IPage[] }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // console.log(results);

  const isPage = (page: IPage | undefined): page is IPage => {
    return !!page;
  };

  return (
    <React.Fragment>
      <ResultList
        results={Array.from(new Set(results.map((r) => r.id)))
          .map((id) => results.find((r) => r.id === id))
          .filter(isPage)
          .slice(
            page * rowsPerPage,
            Math.min(
              page * rowsPerPage + rowsPerPage,
              Array.from(new Set(results.map((r) => r.id))).length
            )
          )}
      ></ResultList>
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
