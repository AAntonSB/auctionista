import React from "react"; 
import { withRouter } from "react-router"
import { FormGroup, Label, Col, Input } from "reactstrap";
import "../stylings/Listings.css";

const SearchBar = (props) => {


  return (
    <div id="search-bar-div">
      <FormGroup row id="search-bar-form">
        <Label for="search-bar-input" sm={2}>
          Search
        </Label>
        <Col sm={10}>
          <Input
            type="search"
            id="search-bar-input"
            placeholder="with a placeholder"
          />
        </Col>
      </FormGroup>
    </div>
  );

}
export default withRouter(SearchBar)