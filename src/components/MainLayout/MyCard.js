import React from "react";
import { Card, Form, Col, Image } from "react-bootstrap";
import "../../assets/MyCard.css";
class MyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisable: false
    }
    this.isDisableFunction = this.isDisableFunction.bind(this);
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) { }

  isDisableFunction() {

    this.state.isDisable ?
      this.setState({
        isDisable: false
      })
      :
      this.setState({
        isDisable: true
      });
  }

  render() {
    return (
      <div className={this.state.isDisable ? "myCard disable" : "myCard"}>
        <Card className="text-center">
          <Card.Header>
            <Form.Check
              onClick={this.isDisableFunction}
              style={{ float: "right" }}
              type="switch"
              id={this.props.id}
              label=""
            />
          </Card.Header>
          <div onClick={() => this.props.showModalFunction(this.state.isDisable, this.props.imageProfileUrl)}>
            <Col>
              <Image style={{ width: "150px", height: "150px", marginTop: "5px" }} src={this.props.imageProfileUrl} roundedCircle />
            </Col>
            <Card.Body>
              <Card.Text>
                {this.props.name}
              </Card.Text>
              <Card.Text>
                {this.props.email}
              </Card.Text>
              <Card.Text>
                {this.props.street}
              </Card.Text>
              <Card.Text>
                {this.props.zipcode}
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
      </div>
    );
  }
}
export default MyCard;
