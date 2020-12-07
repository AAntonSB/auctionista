import React, { useState, useContext } from "react"; 
import { withRouter } from "react-router"
import { FormGroup, Col, Input, Button } from "reactstrap";
import { ListingContext } from "../contexts/ListingContextProvider";
import "../css/Listings.css";

const SearchBar = (props) => {
  const [searchString, setSearchString] = useState([]);
  const listingContext = useContext(ListingContext);

  const findListings = async () => {
    
   let listings = await listingContext.getListingsByString(searchString); 
    
   console.log(listings);

  }


  return (
    <div id="search-bar-div">
      <FormGroup row id="search-bar-form">
        <Col sm={7}>
          <Input
            type="search"
            id="search-bar-input"
            placeholder="Search"
            autoComplete="off"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </Col>
        <Col sm={1}>
          <Button id="search-button" onClick={findListings}>Search</Button>
        </Col>
      </FormGroup>
    </div>
  );

}
export default withRouter(SearchBar)