import React from "react";
import { Component } from "react";
import "./SearchCheckboxes.css";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { CheckboxType } from "../../../models/checkbox-type.enum";

interface ISearchCheckboxesProps {
  checkedArticles: boolean;
  checkedDiscussion: boolean;
  checkedHelp: boolean;
  toggleCheck: (type: CheckboxType) => void;
}

class SearchCheckboxes extends Component<ISearchCheckboxesProps, {}> {
  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.props.checkedArticles}
              onChange={() => this.props.toggleCheck(CheckboxType.ARTICLE)}
              name="primary"
              color="primary"
            />
          }
          label="Artykuły"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.props.checkedDiscussion}
              onChange={() => this.props.toggleCheck(CheckboxType.DISCUSSION)}
              name="checkedB"
              color="secondary"
            />
          }
          label="Dyskusje"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={this.props.checkedHelp}
              onChange={() => this.props.toggleCheck(CheckboxType.HELP)}
              name="checkedC"
              color="secondary"
            />
          }
          label="Pomoc"
        />
      </FormGroup>
    );
  }
}
export default SearchCheckboxes;
