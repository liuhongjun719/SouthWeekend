
import React from 'react';
import {connect} from 'react-redux';
import LeftMenu from '../pages/LeftMenu';

class LeftMenuContainer extends React.Component {
    render() {
        return (
            <LeftMenu {...this.props} />
        )
    }
}

export default connect((state) => {

    const { LeftMenu } = state;
    return {
        LeftMenu
    }
})(LeftMenuContainer);
