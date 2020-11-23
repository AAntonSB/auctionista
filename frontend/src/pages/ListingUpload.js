import { Card } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import {Form, Row, Col, Label, Input, FormGroup, Button} from "reactstrap";
import "../stylings/Listings.css";

const ListingUpload = (props) => {

  return (
    <div id="listings-div">
      <Card id="listing-upload">
        <Form>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              File
            </Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" />
            </Col>
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );

}
export default withRouter(ListingUpload);