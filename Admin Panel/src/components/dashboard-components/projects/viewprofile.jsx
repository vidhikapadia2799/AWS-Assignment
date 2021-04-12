import React, { Component } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel
} from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import image from "../../images/profile.jpg";

export class Viewprofile extends Component {
  constructor(props) {
    super(props);
    //this.state = {};
  }

//   onfileupload = e => {
//     this.state.file = e.target.files[0];
//     console.log(this.state.file);
//   };

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              View Profile
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <Row style={{ padding: 30 }}>
                <Col sm={12} style={{ textAlign: "center" }}>
                    <img
                      src={this.props.profile}
                      style={{
                        height: 100,
                        width: 100,
                        borderRadius: 100,
                        marginBottom: 20
                      }}
                    />

                </Col>
                <Col sm={12} style={{ textAlign: "center" }}>
                  <FormGroup controlId="Customer Name">
                    <FormLabel style={{ fontWeight: "bold", fontSize: 25 }}>
                      {this.props.name}
                    </FormLabel>
                  </FormGroup>
                </Col>
                <Col sm={12}>
                  <FormGroup controlId="Customer Email">
                    <FormLabel style={{ marginRight: 15, fontWeight: "bold" }}>
                      Email
                    </FormLabel>
                    <FormLabel>{this.props.email}</FormLabel>
                  </FormGroup>
                </Col>
                <Col sm={12}>
                  <FormGroup controlId="Customer Contactno">
                    <FormLabel style={{ marginRight: 25, fontWeight: "bold" }}>
                      Contact no
                    </FormLabel>

                    <FormLabel>
                      {this.props.num}
                    </FormLabel>
                  </FormGroup>
                </Col>
            </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="primary" onClick={this.props.onHide}>Update Service</Button> */}
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}
