import React from "react";
import { Component } from "react";
import "./SearchCheckboxes.css";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class SearchCheckboxes extends Component {
  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              //   checked={state.checkedA}
              //   onChange={handleChange}
              name="primary"
              color="primary"
              checked={true}
            />
          }
          label="Artykuły"
        />
        <FormControlLabel
          control={
            <Checkbox
              //   checked={state.checkedB}
              //   onChange={handleChange}
              name="checkedB"
              color="secondary"
            />
          }
          label="Dyskusje"
        />

        <FormControlLabel
          control={
            <Checkbox
              //   checked={state.checkedC}
              //   onChange={handleChange}
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
