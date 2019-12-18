import React from "react";
import { Card, Form, Col, Image, Modal } from "react-bootstrap";
import MyCard from "./MyCard"
import "../../assets/MyCard.css";
class MyModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.showModal
        }
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div class="myCard">
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Col>
                            <div style={{
                                textAlign: 'center'
                            }}>
                                <Image style={{
                                    width: "150px", height: "150px", marginTop: "5px",
                                    textAlign: "center"
                                }} src={this.props.imageProfileUrl} roundedCircle />
                            </div>
                        </Col>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
export default MyModal;
