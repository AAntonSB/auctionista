import React from "react"; 
import { withRouter } from "react-router"
import { FormGroup, Label, Col, Input, Button } from "reactstrap";
import "../css/Listings.css";

const SearchBar = (props) => {


  return (
    <div id="search-bar-div">
      <FormGroup row id="search-bar-form">
        <Col sm={7}>
          <Input
            type="search"
            id="search-bar-input"
            placeholder="Search"
          />
        </Col>
        <Col sm={1}>
          <Button id="search-button">Search</Button>
        </Col>
      </FormGroup>
    </div>
  );

}
export default withRouter(SearchBar)