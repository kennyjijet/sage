import React from "react";
import { Table, Modal, Col, Image } from "react-bootstrap";
import { backendData, backendDataPhoto } from "../../actions/actions";
import { connect } from "react-redux";
import MyCard from "./MyCard";
import '../../assets/BodyMain.css'
import MyModal from "./MyModal";

class BodyMainLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    if (process.env.NODE_ENV !== "production") {
      console.log("this is not production");
      console.log("TEST");
    }
    this.state = {
      itemsLocal: [],
      itemsPhotosLocal: [],
      test: "test",
      cards: [],
      showModal: false,
      clickedUrl: ''
    };
    this.renderCompleted = false;
    this.showModalFunction = this.showModalFunction.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    this.props.backendData();
    this.props.backendDataPhoto();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items.length > 0) {
      this.setState({
        itemsLocal: nextProps.items
      });
    }
    if (nextProps.itemsPhotos.length > 0) {
      this.setState({
        itemsPhotosLocal: nextProps.itemsPhotos
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
  }

  componentDidUpdate(previousProps, previousState) {
    console.log(this.state.itemsLocal);
    console.log(this.state.itemsPhotosLocal);
  }
  /*
    shouldComponentUpdate(nextProps, nextState) {
      console.log((this.state.cards.length < 10 && this.state.itemsPhotosLocal.length > 0));
      return (this.state.cards.length < 10 && this.state.itemsPhotosLocal.length > 0);
    }
  */
  showModalFunction(isDisable, urlImg) {
    this.setState({
      clickedUrl: urlImg
    })

    if (!isDisable) {
      this.state.showModal ?
        this.setState({
          showModal: false,
        })
        :
        this.setState({
          showModal: true,
        });
    }
  }

  handleClose() {

    this.setState({
      showModal: false,
    })
  }
  render() {
    this.state.itemsLocal.forEach((value, index) => {
      if (this.state.cards.length < 10 && this.state.itemsPhotosLocal.length > 0) {
        this.state.cards.push(<MyCard
          showModalFunction={this.showModalFunction}
          id={value.id}
          imageProfileUrl={this.state.itemsPhotosLocal[index].download_url}
          name={value.name}
          email={value.email}
          street={value.address.street}
          zipcode={value.address.zipcode}
        />);
      }
    });
    return (
      <>
        <div class="bodyMain">
          {this.state.cards}
        </div>

        <Modal show={this.state.showModal} onHide={this.handleClose}>
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
                }} src={this.state.clickedUrl} roundedCircle />
              </div>
            </Col>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

const mapStateToProps = state => ({
  items: state.backendDatas.items,
  itemsPhotos: state.backendDatas.itemsPhotos
});
export default connect(mapStateToProps, { backendData, backendDataPhoto })(
  BodyMainLayout
);


/*
<MyModal showModal={this.state.showModal} imageProfileUrl={this.state.clickedUrl} />
{this.state.showModal ? <MyModal imageProfileUrl={this.state.clickedUrl} /> : null}
*/