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
import AdvancedSearch from "../advanced-search/AdvancedSearch";
import Grid from "@material-ui/core/Grid/Grid";
import SearchCheckboxes from "./search-checkboxes/SearchCheckboxes";
import Accordion from "@material-ui/core/Accordion/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails/AccordionDetails";
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box/Box";
import IconButton from "@material-ui/core/IconButton/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

export interface ISearchProps extends StateProps, DispatchProps {}

export interface ISearchStates {
  isAdvancedSearchExpanded: boolean;
}

const CustomAccordionSummary = withStyles({
  root: {
    marginBottom: 0,
    minHeight: 0,
    maxHeight: 0,
    "&$expanded": {
      minHeight: 0,
    },
  },
  content: {
    "&$expanded": {
      margin: "0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

class Search extends Component<ISearchProps, ISearchStates> {
  handleInputChange(event) {
    const { getMatchingPages } = this.props;
    const val = event.target.value;
    if (val) {
      getMatchingPages(val);
    }
  }

  handleToggleAdvancedSearch() {
    this.setState({
      isAdvancedSearchExpanded: !this.state.isAdvancedSearchExpanded,
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      isAdvancedSearchExpanded: false,
    };
  }

  render() {
    const { pagesPrompt } = this.props;
    const { isAdvancedSearchExpanded } = this.state;
    return (
      <Grid container spacing={3}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Autocomplete
            freeSolo
            id="search-autocomplete"
            disableClearable
            options={pagesPrompt.map((page: IPage) => page.title)}
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
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <SearchCheckboxes />
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              Wyszukiwanie zaawansowane
              <IconButton onClick={this.handleToggleAdvancedSearch.bind(this)}>
                {isAdvancedSearchExpanded ? (
                  <ExpandMoreIcon />
                ) : (
                  <ExpandLessIcon />
                )}
              </IconButton>
            </Grid>
          </Grid>

          <Accordion expanded={isAdvancedSearchExpanded}>
            <CustomAccordionSummary></CustomAccordionSummary>
            <AccordionDetails>
              <AdvancedSearch />
            </AccordionDetails>
          </Accordion>
          <Box p={2}>
            <Button
              id="search-button"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SearchIcon style={{ fontSize: 26 }} />}
            >
              Wyszukaj
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ query }: IRootState) => ({
  pagesPrompt: query.pagesPrompt,
});

const mapDispatchToProps = {
  getMatchingPages,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Search);
