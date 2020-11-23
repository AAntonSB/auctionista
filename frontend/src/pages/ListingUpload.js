import { Card } from "@material-ui/core";
import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Form, Row, Col, Label, Input, FormGroup } from "reactstrap";
import "../stylings/Listings.css";

const ListingUpload = (props) => {
  const days = [];

  useEffect(() => {
    for (var i = 1; i <= 31; i++) {
      days.push(i);
    }
    
  }, []);

  return (
    <div id="listings-div">
      <Card id="listing-upload">
        <Form id="listing-form">
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="item-image-upload">Upload Image</Label>
                <Input type="file" name="file" id="item-image-upload" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="starting-price-input">Starting price</Label>
                <Input id="starting-price-input" />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="title-input">Title</Label>
                <Input id="title-input" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="reservation-price-input">Reservation price</Label>
                <Input id="reservation-price-input" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="description-text">Item Description</Label>
            <Input type="textarea" name="text" id="description-text" />
          </FormGroup>
          <FormGroup>
            <Label for="end-time-select">Choose end time</Label>
            <Input type="select" name="select" id="end-time-select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </Input>
          </FormGroup>
        </Form>
      </Card>
    </div>
  );
};
export default withRouter(ListingUpload);
