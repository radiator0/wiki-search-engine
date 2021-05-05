import React from "react";
import "./Search.css";
import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button/Button";
import { getMatchingPages } from "../../store/query/actions";
import { connect } from "react-redux";
import { IRootState } from "../../store";
import { IPage } from "../../models/page.model";

export interface ISearchProps extends StateProps, DispatchProps {}

class Search extends Component<ISearchProps> {
  handleInputChange(event) {
    const { getMatchingPages } = this.props;
    getMatchingPages(event.target.value);
  }

  render() {
    const { pages } = this.props;
    return (
      <div>
        <Autocomplete
          style={{
            maxWidth: "950px",
            minWidth: "950px",
            margin: "0 auto",
            display: "flex",
          }}
          freeSolo
          id="search-autocomplete"
          disableClearable
          options={pages.map((page: IPage) => page.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Wyszukiwarka"
              margin="normal"
              variant="outlined"
              onChange={this.handleInputChange.bind(this)}
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
        <Button
          id="search-button"
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SearchIcon style={{ fontSize: 26 }} />}
        >
          Wyszukaj
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ query }: IRootState) => ({
  pages: query.pages,
});

const mapDispatchToProps = {
  getMatchingPages,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Search);
