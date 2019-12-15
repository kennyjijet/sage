import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import FormAbout from '../components/About/FormAbout';
import { backendData } from '../actions/actions';
import { connect } from 'react-redux';

import '../assets/about.scss';


class About extends React.Component {
    constructor(props) {
        super(props)
        if (process.env.NODE_ENV !== 'production') {
            console.log('this is not production');
            console.log("TEST");
        }
    }

    componentWillMount() {
        //this.props.backendData();
      }

    componentDidMount() {
        this.props.backendData();
        console.log(this.props.posts);
        //console.log(this.props.posts);
        //for fetch data.
    }

    //shouldComponentUpdate(nextProps, nextState) {
        //return this.state.books !== nextState.books;
    //}
    
    componentWillUpdate(nextProps, nextState){

        //this.setState({books: nextProps.books});
    } 

    componentWillReceiveProps(nextProps) {
        //for redux
        
        //console.log(this.props.posts);
       if(nextProps.posts)
       {    //console.log(nextProps.posts);
            //this.setState({posts: nextProps.posts});
            //this.props.posts = nextProps.posts;
            //console.log(this.props.posts);
            this.props.posts.unshift(nextProps.posts);

        }
    }

    render() {
        return (
            <div className="about">
                <Navigation />
                <FormAbout />
                <Container fluid="true">
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

About.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
  };

const mapStateToProps = state => ({
    posts: state.backendDatas.items
});

export default connect(mapStateToProps, { backendData })(About);
