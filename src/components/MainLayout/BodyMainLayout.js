import React, { useState, useEffect } from "react";
import { Table, Modal, Col, Image } from "react-bootstrap";
import { backendData, backendDataPhoto } from "../../actions/actions";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import MyCard from "./MyCard";
//import '../../assets/BodyMain.css'
import MyModal from "./MyModal";


const BodyMainLayout = () => {
  const content = useSelector(state => state);
  const dispatch = useDispatch();
  const [showModal, setShow] = useState(false);
  const [clickedUrl, setImgURL] = useState("");

  const loading = "Loading";
  //let showModal = false;

  const handleClose = () => setShow(false);
  const handleShow = (isDisable, urlImg) => {
    setImgURL(urlImg);
    if (!isDisable) {
      setShow(true);
    }
  }

  /*
    const showModalFunction = (isDisable, urlImg) => {
      clickedUrl = urlImg;
      if (!isDisable) {
        (showModal) ?
          (showModal = false)
          :
          (showModal = true)
      }
      alert(showModal);
    };
    */
  /*
    const handleClose = () => {
      showModal = false;
    }
  */

  //const [data, setData] = useState({ items: [] });
  //backendData();
  //backendDataPhoto();
  //const {receiveAmount, sendAmount } = props
  //const prevAmount = usePrevious({receiveAmount, sendAmount});
  useEffect(() => {
    dispatch(backendData());
    dispatch(backendDataPhoto());
    //setData(items);
    //console.log(props.items);
    //console.log(props.items);
  }, {});
  //console.log(content.backendDatas.items.length > 0);
  //console.log(content.backendDatas.itemsPhotos.length > 0);
  //console.log((content.backendDatas.items.length > 0 && content.backendDatas.itemsPhotos.length > 0));

  const bodyMain = {
    textAlign: "center",
    backgroundColor: "gray"
  };

  return (
    <>
      <div style={bodyMain}>
        {
          (content.backendDatas.items.length > 0 && content.backendDatas.itemsPhotos.length > 0) ? (
            content.backendDatas.items.map((value, index) => {
              return (<MyCard
                key={index}
                showModalFunction={handleShow}
                id={value.id}
                imageProfileUrl={content.backendDatas.itemsPhotos[index].download_url}
                name={value.name}
                email={value.email}
                street={value.address.street}
                zipcode={value.address.zipcode}
              />)
            })
          ) : (
              <h1>{loading}</h1>
            )
        }
      </div>

      <Modal show={showModal} onHide={handleClose}>
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
              }} src={clickedUrl} roundedCircle />
            </div>
          </Col>
        </Modal.Body>
      </Modal>

    </>
  );
}
export default BodyMainLayout;



/*
         cards.push(<MyCard
           showModalFunction={showModalFunction}
           id={value.id}
           imageProfileUrl={content.backendDatas.itemsPhotos[index].download_url}
           name={value.name}
           email={value.email}
           street={value.address.street}
           zipcode={value.address.zipcode}
         />);
         */


/*
const mapStateToProps = state => ({
  items: state.backendDatas.items,
  itemsPhotos: state.backendDatas.itemsPhotos
});
const mapDispatchToProps = { backendData, backendDataPhoto };
*/
/*
export default connect(mapStateToProps, mapDispatchToProps)(
  BodyMainLayout
);
*/



/*
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
  async componentDidMount() {
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
    if (this.state.cards.length < 10 && this.state.itemsPhotosLocal.length > 0) {
      this.state.itemsLocal.forEach((value, index) => {
        this.state.cards.push(<MyCard
          showModalFunction={this.showModalFunction}
          id={value.id}
          imageProfileUrl={this.state.itemsPhotosLocal[index].download_url}
          name={value.name}
          email={value.email}
          street={value.address.street}
          zipcode={value.address.zipcode}
        />);
      });
    }

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
*/
/*
<MyModal showModal={this.state.showModal} imageProfileUrl={this.state.clickedUrl} />
{this.state.showModal ? <MyModal imageProfileUrl={this.state.clickedUrl} /> : null}
*/