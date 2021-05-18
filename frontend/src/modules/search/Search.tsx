import React from "react";
import "./Search.css";
import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button/Button";
import { getMatchingPages, getResults } from "../../store/query/actions";
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
import { CheckboxType } from "../../models/checkbox-type.enum";
import esb, { requestBodySearch } from "elastic-builder";
import Results from "../results/Results";

export interface ISearchProps extends StateProps, DispatchProps {}

export interface ISearchStates {
  isAdvancedSearchExpanded: boolean;
  checkedArticles: boolean;
  checkedDiscussion: boolean;
  checkedHelp: boolean;
  searchingTextBox: string;
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
    this.setState({
      ...this.state,
      searchingTextBox: val,
    });
    if (val) {
      getMatchingPages(val);
    }
    console.log(val);
  }

  handleInputChangeDropdown(val) {
    this.setState({
      ...this.state,
      searchingTextBox: val ? val : "",
    });
    if (val) {
      getMatchingPages(val);
    }
  }

  handleToggleAdvancedSearch() {
    this.setState({
      ...this.state,
      isAdvancedSearchExpanded: !this.state.isAdvancedSearchExpanded,
    });
  }

  toggleCheck(type: CheckboxType) {
    switch (type) {
      case CheckboxType.ARTICLE:
        this.setState({
          ...this.state,
          checkedArticles: !this.state.checkedArticles,
        });
        break;
      case CheckboxType.DISCUSSION:
        this.setState({
          ...this.state,
          checkedDiscussion: !this.state.checkedDiscussion,
        });
        break;
      case CheckboxType.HELP:
        this.setState({
          ...this.state,
          checkedHelp: !this.state.checkedHelp,
        });
        break;
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  searchForResults(q: esb.RequestBodySearch) {
    const { getResults } = this.props;

    this.setState({
      ...this.state,
      isAdvancedSearchExpanded: false,
    });
    this.scrollToTop();

    getResults(q);
  }

  constructor(props) {
    super(props);
    this.state = {
      isAdvancedSearchExpanded: false,
      checkedArticles: true,
      checkedDiscussion: false,
      checkedHelp: false,
      searchingTextBox: "",
    };
  }

  render() {
    const { pagesPrompt, results } = this.props;
    const {
      isAdvancedSearchExpanded,
      checkedArticles,
      checkedDiscussion,
      checkedHelp,
    } = this.state;
    return (
      <Grid container spacing={3}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Autocomplete
            freeSolo
            id="search-autocomplete"
            disableClearable
            options={pagesPrompt.map((page: IPage) => page.title)}
            onChange={(event: any, newValue: string | null) => {
              this.handleInputChangeDropdown(newValue);
            }}
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
              <SearchCheckboxes
                checkedArticles={checkedArticles}
                checkedDiscussion={checkedDiscussion}
                checkedHelp={checkedHelp}
                toggleCheck={this.toggleCheck.bind(this)}
              />
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
              <AdvancedSearch
                searchCheckbox={{
                  checkedArticles,
                  checkedDiscussion,
                  checkedHelp,
                }}
                getResults={this.searchForResults.bind(this)}
              />
            </AccordionDetails>
          </Accordion>
          {!this.state.isAdvancedSearchExpanded && (
            <Box p={2}>
              <Button
                id="search-button"
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                onClick={() =>
                  this.searchForResults(
                    esb
                      .requestBodySearch()
                      .query(
                        esb.simpleQueryStringQuery(this.state.searchingTextBox)
                      )
                  )
                }
                startIcon={<SearchIcon style={{ fontSize: 26 }} />}
              >
                Wyszukaj
              </Button>
            </Box>
          )}
        </Grid>
        <Grid item xs={2}></Grid>
        {results && !!results.length && (
          <Grid item>
            <Results results={results} />
          </Grid>
        )}
      </Grid>
    );
  }
}

const mapStateToProps = ({ query }: IRootState) => ({
  pagesPrompt: query.pagesPrompt,
  results: query.results,
});

const mapDispatchToProps = {
  getMatchingPages,
  getResults,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Search);
