import React from 'react';
import Navigation from '../components/Navigation';
import BodyMainLayout from '../components/MainLayout/BodyMainLayout';


class MainLayout extends React.Component {
    constructor(props) {
        super(props)
        if (process.env.NODE_ENV !== 'production') {
            console.log('this is not production');
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        
    }

    render() {
        return (
            <div className="mainLayout">
                <Navigation />
                <BodyMainLayout />
            </div>
        )
    }
}

export default MainLayout